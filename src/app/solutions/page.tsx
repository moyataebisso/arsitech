import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: { absolute: "IT and Compliance Services by Industry | Arsi Technology Group" },
  description:
    "Vertical IT and compliance programs for Minnesota 245D providers, home care and assisted living, tax and accounting firms, cyber insurance renewal, and student transportation.",
  alternates: { canonical: "https://arsitechgroup.com/solutions" },
  openGraph: {
    title: "IT and Compliance Services by Industry | Arsi Technology Group",
    description:
      "Vertical IT and compliance programs for Minnesota 245D providers, home care and assisted living, tax and accounting firms, cyber insurance renewal, and student transportation.",
    url: "https://arsitechgroup.com/solutions",
    siteName: "Arsi Technology Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT and Compliance Services by Industry | Arsi Technology Group",
    description:
      "Vertical IT and compliance programs for Minnesota businesses and regulated providers.",
  },
};

export default function SolutionsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary bg-grid-pattern overflow-hidden pt-[70px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <AnimatedSection animation="fade-up">
            <span className="inline-block bg-highlight/20 text-highlight text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Solutions by industry
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              IT and compliance built for the work you actually do
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pick the program that matches your license, your regulator, or
              your renewal. Every one is built for Minnesota small businesses of
              roughly five to fifty staff.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.slug} animation="fade-up" delay={i * 80}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group h-full flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-highlight/50 transition-all duration-300"
                >
                  <span className="inline-block self-start bg-highlight/15 text-highlight text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                    {s.navLabel}
                  </span>
                  <h2 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors">
                    {s.h1}
                  </h2>
                  <p className="text-text-light leading-relaxed mb-6 flex-1">
                    {s.subhead}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    See the program
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CTASection
        headline="Not sure which one fits?"
        subtext="Thirty minutes, no obligation. We will tell you which program actually applies to your license and your renewal calendar."
        buttonText="Book a call"
        buttonLink="/contact"
      />
    </>
  );
}
