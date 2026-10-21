import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WorkCarousel from "@/components/WorkCarousel";
import ProcessSection from "@/components/ProcessSection";
import FAQCTASection from "@/components/FAQCTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <WorkCarousel />
      <ProcessSection />
      <FAQCTASection />
    </>
  );
}
