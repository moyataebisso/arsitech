"use client";
import { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheckIcon,
  HomeIcon,
  DocumentTextIcon,
  PlusCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

const AdminContext = createContext<{ secret: string }>({ secret: "" });
export function useAdminSecret() {
  return useContext(AdminContext).secret;
}

const NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
  { label: "Change Requests", href: "/arsi-admin", icon: DocumentTextIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [secret, setSecret] = useState("");
  const [input, setInput] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = sessionStorage.getItem("arsi_admin_secret");
    if (saved && saved.length > 5) {
      setSecret(saved);
      setIsAuth(true);
    }
  }, []);

  const handleLogin = () => {
    if (input.length > 5) {
      sessionStorage.setItem("arsi_admin_secret", input);
      setSecret(input);
      setIsAuth(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("arsi_admin_secret");
    setSecret("");
    setIsAuth(false);
    setInput("");
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheckIcon className="h-8 w-8 text-accent" />
            <h1 className="text-xl font-bold text-primary">
              ArsiTech Admin
            </h1>
          </div>
          <input
            type="password"
            placeholder="Enter access code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-accent hover:bg-accent-dark text-white rounded-lg py-3 text-sm font-semibold transition-colors"
          >
            Access Control Center
          </button>
        </div>
      </div>
    );
  }

  return (
    <AdminContext.Provider value={{ secret }}>
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
            <button onClick={handleLogout} className="p-2 rounded-lg hover:bg-white/10">
              <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-white/50" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 md:overflow-y-auto">
          <div className="md:hidden h-14" /> {/* Spacer for mobile header */}
          {children}
        </main>
      </div>
    </AdminContext.Provider>
  );
}
