import { NextRequest, NextResponse } from "next/server";
import { verifySessionValue, COOKIE_NAME } from "@/lib/admin-auth";

const PUBLIC_PAGES = new Set<string>(["/admin/login"]);
const PUBLIC_APIS = new Set<string>(["/api/admin/login", "/api/admin/logout"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminPage =
    pathname === "/admin" ||
    pathname.startsWith("/admin/") ||
    pathname === "/arsi-admin" ||
    pathname.startsWith("/arsi-admin/");
  const isAdminApi = pathname.startsWith("/api/admin/");

  if (!isAdminPage && !isAdminApi) return NextResponse.next();
  if (PUBLIC_PAGES.has(pathname)) return NextResponse.next();
  if (PUBLIC_APIS.has(pathname)) return NextResponse.next();

  const raw = request.cookies.get(COOKIE_NAME)?.value;
  try {
    verifySessionValue(raw);
    return NextResponse.next();
  } catch {
    if (isAdminApi) {
      return new NextResponse(null, { status: 401 });
    }
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.search = `?next=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/admin/:path*", "/arsi-admin/:path*", "/api/admin/:path*"],
};
