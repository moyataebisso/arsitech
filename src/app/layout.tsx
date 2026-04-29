import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { PublicShell } from "@/components/PublicShell";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arsi Technology Group | Big-company tech. Small-business prices. Real human support.",
  description: "Big-company tech. Small-business prices. Real human support. Arsi Technology Group helps Minnesota businesses with websites, hosting, HIPAA compliance, and fractional IT — at prices designed for small and local owners.",
  keywords: "Minnesota websites, small business IT, HIPAA compliance, fractional security officer, Waji websites, healthcare IT, technology consulting, Twin Cities",
  openGraph: {
    title: "Arsi Technology Group | Big-company tech. Small-business prices. Real human support.",
    description: "Two service routes — Waji Professional Websites for local businesses, and HIPAA + Healthcare IT for Minnesota providers.",
    url: "https://arsitechgroup.com",
    siteName: "Arsi Technology Group LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        <PublicShell>
          {children}
        </PublicShell>
      </body>
    </html>
  );
}
