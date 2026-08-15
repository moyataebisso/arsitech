import type { NextRequest } from "next/server";

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------

export type GuardBody = Record<string, unknown> & {
  website?: unknown;
  _mt?: unknown;
};

export type GuardInput = {
  request: NextRequest;
  body: GuardBody;
  nameFields?: string[];
  emailField?: string;
};

export type GuardResult =
  | { action: "allow" }
  | { action: "silent-drop"; reason: string }
  | { action: "reject"; status: number; error: string };

const EXPECTED_ORIGIN_HOSTS = [
  "www.arsitechgroup.com",
  "arsitechgroup.com",
  "localhost:3000",
];

const MIN_MOUNT_MS = 3000;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

const SMS_GATEWAY_DOMAINS = new Set([
  "vtext.com",
  "txt.att.net",
  "tmomail.net",
  "msg.fi.google.com",
  "vzwpix.com",
  "mms.att.net",
  "pm.sprint.com",
]);

export function guard(input: GuardInput): GuardResult {
  const { request, body, nameFields = [], emailField } = input;

  // Honeypot — CSS-hidden `website` input. Bots fill it.
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";
  if (honeypot) return { action: "silent-drop", reason: "honeypot" };

  // Timing — mount timestamp on the client, reject anything faster than a human.
  const mt = typeof body._mt === "number" ? body._mt : Number(body._mt);
  if (!Number.isFinite(mt) || Date.now() - mt < MIN_MOUNT_MS) {
    return { action: "silent-drop", reason: "timing" };
  }

  // Gibberish check on the caller-specified name-like fields.
  for (const field of nameFields) {
    const value = body[field];
    if (typeof value === "string" && isGibberish(value)) {
      return { action: "silent-drop", reason: `gibberish:${field}` };
    }
  }

  // Email checks. Format is the only user-visible reject; blocklist and rate
  // limit are silent so bots do not learn what to change.
  if (emailField) {
    const rawEmail = body[emailField];
    if (typeof rawEmail !== "string" || !isValidEmail(rawEmail)) {
      return { action: "reject", status: 400, error: "Please enter a valid email address." };
    }

    const domain = rawEmail.toLowerCase().split("@")[1] ?? "";
    if (SMS_GATEWAY_DOMAINS.has(domain)) {
      return { action: "silent-drop", reason: "sms-gateway" };
    }

    const normalized = normalizeEmail(rawEmail);
    if (rateLimitExceeded(normalized)) {
      return { action: "silent-drop", reason: "rate-limit" };
    }
  }

  // Origin check — LOG ONLY. Never rejects.
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const host = new URL(origin).host;
      if (!EXPECTED_ORIGIN_HOSTS.includes(host)) {
        console.warn("[form-guard] unexpected Origin:", origin);
      }
    } catch {
      console.warn("[form-guard] malformed Origin header:", origin);
    }
  }

  return { action: "allow" };
}

// The response the caller returns for silent drops. Success-shaped so the bot
// sees no signal it can tune against.
export const SILENT_SUCCESS_BODY = { success: true } as const;

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

const VOWEL_RE =
  /[aeiouyAEIOUYàáâãäåèéêëìíîïòóôõöùúûüýÿÀÁÂÃÄÅÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝŸñÑçÇ]/;
const LETTER_RE =
  /[a-zA-ZàáâãäåèéêëìíîïòóôõöùúûüýÿÀÁÂÃÄÅÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝŸñÑçÇ]/;

export function isGibberish(raw: string): boolean {
  const s = (raw ?? "").trim();
  if (!s) return false;
  if (/\s/.test(s)) return false;

  let transitions = 0;
  let prevWasLetter = false;
  let prevIsUpper = false;
  for (const c of s) {
    if (LETTER_RE.test(c)) {
      const nowUpper = c === c.toUpperCase() && c !== c.toLowerCase();
      if (prevWasLetter && nowUpper !== prevIsUpper) transitions++;
      prevIsUpper = nowUpper;
      prevWasLetter = true;
    } else {
      prevWasLetter = false;
    }
  }
  if (s.length > 12 && transitions >= 3) return true;

  let run = 0;
  for (const c of s) {
    if (LETTER_RE.test(c)) {
      if (VOWEL_RE.test(c)) run = 0;
      else {
        run++;
        if (run >= 5) return true;
      }
    } else {
      run = 0;
    }
  }

  const letters = s.match(new RegExp(LETTER_RE.source, "g")) ?? [];
  if (letters.length >= 4 && !letters.some((c) => VOWEL_RE.test(c))) return true;

  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(s: string): boolean {
  if (typeof s !== "string") return false;
  const trimmed = s.trim();
  if (trimmed.length > 254) return false;
  return EMAIL_RE.test(trimmed);
}

export function normalizeEmail(email: string): string {
  const lower = email.trim().toLowerCase();
  const at = lower.indexOf("@");
  if (at < 0) return lower;
  const local = lower.slice(0, at);
  const domain = lower.slice(at + 1);
  if (domain === "gmail.com" || domain === "googlemail.com") {
    const stripped = local.split("+")[0].replace(/\./g, "");
    return `${stripped}@gmail.com`;
  }
  return `${local}@${domain}`;
}

// Per-normalized-email hourly counter. In-memory, per-instance. On Vercel this
// only rate-limits within a warm function instance — cold starts reset the
// counter. Adequate for bursty bots hitting the same warm instance; not a
// substitute for durable KV/Redis-backed limits if abuse escalates.
const attempts = new Map<string, number[]>();

function rateLimitExceeded(normalizedEmail: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const bucket = attempts.get(normalizedEmail) ?? [];
  const recent = bucket.filter((t) => t > cutoff);
  if (recent.length >= RATE_LIMIT_MAX) {
    attempts.set(normalizedEmail, recent);
    return true;
  }
  recent.push(now);
  attempts.set(normalizedEmail, recent);
  return false;
}

// -----------------------------------------------------------------------------
// HTML escaping for email templates
// -----------------------------------------------------------------------------

export function escapeHtml(input: unknown): string {
  const s = input == null ? "" : String(input);
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Return a safe href if the URL is http(s)-scheme and well-formed, otherwise null.
export function safeHref(raw: unknown): string | null {
  if (typeof raw !== "string" || !raw.trim()) return null;
  const v = raw.trim();
  if (!/^https?:\/\//i.test(v)) return null;
  try {
    const u = new URL(v);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.toString();
  } catch {
    return null;
  }
}
