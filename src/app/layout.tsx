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
  title: "Arsi Technology Group | Affordable Tech for Minnesota Businesses",
  description:
    "Big-company tech. Small-business prices. Real human support. Waji Professional Websites for local businesses + HIPAA compliance and healthcare IT for Minnesota providers.",
  keywords: [
    "Minnesota tech consulting",
    "HIPAA compliance Minneapolis",
    "affordable websites small business",
    "fractional Security Officer",
    "Waji websites",
    "healthcare IT Minnesota",
  ],
  openGraph: {
    title: "Arsi Technology Group",
    description: "Big-company tech. Small-business prices. Real human support.",
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
