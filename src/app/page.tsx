import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProcessSection from "@/components/ProcessSection";
import FAQCTASection from "@/components/FAQCTASection";

const WorkCarousel = dynamic(() => import("@/components/WorkCarousel"));

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
