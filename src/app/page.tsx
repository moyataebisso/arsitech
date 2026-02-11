import HeroSection from "@/components/HeroSection";
import ProblemServicesSection from "@/components/ProblemServicesSection";
import ProcessAudienceSection from "@/components/ProcessAudienceSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import TeamCredentialsSection from "@/components/TeamCredentialsSection";
import FAQCTASection from "@/components/FAQCTASection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Problem + Services Section (Combined) */}
      <ProblemServicesSection />

      {/* Portfolio Preview - Trusted By Minnesota Businesses (moved above Process) */}
      <PortfolioPreview />

      {/* Process + Who We Serve Section (Combined) */}
      <ProcessAudienceSection />

      {/* Team + Credentials Section (Combined) */}
      <TeamCredentialsSection />

      {/* FAQ + CTA Section (Combined) */}
      <FAQCTASection />
    </>
  );
}
