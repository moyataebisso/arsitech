import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { requireAdmin, AuthError } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  try {
    requireAdmin(request);
  } catch (e) {
    if (e instanceof AuthError) return new NextResponse(null, { status: 401 });
    return new NextResponse(null, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase
    .from("change_requests")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.error("[/api/admin/change-requests] query failed:", error.message);
    return NextResponse.json({ error: "Query failed" }, { status: 500 });
  }

  return NextResponse.json({ data: data ?? [] });
}
