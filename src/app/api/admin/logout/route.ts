import { NextResponse } from "next/server";
import { clearedSession } from "@/lib/admin-auth";

export async function POST() {
  const cookie = clearedSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookie.name, cookie.value, cookie.options);
  return res;
}
