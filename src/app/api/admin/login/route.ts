import { NextRequest, NextResponse } from "next/server";
import { createSession, verifyPassword } from "@/lib/admin-auth";

// Bare 401 for every failure mode — bad password, missing env var, malformed
// body, malformed hash. No response body, no distinguishing header.
const DENIED = () => new NextResponse(null, { status: 401 });

export async function POST(request: NextRequest) {
  let password: unknown;
  try {
    const body = await request.json();
    password = (body as { password?: unknown } | null)?.password;
  } catch {
    return DENIED();
  }

  let ok: boolean;
  try {
    ok = verifyPassword(password);
  } catch {
    return DENIED();
  }
  if (!ok) return DENIED();

  let cookie;
  try {
    cookie = createSession();
  } catch {
    return DENIED();
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookie.name, cookie.value, cookie.options);
  return res;
}
