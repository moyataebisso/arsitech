"use client";
import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
