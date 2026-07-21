"use client";

import Link from "next/link";
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: GlobeAltIcon,
    eyebrow: "Wajii Websites",
    title: "Your business is invisible online",
    body:
      "Most small businesses either have no website or are trapped on platforms like SpotHopper or Wix — paying too much and owning nothing. Wajii Websites fixes this for $99/mo.",
    ctaLabel: "See Wajii Websites",
    ctaHref: "https://wajiiwebsites.com",
    external: true,
  },
  {
    icon: ShieldCheckIcon,
    eyebrow: "Arsi Tech Compliance",
    title: "HIPAA compliance is required. It's also confusing.",
    body:
      "Minnesota home care agencies and clinics are legally required to have a Security Officer and a current Security Risk Assessment. Most don't. We serve as your outsourced Security Officer for a fraction of the cost of a full-time hire.",
    ctaLabel: "Learn about Compliance",
    ctaHref: "/services",
    external: false,
  },
];

export default function ProblemServicesSection() {
  return (
    <section
      id="problems"
      className="py-20 bg-primary bg-grid-pattern relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <AnimatedSection animation="fade-up" className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-highlight/20 text-highlight mb-6">
            <span className="font-medium">The Problems We Solve</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Two problems we solve{" "}
            <span className="text-gradient-animate">every day</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Small businesses and healthcare providers each face a specific tech pain. We built a division to solve each one.
          </p>
        </AnimatedSection>

        {/* Two problem cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((p, index) => {
            const Icon = p.icon;
            const cta = p.external ? (
              <a
                href={p.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30"
              >
                {p.ctaLabel}
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
              </a>
            ) : (
              <Link
                href={p.ctaHref}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30"
              >
                {p.ctaLabel}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            );

            return (
              <AnimatedSection key={p.title} animation="fade-up" delay={index * 150}>
                <article className="group h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
                    {p.eyebrow}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                    {p.body}
                  </p>

                  <div>{cta}</div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
