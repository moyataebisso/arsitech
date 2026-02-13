import HeroSection from "@/components/HeroSection";
import ProblemServicesSection from "@/components/ProblemServicesSection";
import ProcessAudienceSection from "@/components/ProcessAudienceSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import FAQCTASection from "@/components/FAQCTASection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

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
