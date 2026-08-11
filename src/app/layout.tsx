import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { PublicShell } from "@/components/PublicShell";
import { BorderLight } from "@/components/BorderLight";
import { ArsiJsonLd } from "@/components/ArsiJsonLd";

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
  metadataBase: new URL("https://www.arsitechgroup.com"),
  title: {
    default: "Arsi Technology Group LLC — Minnesota Tech & HIPAA Compliance",
    template: "%s | Arsi Technology Group",
  },
  description:
    "Websites, business IT, and HIPAA compliance for small businesses and healthcare providers in Minnesota.",
  keywords: [
    "HIPAA compliance Minnesota",
    "managed website service",
    "fractional HIPAA security officer",
    "home care agency compliance MN",
    "Arsi Technology Group",
  ],
  openGraph: {
    title: "Arsi Technology Group LLC",
    description:
      "Websites, business IT, and HIPAA compliance for small businesses and healthcare providers in Minnesota.",
    url: "https://www.arsitechgroup.com",
    siteName: "Arsi Technology Group",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
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
        <BorderLight />
        <ArsiJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
