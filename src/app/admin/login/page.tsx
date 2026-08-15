import { Suspense } from "react";
import LoginForm from "./login-form";

export const metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-sm text-gray-400">Loading…</div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
