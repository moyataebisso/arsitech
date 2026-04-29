import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  CheckIcon,
  CheckCircleIcon,
  XMarkIcon,
  BuildingStorefrontIcon,
  ServerStackIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
  MapPinIcon,
  DocumentCheckIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ShieldCheckIcon as ShieldCheckSolid } from "@heroicons/react/24/solid";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services | Waji Websites + HIPAA Healthcare IT — Arsi Technology Group",
  description:
    "Two service routes — Waji Professional Websites for local Minnesota businesses, and HIPAA + Healthcare IT for clinics, group homes, and small healthcare providers. Affordable, all-inclusive pricing.",
};

type WebsiteTier = {
  name: string;
  setup: string;
  monthly: string;
  popular?: boolean;
  features: string[];
};

const WEBSITE_TIERS: WebsiteTier[] = [
  {
    name: "Basic",
    setup: "$299",
    monthly: "$199",
    features: [
      "Up to 5 pages, mobile-responsive",
      "AI-generated copy in your brand voice",
      "Hosting, SSL, daily backups",
      "Basic SEO + Google Business Profile setup",
    ],
  },
  {
    name: "Growth",
    setup: "$599",
    monthly: "$299",
    popular: true,
    features: [
      "Up to 10 pages + blog/news section",
      "Custom design + photography curation",
      "Lead-capture forms + email integration",
      "Monthly content updates included",
    ],
  },
  {
    name: "Premium",
    setup: "$999",
    monthly: "$499",
    features: [
      "Unlimited pages + booking/e-commerce",
      "Multi-language (English/Oromo/Spanish)",
      "Advanced analytics + conversion tracking",
      "Priority text support — same-day response",
    ],
  },
];

type HealthcareTier = {
  name: string;
  badge?: string;
  setup: string;
  monthly: string;
  popular?: boolean;
  description: string;
  features: string[];
  goodFor: string;
};

const HEALTHCARE_TIERS: HealthcareTier[] = [
  {
    name: "Foundation",
    setup: "$599",
    monthly: "$400",
    description: "Website + GBP optimization with light HIPAA support.",
    features: [
      "Professional website + Google Business Profile",
      "Annual policy review",
      "Hosting, SSL, daily backups, 24/7 monitoring",
      "Direct contact with Moyata — text or call",
    ],
    goodFor: "Small group homes, single-location clinics",
  },
  {
    name: "Standard",
    badge: "Most Popular",
    setup: "$999",
    monthly: "$599",
    popular: true,
    description: "Designated Security Officer + ongoing HIPAA reviews.",
    features: [
      "Everything in Foundation",
      "Designated HIPAA Security Officer (45 CFR § 164.308(a)(2))",
      "Bi-weekly password reviews + access log monitoring",
      "Annual HIPAA Security Risk Analysis",
      "Quarterly compliance status reports",
    ],
    goodFor: "Home healthcare agencies, multi-location group homes",
  },
  {
    name: "Full",
    setup: "$1,499",
    monthly: "$799",
    description: "Audit-ready compliance program with priority response.",
    features: [
      "Everything in Standard",
      "Staff HIPAA training materials + tracking",
      "Custom policy development",
      "Priority incident response (4 business hours)",
      "Annual on-site walkthrough (Twin Cities metro)",
    ],
    goodFor: "Clinics, behavioral health practices, organizations preparing for HHS audits",
  },
];

const WHY_US = [
  {
    icon: ShieldCheckIcon,
    title: "Built for Small Healthcare",
    body:
      "We don't take 200-employee clinics. Our entire model is designed for organizations under 20 employees.",
  },
  {
    icon: MapPinIcon,
    title: "Minnesota State Law Expertise",
    body:
      "We handle HIPAA + Minnesota Health Records Act (MHRA) + Minnesota Government Data Practices Act (MGDPA) + Minnesota Consumer Data Privacy Act (MCDPA). Most national consultancies don't even know these exist.",
  },
  {
    icon: PhoneIcon,
    title: "One Bill, One Contact",
    body:
      "Website, hosting, Security Officer, and ongoing reviews — one monthly fee, one human to call when something goes wrong.",
  },
  {
    icon: StarIcon,
    title: "Founding Client Pricing",
    body:
      "First 10 healthcare clients lock in founding rates with automatic ramps after Year 1. Get in early.",
  },
];

const INCLUDED_EVERY_TIER = [
  "Designated HIPAA Security Officer named in your documentation",
  "Business Associate Agreement (BAA) provided and signed",
  "Vercel hosting + SSL + daily backups + 24/7 monitoring",
  "Website content updates as you need them",
  "Direct contact with Moyata — no support tickets, no call centers",
  "Compliance documentation kept for required 6-year retention",
];

const NOT_INCLUDED = [
  "Major incident response beyond 8 hours — billed at $125/hr",
  "Major HIPAA risk analysis for big operational changes (M&A, new EHR, new facility) — quoted as project work",
  "Hardware and third-party software — passed through at cost",
  "Legal counsel during a real breach — we coordinate at no charge",
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-[70px] bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan/10 rounded-full blur-3xl animate-float delay-200" />
          <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-3">
                Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Two routes. One company. <br className="hidden md:block" />
                <span className="text-gradient-animate">Built for Minnesota.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Local businesses get affordable Waji websites. Healthcare providers get all-inclusive HIPAA + IT support. Pick the route that fits — we&apos;ll quote it the same day.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="#websites"
                  className="inline-flex items-center px-5 py-2.5 bg-highlight/20 text-highlight rounded-full text-sm font-semibold hover:bg-highlight hover:text-primary transition-colors"
                >
                  <BuildingStorefrontIcon className="w-4 h-4 mr-2" />
                  Waji Websites
                </Link>
                <Link
                  href="#healthcare"
                  className="inline-flex items-center px-5 py-2.5 bg-accent/20 text-accent rounded-full text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
                >
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  HIPAA & Healthcare IT
                </Link>
                <Link
                  href="#it-consulting"
                  className="inline-flex items-center px-5 py-2.5 bg-white/10 text-gray-200 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  <ServerStackIcon className="w-4 h-4 mr-2" />
                  IT Consulting
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1 — WAJI WEBSITES */}
      <section id="websites" className="py-20 bg-off-white scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-amber-200/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-highlight/20 flex items-center justify-center">
                  <BuildingStorefrontIcon className="w-6 h-6 text-highlight" />
                </div>
                <span className="text-highlight font-semibold tracking-wide">For Local Businesses</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Waji Professional Websites
              </h2>
              <p className="text-lg md:text-xl text-text-light leading-relaxed mb-4">
                Affordable, professional websites for local businesses — restaurants, salons, nonprofits, transportation, and small services.
              </p>
              <p className="text-sm text-text-muted italic">
                Waji is the customer-facing brand for our website services. Visit{" "}
                <a
                  href="https://cimaasites.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:text-accent-dark"
                >
                  cimaasites.ai
                </a>{" "}
                for the full offering.
              </p>
              <div className="mt-6">
                <a
                  href="https://cimaasites.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-highlight hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Visit Waji Websites
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Tier cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {WEBSITE_TIERS.map((tier, index) => (
              <AnimatedSection key={tier.name} animation="fade-up" delay={index * 100}>
                <div
                  className={`relative h-full flex flex-col rounded-2xl p-6 md:p-7 bg-white border transition-all duration-300 hover:-translate-y-1 ${
                    tier.popular
                      ? "border-highlight shadow-xl shadow-highlight/10 ring-2 ring-highlight/30"
                      : "border-gray-200 shadow-md hover:shadow-lg"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-highlight text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-primary mb-2">{tier.name}</h3>
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-primary">from {tier.setup}</span>
                    </div>
                    <div className="text-sm text-text-light mt-1">
                      setup + <span className="font-semibold text-primary">{tier.monthly}/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-text-dark">
                        <CheckIcon className="w-4 h-4 text-highlight mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://cimaasites.ai/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? "bg-highlight hover:bg-amber-600 text-white"
                        : "bg-primary hover:bg-secondary text-white"
                    }`}
                  >
                    Get Quote
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — HEALTHCARE (the big one) */}
      <section
        id="healthcare"
        className="py-24 bg-primary bg-grid-pattern relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-10 w-56 h-56 bg-cyan/10 rounded-full blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 right-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float-fast" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <ShieldCheckSolid className="w-6 h-6 text-accent" />
                </div>
                <span className="text-accent font-semibold tracking-wide">For Healthcare Providers</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                HIPAA Compliance & Healthcare IT
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                For Minnesota group homes, clinics, and small healthcare providers.
              </p>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  Most HIPAA consultants charge enterprise prices and serve enterprise clients. Arsi Technology Group is built for the smaller end of the market — group homes, adult foster care, small clinics, and home healthcare agencies that need real HIPAA compliance support but can&apos;t justify a $5,000/month managed IT contract. We bundle website, hosting, and ongoing HIPAA Security Officer work into one affordable monthly fee.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Why us — 4 trust cards */}
          <div className="mb-20">
            <AnimatedSection animation="fade-up">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Why providers choose us</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY_US.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                    <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Pricing tiers */}
          <div className="mb-16">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Healthcare Pricing</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  All-inclusive monthly fees. No surprise invoices. No hidden retainers.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {HEALTHCARE_TIERS.map((tier, index) => (
                <AnimatedSection key={tier.name} animation="fade-up" delay={index * 100}>
                  <div
                    className={`relative h-full flex flex-col rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                      tier.popular
                        ? "bg-gradient-to-br from-accent/20 via-white/10 to-cyan/10 border-2 border-accent shadow-2xl shadow-accent/20"
                        : "bg-white/10 border border-white/10 hover:border-accent/40 backdrop-blur-sm"
                    }`}
                  >
                    {tier.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-highlight text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {tier.badge}
                      </span>
                    )}

                    <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-bold text-white">{tier.setup}</span>
                        <span className="text-sm text-gray-400">setup</span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-bold text-accent">{tier.monthly}</span>
                        <span className="text-sm text-gray-400">/mo all-inclusive</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-5 leading-relaxed">{tier.description}</p>

                    <ul className="space-y-2.5 mb-6 flex-grow">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <CheckIcon
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              tier.popular ? "text-highlight" : "text-accent"
                            }`}
                          />
                          <span className="text-gray-200">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-5">
                      <span className="block text-xs text-gray-400 uppercase tracking-wide mb-1">
                        Good for
                      </span>
                      <span className="text-sm text-gray-200">{tier.goodFor}</span>
                    </div>

                    <Link
                      href="/contact?service=hipaa"
                      className={`inline-flex items-center justify-center w-full px-5 py-3 rounded-lg font-semibold transition-colors ${
                        tier.popular
                          ? "bg-accent hover:bg-accent-dark text-white"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      }`}
                    >
                      Start with {tier.name}
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* What's included / not included */}
          <div className="grid lg:grid-cols-2 gap-6">
            <AnimatedSection animation="fade-right">
              <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-success/30">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                    <DocumentCheckIcon className="w-5 h-5 text-success" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Included in every tier</h4>
                </div>
                <ul className="space-y-3">
                  {INCLUDED_EVERY_TIER.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={150}>
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
                    <XMarkIcon className="w-5 h-5 text-warning" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Not included (and that&apos;s by design)</h4>
                </div>
                <ul className="space-y-3">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-warning/20 flex items-center justify-center">
                        <XMarkIcon className="w-3 h-3 text-warning" />
                      </span>
                      <span className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic mt-5">
                  We&apos;d rather quote real work honestly than hide it inside a fee.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Healthcare CTA */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mt-16 text-center bg-gradient-to-br from-accent/20 via-white/5 to-cyan/20 rounded-3xl p-8 md:p-12 border border-accent/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to talk?</h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                30 minutes, no pitch deck. Tell us what you have, what you need, and we&apos;ll send a tier recommendation the same day.
              </p>
              <Link
                href="/contact?service=hipaa"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                Book a Free 30-min Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — IT CONSULTING (smaller) */}
      <section
        id="it-consulting"
        className="py-20 bg-off-white scroll-mt-20 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-100 grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <ServerStackIcon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-accent font-semibold tracking-wide">Beyond HIPAA</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  IT Consulting & Support
                </h2>
                <p className="text-text-light leading-relaxed mb-4">
                  Beyond HIPAA, we also help with general IT consulting for Minnesota businesses — Microsoft 365 setup, cloud security, infrastructure planning, and ad-hoc tech support.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent font-semibold">
                    <LockClosedIcon className="w-4 h-4 mr-1.5" />
                    $125/hour
                  </span>
                  <span className="text-text-muted">or monthly retainer (quoted)</span>
                </div>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl font-semibold transition-colors w-full lg:w-auto"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <CTASection
        headline="Not sure which route fits?"
        subtext="Send us a quick note. We'll point you to Waji or our healthcare bundle — whichever actually solves your problem."
        buttonText="Schedule Consultation"
      />
    </>
  );
}
