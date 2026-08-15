"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

// Only accept paths that start with a single "/". Reject "//..." (protocol-
// relative URL), "/\..." (backslash-tricks), and any absolute URL.
function safeNext(raw: string | null): string {
  const fallback = "/admin/dashboard";
  if (typeof raw !== "string" || raw.length === 0) return fallback;
  if (raw[0] !== "/") return fallback;
  if (raw[1] === "/" || raw[1] === "\\") return fallback;
  return raw;
}

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = safeNext(searchParams.get("next"));

  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setStatus("error");
        setPassword("");
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setStatus("error");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-100"
      >
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheckIcon className="h-8 w-8 text-accent" />
          <h1 className="text-xl font-bold text-primary">ArsiTech Admin</h1>
        </div>

        <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-2">
          Passphrase
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={status === "loading"}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent disabled:opacity-60"
        />

        {status === "error" && (
          <p className="text-sm text-red-600 mb-3" role="alert">
            Sign-in failed.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading" || !password}
          className="w-full bg-accent hover:bg-accent-dark disabled:opacity-50 text-white rounded-lg py-3 text-sm font-semibold transition-colors"
        >
          {status === "loading" ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
