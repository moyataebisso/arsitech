import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  ServerStackIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { ShieldCheckIcon as ShieldCheckSolid } from "@heroicons/react/24/solid";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "HIPAA Compliance Services for Minnesota Healthcare Providers",
  description:
    "Fractional HIPAA Security Officer, Security Risk Assessments (SRA), Business Associate Agreements, and M365/Azure/Intune HIPAA configuration for Minnesota home care agencies, assisted living, and clinics.",
};

type Section = {
  id: string;
  icon: typeof ShieldCheckIcon;
  eyebrow: string;
  title: string;
  subhead?: string;
  body: string;
  bullets?: string[];
  price: string;
};

const SECTIONS: Section[] = [
  {
    id: "consulting",
    icon: ShieldCheckIcon,
    eyebrow: "Section 1",
    title: "HIPAA Compliance Consulting",
    subhead: "Fractional Security Officer Services",
    body:
      "We serve as your outsourced HIPAA Security Officer — satisfying the 45 CFR 164.308(a)(2) requirement without the cost of a full-time hire.",
    bullets: [
      "Security Officer Designation Letter",
      "Ongoing oversight",
      "Workforce training coordination",
      "Incident response",
    ],
    price: "Starting at $750/mo",
  },
  {
    id: "sra",
    icon: DocumentCheckIcon,
    eyebrow: "Section 2",
    title: "Security Risk Assessment (SRA)",
    subhead: "HHS-Required Risk Analysis",
    body:
      "The Security Risk Assessment is federally required for all covered entities and business associates. We run the full assessment using the official HHS OCR Tool and deliver a documented, audit-defensible report.",
    price: "Included in onboarding — or $750 standalone",
  },
  {
    id: "baas",
    icon: ClipboardDocumentListIcon,
    eyebrow: "Section 3",
    title: "Business Associate Agreements (BAAs)",
    body:
      "We draft, review, and manage BAAs with all your vendors. Microsoft, EHR vendors, billing services — all covered.",
    price: "Included in monthly retainer",
  },
  {
    id: "m365",
    icon: ServerStackIcon,
    eyebrow: "Section 4",
    title: "M365 / Azure / Intune HIPAA Setup",
    body:
      "We configure Microsoft 365, Azure AD, and Intune to meet HIPAA technical safeguard requirements — encryption, MFA, conditional access, device compliance policies.",
    price: "Custom quote",
  },
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
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
                <ShieldCheckSolid className="w-4 h-4" />
                Arsi Tech Compliance
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                HIPAA Compliance Services for{" "}
                <span className="text-gradient-animate">Minnesota Healthcare Providers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Fractional Security Officer services, Security Risk Assessments, BAA management, and Microsoft 365 / Azure / Intune configuration — built for home care agencies, assisted living, and clinics.
              </p>
              <p className="text-sm text-gray-400 italic mt-4">
                Looking for websites? Visit{" "}
                <a
                  href="https://wajiiwebsites.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-cyan underline"
                >
                  wajiiwebsites.com
                </a>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-20 bg-off-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {SECTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={s.id} animation="fade-up" delay={i * 80}>
                  <article
                    id={s.id}
                    className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 scroll-mt-24"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">
                          {s.eyebrow}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                          {s.title}
                        </h2>
                        {s.subhead && (
                          <p className="text-base md:text-lg font-semibold text-text-dark mb-3">
                            {s.subhead}
                          </p>
                        )}
                        <p className="text-text-light leading-relaxed mb-4">
                          {s.body}
                        </p>
                        {s.bullets && (
                          <ul className="space-y-2 mb-4">
                            {s.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2.5 text-sm md:text-base text-text-dark">
                                <CheckIcon className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="inline-flex items-center bg-light-accent text-primary text-sm font-semibold px-4 py-2 rounded-lg">
                          {s.price}
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>

          {/* CTA */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mt-16 text-center bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-10 md:p-14 border border-accent/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to get compliant?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Free 30-minute review. No pitch. We&apos;ll tell you exactly where you stand and what it takes to close the gaps.
                </p>
                <a
                  href="mailto:arsitechgroup@gmail.com?subject=Free%20Compliance%20Review"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
                >
                  Book a Free Compliance Review
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
