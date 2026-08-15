import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

export const COOKIE_NAME = "__Host-arsi_admin_session";
export const MAX_AGE_SECONDS = 8 * 60 * 60;
const CLOCK_SKEW_MS = 60 * 1000;
const SCRYPT_OPTS = { N: 16384, r: 8, p: 1 } as const;
const SCRYPT_DKLEN = 64;

export class AuthError extends Error {
  readonly status = 401;
  constructor() {
    super("unauthorized");
  }
}

// -----------------------------------------------------------------------------
// Env accessors — fail closed
// -----------------------------------------------------------------------------

function readSecret(): Buffer {
  const raw = process.env.ADMIN_SESSION_SECRET;
  if (typeof raw !== "string" || raw.length < 32) throw new AuthError();
  let buf: Buffer;
  try {
    buf = Buffer.from(raw, "base64url");
  } catch {
    throw new AuthError();
  }
  if (buf.length < 16) throw new AuthError();
  return buf;
}

function readEpoch(): number {
  const raw = process.env.ADMIN_SESSION_EPOCH;
  if (typeof raw !== "string" || raw.length === 0) throw new AuthError();
  const n = Number.parseInt(raw, 10);
  if (!Number.isInteger(n) || n < 0 || String(n) !== raw.trim()) {
    throw new AuthError();
  }
  return n;
}

function readPasswordHash(): { salt: Buffer; hash: Buffer } {
  const raw = process.env.ADMIN_PASSWORD_HASH;
  if (typeof raw !== "string") throw new AuthError();
  const colon = raw.indexOf(":");
  if (colon <= 0 || colon === raw.length - 1) throw new AuthError();
  const saltHex = raw.slice(0, colon);
  const hashHex = raw.slice(colon + 1);
  if (!/^[0-9a-fA-F]+$/.test(saltHex) || !/^[0-9a-fA-F]+$/.test(hashHex)) {
    throw new AuthError();
  }
  if (saltHex.length % 2 !== 0 || hashHex.length % 2 !== 0) throw new AuthError();
  const salt = Buffer.from(saltHex, "hex");
  const hash = Buffer.from(hashHex, "hex");
  if (salt.length < 8 || hash.length !== SCRYPT_DKLEN) throw new AuthError();
  return { salt, hash };
}

// -----------------------------------------------------------------------------
// Session shape and HMAC
// -----------------------------------------------------------------------------

export type SessionPayload = { epoch: number; iat: number };

function hmac(bytes: Buffer, secret: Buffer): Buffer {
  return createHmac("sha256", secret).update(bytes).digest();
}

export type CookieDescriptor = {
  name: string;
  value: string;
  options: {
    httpOnly: true;
    secure: true;
    sameSite: "lax";
    path: "/";
    maxAge: number;
  };
};

export function createSession(): CookieDescriptor {
  const secret = readSecret();
  const epoch = readEpoch();
  const payload: SessionPayload = { epoch, iat: Date.now() };
  const payloadBytes = Buffer.from(JSON.stringify(payload), "utf8");
  const sig = hmac(payloadBytes, secret);
  const value = `${payloadBytes.toString("base64url")}.${sig.toString("base64url")}`;
  return {
    name: COOKIE_NAME,
    value,
    options: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: MAX_AGE_SECONDS,
    },
  };
}

export function clearedSession(): CookieDescriptor {
  return {
    name: COOKIE_NAME,
    value: "",
    options: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    },
  };
}

// -----------------------------------------------------------------------------
// Verification — signature first, then parse
// -----------------------------------------------------------------------------

export function verifySessionValue(raw: string | undefined | null): SessionPayload {
  if (typeof raw !== "string" || raw.length === 0) throw new AuthError();
  const dot = raw.indexOf(".");
  if (dot <= 0 || dot === raw.length - 1) throw new AuthError();
  const payloadB64 = raw.slice(0, dot);
  const sigB64 = raw.slice(dot + 1);
  if (raw.indexOf(".", dot + 1) !== -1) throw new AuthError();

  let payloadBytes: Buffer;
  let providedSig: Buffer;
  try {
    payloadBytes = Buffer.from(payloadB64, "base64url");
    providedSig = Buffer.from(sigB64, "base64url");
  } catch {
    throw new AuthError();
  }
  if (payloadBytes.length === 0 || providedSig.length === 0) throw new AuthError();

  const secret = readSecret();
  const expectedSig = hmac(payloadBytes, secret);

  // timingSafeEqual throws on length mismatch — check first.
  if (providedSig.length !== expectedSig.length) throw new AuthError();
  if (!timingSafeEqual(providedSig, expectedSig)) throw new AuthError();

  // Signature verified — only now safe to parse.
  let parsed: unknown;
  try {
    parsed = JSON.parse(payloadBytes.toString("utf8"));
  } catch {
    throw new AuthError();
  }
  if (
    !parsed ||
    typeof parsed !== "object" ||
    typeof (parsed as SessionPayload).epoch !== "number" ||
    typeof (parsed as SessionPayload).iat !== "number"
  ) {
    throw new AuthError();
  }
  const payload = parsed as SessionPayload;

  const now = Date.now();
  if (payload.iat > now + CLOCK_SKEW_MS) throw new AuthError();
  if (now - payload.iat > MAX_AGE_SECONDS * 1000) throw new AuthError();
  if (payload.epoch !== readEpoch()) throw new AuthError();

  return payload;
}

export function requireAdmin(request: NextRequest): SessionPayload {
  const raw = request.cookies.get(COOKIE_NAME)?.value;
  return verifySessionValue(raw);
}

// -----------------------------------------------------------------------------
// Password verification
// -----------------------------------------------------------------------------

export function verifyPassword(input: unknown): boolean {
  if (typeof input !== "string" || input.length === 0) return false;
  const { salt, hash } = readPasswordHash();
  let derived: Buffer;
  try {
    derived = scryptSync(input, salt, SCRYPT_DKLEN, SCRYPT_OPTS);
  } catch {
    return false;
  }
  if (derived.length !== hash.length) return false;
  return timingSafeEqual(derived, hash);
}
