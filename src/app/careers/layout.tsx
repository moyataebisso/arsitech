import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Opportunities | Arsi Technology Group",
  description:
    "Internship opportunities with Arsi Technology Group — hands-on experience in software development, IT consulting, and cybersecurity for Minnesota students.",
  alternates: { canonical: "/careers" },
  openGraph: { url: "/careers" },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
