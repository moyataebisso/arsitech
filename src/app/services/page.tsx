import { Metadata } from "next";
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  ServerStackIcon,
  BellAlertIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
  CloudArrowUpIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { ShieldCheckIcon as ShieldCheckSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Business IT and HIPAA Compliance for Minnesota",
  description:
    "Business IT (Microsoft 365, email, devices, backup, support) and HIPAA compliance (Security Officer, risk assessment, BAAs, staff training, incident response) for Minnesota businesses and healthcare providers.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

type ServiceBlock = {
  id: string;
  icon: typeof ShieldCheckIcon;
  title: string;
  body: string;
  fineprint?: string;
  price?: string;
};

const IT_BLOCKS: ServiceBlock[] = [
  {
    id: "m365",
    icon: ServerStackIcon,
    title: "Microsoft 365 setup and administration",
    body:
      "Tenant configuration, user provisioning, licensing, mailbox and OneDrive setup, and ongoing admin work so your team can just log in and work.",
  },
  {
    id: "email",
    icon: EnvelopeIcon,
    title: "Business email and domain migration",
    body:
      "Move from Gmail personal or scattered inboxes to real business email on your own domain, with DNS and deliverability handled.",
  },
  {
    id: "devices",
    icon: ComputerDesktopIcon,
    title: "Staff device setup and management",
    body:
      "Buying, imaging, enrolling, and locking down laptops. When a staff member joins or leaves, we handle the device side end-to-end.",
  },
  {
    id: "backup",
    icon: CloudArrowUpIcon,
    title: "Backup",
    body:
      "Automated, encrypted backup of files, mailboxes, and workstations, with restore tested — not just configured.",
  },
  {
    id: "support",
    icon: LifebuoyIcon,
    title: "Ongoing support",
    body:
      "One person who knows your setup. Email or call when something breaks, needs to change, or you're not sure what to do.",
  },
];

const HIPAA_BLOCKS: ServiceBlock[] = [
  {
    id: "security-officer",
    icon: ShieldCheckIcon,
    title: "You're required to name a Security Officer. I'll be yours.",
    body:
      "Designated in writing, on file, and reachable. I run the ongoing oversight, coordinate training, and handle incidents on your behalf.",
    fineprint: "Satisfies 45 CFR 164.308(a)(2)",
    price: "Starting at $750/mo",
  },
  {
    id: "sra",
    icon: DocumentCheckIcon,
    title: "You need a written risk assessment on file. I run it and hand you the report.",
    body:
      "The full assessment, documented findings, remediation plan, and an audit-defensible report you can pull up on demand.",
    fineprint: "HHS-required Security Risk Analysis, official OCR tool",
    price: "Included in onboarding — or $750 standalone",
  },
  {
    id: "baas",
    icon: ClipboardDocumentListIcon,
    title: "Every vendor that touches resident information needs a signed agreement.",
    body:
      "Microsoft, your EHR, billing services, transportation vendors — I draft, negotiate where needed, sign, and track expirations.",
    fineprint: "Business Associate Agreements — drafted, reviewed, tracked",
    price: "Included in monthly retainer",
  },
  {
    id: "m365-hardening",
    icon: ServerStackIcon,
    title: "Your Microsoft 365 and staff laptops get locked down properly.",
    body:
      "Configured to meet HIPAA technical safeguard requirements: encryption, MFA, conditional access, and device compliance policies.",
    fineprint: "Encryption, MFA, conditional access, device compliance",
    price: "Custom quote",
  },
  {
    id: "incident-response",
    icon: BellAlertIcon,
    title: "When something goes wrong, someone answers.",
    body:
      "Incident response, containment, and breach determination — including nights and weekends.",
    fineprint: "Included in monthly retainer",
  },
];

function BlockCard({ block, index }: { block: ServiceBlock; index: number }) {
  const Icon = block.icon;
  return (
    <AnimatedSection animation="fade-up" delay={index * 60}>
      <article
        id={block.id}
        className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center">
              <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 leading-snug">
              {block.title}
            </h3>
            {block.fineprint && (
              <p className="text-xs text-text-muted mb-3">{block.fineprint}</p>
            )}
            <p className="text-text-light leading-relaxed mb-4">{block.body}</p>
            {block.price && (
              <div className="inline-flex items-center bg-light-accent text-primary text-sm font-semibold px-4 py-2 rounded-lg">
                {block.price}
              </div>
            )}
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}

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
                Business IT + HIPAA
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Business IT and{" "}
                <span className="text-gradient-animate">HIPAA compliance</span>{" "}
                for Minnesota
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Microsoft 365, business email, staff devices, and support for any small team. Plus fractional HIPAA Security Officer services for home care agencies, assisted living, and clinics.
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

      {/* BUSINESS IT */}
      <section id="business-it" className="py-20 bg-off-white relative overflow-hidden scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Business IT
            </h2>
            <p className="text-lg text-text-light max-w-3xl">
              The plumbing every small team needs. We set it up, keep it running, and answer when it breaks.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {IT_BLOCKS.map((b, i) => (
              <BlockCard key={b.id} block={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA */}
      <section id="hipaa" className="py-20 bg-white relative overflow-hidden scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              HIPAA Compliance
            </h2>
            <p className="text-lg text-text-light max-w-3xl">
              For Minnesota{" "}
              <Link
                href="/solutions/home-care-assisted-living"
                className="text-accent hover:text-accent-dark underline underline-offset-2"
              >
                home care agencies and assisted living
              </Link>
              ,{" "}
              <Link
                href="/solutions/245d-hcbs"
                className="text-accent hover:text-accent-dark underline underline-offset-2"
              >
                245D providers
              </Link>
              , and clinics. Everything a small provider actually needs, without hiring a full-time compliance officer.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {HIPAA_BLOCKS.map((b, i) => (
              <BlockCard key={b.id} block={b} index={i} />
            ))}
          </div>

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
