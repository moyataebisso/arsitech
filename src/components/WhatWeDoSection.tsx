"use client";

import Link from "next/link";
import {
  GlobeAltIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

type Card = {
  title: string;
  body: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
  external: boolean;
  icon: typeof GlobeAltIcon;
};

const CARDS: Card[] = [
  {
    icon: GlobeAltIcon,
    title: "Websites",
    body:
      "Built, hosted, and managed for you. Restaurants, home care agencies, salons. You never touch code.",
    price: "$99/mo",
    ctaLabel: "wajiiwebsites.com",
    ctaHref: "https://wajiiwebsites.com",
    external: true,
  },
  {
    icon: ServerStackIcon,
    title: "Business IT",
    body:
      "Microsoft 365, business email, domains, staff laptops, and security. The stuff that breaks when nobody's watching it.",
    price: "Custom",
    ctaLabel: "See services",
    ctaHref: "/services",
    external: false,
  },
  {
    icon: ShieldCheckIcon,
    title: "HIPAA Compliance",
    body:
      "Your named Security Officer, risk assessment, vendor agreements, and staff training. For Minnesota home care, assisted living, and clinics.",
    price: "$750/mo",
    ctaLabel: "See services",
    ctaHref: "/services",
    external: false,
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-20 lg:py-24 bg-off-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest text-text-muted uppercase mb-3">
            What we do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            Three services. One team.
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Small businesses and Minnesota healthcare providers pick what they need — many use more than one.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} animation="fade-up" delay={index * 100}>
                <article className="h-full flex flex-col rounded-3xl p-8 bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-6 flex-grow">
                    {card.body}
                  </p>
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                    <span className="text-primary font-semibold">{card.price}</span>
                    {card.external ? (
                      <a
                        href={card.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                        aria-label={`${card.ctaLabel} (opens in a new tab)`}
                      >
                        {card.ctaLabel}
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        href={card.ctaHref}
                        className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                      >
                        {card.ctaLabel}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
