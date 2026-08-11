import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { solutions } from "@/content/solutions";

type Params = { slug: string };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};

  const url = `https://arsitechgroup.com/solutions/${solution.slug}`;
  return {
    title: { absolute: solution.seoTitle },
    description: solution.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: solution.seoTitle,
      description: solution.seoDescription,
      url,
      siteName: "Arsi Technology Group",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: solution.seoTitle,
      description: solution.seoDescription,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.h1,
    description: solution.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Arsi Technology Group LLC",
    },
    areaServed: "Minnesota",
    serviceType: solution.navLabel,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-primary bg-grid-pattern overflow-hidden pt-[70px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <AnimatedSection animation="fade-up">
            <span className="inline-block bg-highlight/20 text-highlight text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {solution.navLabel}
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {solution.h1}
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              {solution.subhead}
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={300}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 btn-glow hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <span className="inline-block bg-highlight/20 text-highlight text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Why this matters now
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              The problem, stated plainly
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {solution.painPoints.map((pp, i) => (
              <AnimatedSection key={pp.title} animation="fade-up" delay={i * 100}>
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-highlight/40 transition-all duration-300">
                  <div className="w-12 h-1 bg-highlight rounded-full mb-5" />
                  <h3 className="text-xl font-semibold text-text-dark mb-3">
                    {pp.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{pp.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-24 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What&apos;s included
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A single retainer covering the security officer role, the
              compliance work, and the day-to-day IT that makes it real.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {solution.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-highlight flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 lg:py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <span className="inline-block bg-highlight/20 text-highlight text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Proof
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              We have done this work
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="relative bg-white border-l-4 border-highlight rounded-r-2xl p-8 md:p-10 shadow-sm">
              <p className="text-lg md:text-xl text-text-dark leading-relaxed">
                {solution.proof}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-3">
              Questions we get
            </h2>
            <p className="text-text-light text-lg">
              Straight answers on how this works.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-3">
              {solution.faq.map((f) => (
                <details
                  key={f.q}
                  className="group bg-off-white border border-gray-200 rounded-xl open:border-highlight/50 open:shadow-sm transition-all"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-text-dark">
                    <span>{f.q}</span>
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-highlight/20 text-highlight flex items-center justify-center transition-transform group-open:rotate-45 text-lg leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-text-light leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <CTASection
        headline={solution.ctaHeading}
        subtext={solution.ctaBody}
        buttonText="Get in touch"
        buttonLink="/contact"
      />
    </>
  );
}
