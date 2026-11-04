"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function PublicShell({
  children,
  nav,
  footer,
}: {
  children: ReactNode;
  nav: ReactNode;
  footer: ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      {nav}
      <main id="main-content">{children}</main>
      {footer}
    </>
  );
}
