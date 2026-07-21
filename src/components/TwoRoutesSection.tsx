"use client";

import Link from "next/link";
import {
  GlobeAltIcon,
  LockClosedIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

export default function TwoRoutesSection() {
  return (
    <section
      id="two-divisions"
      className="py-20 lg:py-28 bg-off-white relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest text-text-muted uppercase mb-3">
            Our Two Divisions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            One trusted team. Two divisions.
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Arsi Technology Group LLC operates two focused divisions so small businesses and healthcare providers each get an offering built specifically for them.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* CARD 1 — Wajii Websites */}
          <article
            className="group relative flex flex-col rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white via-light-accent/40 to-accent/5 border border-accent/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6">
              <GlobeAltIcon className="w-8 h-8 text-accent" />
            </div>

            {/* Eyebrow */}
            <span className="text-xs font-bold tracking-widest text-accent uppercase mb-3">
              Division 1 — Small Business Websites
            </span>

            {/* Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Wajii Websites
            </h3>

            {/* Tagline */}
            <p className="text-base md:text-lg font-semibold text-accent mb-4">
              Done-for-you custom websites for small businesses
            </p>

            {/* Body */}
            <p className="text-text-light text-base leading-relaxed mb-6 flex-grow">
              We build, host, and manage your website. You focus on your business. Restaurants, home care agencies, salons, and more. Starting at <span className="font-semibold text-primary">$99/mo</span> — no tech skills needed.
            </p>

            {/* CTA */}
            <a
              href="https://wajiiwebsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-accent hover:bg-accent-dark text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30"
            >
              Visit Wajii Websites
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
            </a>
          </article>

          {/* CARD 2 — Arsi Tech Compliance */}
          <article
            className="group relative flex flex-col rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary via-secondary to-primary border border-cyan/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col flex-grow">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-cyan/20 flex items-center justify-center mb-6">
                <LockClosedIcon className="w-8 h-8 text-cyan" />
              </div>

              {/* Eyebrow */}
              <span className="text-xs font-bold tracking-widest text-cyan uppercase mb-3">
                Division 2 — Healthcare Compliance
              </span>

              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Arsi Tech Compliance
              </h3>

              {/* Tagline */}
              <p className="text-base md:text-lg font-semibold text-cyan mb-4">
                HIPAA compliance for Minnesota healthcare providers
              </p>

              {/* Body */}
              <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
                Fractional HIPAA Security Officer services — risk assessments, BAAs, M365/Azure/Intune oversight, and staff training. Built for home care agencies, assisted living, and clinics. Starting at <span className="font-semibold text-white">$750/mo</span>.
              </p>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-cyan hover:bg-cyan/80 text-primary px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan/40"
              >
                Learn More
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
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
