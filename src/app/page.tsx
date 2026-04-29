import HeroSection from "@/components/HeroSection";
import TwoRoutesSection from "@/components/TwoRoutesSection";
import ProblemServicesSection from "@/components/ProblemServicesSection";
import ProcessAudienceSection from "@/components/ProcessAudienceSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import FAQCTASection from "@/components/FAQCTASection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Two Routes — Waji Websites + Healthcare IT */}
      <TwoRoutesSection />

      {/* Portfolio Preview - Trusted By Minnesota Businesses */}
      <PortfolioPreview />

      {/* Problem + Services Section (Combined) */}
      <ProblemServicesSection />

      {/* Process + Who We Serve Section (Combined) */}
      <ProcessAudienceSection />

      {/* FAQ + CTA Section (Combined) */}
      <FAQCTASection />
    </>
  );
}
