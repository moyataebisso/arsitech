"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShieldCheckIcon,
  HomeIcon,
  DocumentTextIcon,
  PlusCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

const NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
  { label: "Change Requests", href: "/arsi-admin", icon: DocumentTextIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // The login page has its own centered layout — render it without the
  // signed-in sidebar chrome. The proxy guarantees every other admin
  // path is authenticated, so no client-side gate is needed here.
  if (pathname === "/admin/login") return <>{children}</>;

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-primary text-white">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <ShieldCheckIcon className="h-7 w-7 text-accent" />
            <span className="font-bold text-sm tracking-tight">
              ARSI <span className="text-accent">ADMIN</span>
            </span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent/20 text-accent"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/arsi-admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <PlusCircleIcon className="h-5 w-5" />
            New Request
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/10 transition-colors w-full"
          >
            <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-primary text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheckIcon className="h-6 w-6 text-accent" />
          <span className="font-bold text-sm">ARSI ADMIN</span>
        </div>
        <div className="flex items-center gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`p-2 rounded-lg ${
                pathname === item.href ? "bg-accent/20" : "hover:bg-white/10"
              }`}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg hover:bg-white/10"
            aria-label="Sign out"
          >
            <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-white/50" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:overflow-y-auto">
        <div className="md:hidden h-14" />
        {children}
      </main>
    </div>
  );
}
