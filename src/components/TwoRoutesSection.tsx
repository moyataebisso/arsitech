"use client";

import Link from "next/link";
import {
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

export default function TwoRoutesSection() {
  return (
    <section id="two-routes" className="py-20 lg:py-28 bg-off-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-3">
            Two Service Routes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            One company. Two clear paths.
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Whether you run a local restaurant or a healthcare clinic, we&apos;ve built a route designed for you — with pricing and service that actually fits.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT — Waji Professional Websites */}
          <article
            className="group relative flex flex-col rounded-3xl p-8 md:p-10 bg-gradient-to-br from-amber-50 via-yellow-50 to-white border border-amber-100 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-highlight/15 flex items-center justify-center mb-6">
              <BuildingStorefrontIcon className="w-8 h-8 text-highlight" />
            </div>

            {/* Eyebrow */}
            <span className="text-xs font-bold tracking-widest text-highlight uppercase mb-3">
              For Local Businesses
            </span>

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Waji Professional Websites
            </h3>

            {/* Subhead */}
            <p className="text-text-light text-base md:text-lg leading-relaxed mb-6">
              Affordable, professional websites for restaurants, salons, nonprofits, and local services.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-8 flex-grow">
              {[
                "Custom design + AI-generated copy in your voice",
                "Hosting, security, and updates included",
                "Real human support — text us anytime",
                "Setup from $299, monthly from $199",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-highlight/20 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-highlight" />
                  </span>
                  <span className="text-text-dark text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://cimaasites.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-highlight hover:bg-amber-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-highlight/30"
            >
              Visit Waji Sites
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
            </a>

            {/* Footnote */}
            <p className="text-xs text-text-muted italic mt-4">
              A division of Arsi Technology Group
            </p>
          </article>

          {/* RIGHT — HIPAA & Healthcare IT */}
          <article
            className="group relative flex flex-col rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary via-secondary to-primary border border-accent/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col flex-grow">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-accent" />
              </div>

              {/* Eyebrow */}
              <span className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
                For Healthcare Providers
              </span>

              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                HIPAA & Healthcare IT
              </h3>

              {/* Subhead */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Affordable HIPAA compliance, fractional Security Officer services, and IT support for Minnesota group homes, clinics, and small healthcare providers.
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Designated HIPAA Security Officer (45 CFR § 164.308(a)(2))",
                  "Bi-weekly password reviews + annual risk analysis",
                  "Bundled website + compliance from $400/mo all-inclusive",
                  "Built for organizations under 20 employees",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-accent" />
                    </span>
                    <span className="text-gray-200 text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/services#hipaa-compliance"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/40"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Footnote */}
              <p className="text-xs text-gray-400 italic mt-4">
                Healthcare-specific pricing — see Services page
              </p>
            </div>
          </article>
        </div>

        {/* Bottom note */}
        <p className="text-center text-text-light text-sm mt-10 max-w-2xl mx-auto">
          Healthcare clients work directly with Arsi Tech Group — unless you also want a Waji-branded website. We&apos;ll help you pick the right route on your free consultation.
        </p>
      </div>
    </section>
  );
}
