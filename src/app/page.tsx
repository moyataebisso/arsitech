import HeroSection from "@/components/HeroSection";
import ProblemServicesSection from "@/components/ProblemServicesSection";
import ProcessAudienceSection from "@/components/ProcessAudienceSection";
import TeamCredentialsSection from "@/components/TeamCredentialsSection";
import FAQCTASection from "@/components/FAQCTASection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Problem + Services Section (Combined) */}
      <ProblemServicesSection />

      {/* Process + Who We Serve Section (Combined) */}
      <ProcessAudienceSection />

      {/* Team + Credentials Section (Combined) */}
      <TeamCredentialsSection />

      {/* FAQ + CTA Section (Combined) */}
      <FAQCTASection />
    </>
  );
}
