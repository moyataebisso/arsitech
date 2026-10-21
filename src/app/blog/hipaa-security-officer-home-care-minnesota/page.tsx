import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title:
    "Do Home Care Agencies in Minnesota Need a HIPAA Security Officer?",
  description:
    "Minnesota home care agencies are covered entities under HIPAA. Learn what a Security Officer does, who needs one, and the cost of outsourcing vs. hiring full-time.",
  alternates: {
    canonical: "/blog/hipaa-security-officer-home-care-minnesota",
  },
  openGraph: {
    url: "/blog/hipaa-security-officer-home-care-minnesota",
  },
};

export default function HipaaSecurityOfficerHomeCareMinnesotaPage() {
  return (
    <article className="pt-[110px] pb-20 bg-off-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          <ShieldCheckIcon className="w-4 h-4" />
          HIPAA Compliance
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
          Do Home Care Agencies in Minnesota Need a HIPAA Security Officer?
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-10">
          If your agency creates, receives, maintains, or transmits any electronic protected health information (ePHI), the answer is yes — federal law requires it. Here&apos;s what that actually means and what your options look like.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            What Is a HIPAA Security Officer?
          </h2>
          <p className="text-text-dark leading-relaxed mb-6">
            Under 45 CFR 164.308(a)(2), every covered entity must designate a Security Officer responsible for developing and implementing security policies and procedures. This is not optional and it is not a role you can leave unfilled.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            Who Counts as a Covered Entity in MN Home Care?
          </h2>
          <p className="text-text-dark leading-relaxed mb-6">
            Any agency that creates, receives, maintains, or transmits electronic protected health information (ePHI) — including documentation in EHR systems like PointClickCare, scheduling software, and billing platforms. If a caregiver logs a visit on a phone, if a coordinator emails a care plan, if a biller submits a claim electronically — you are a covered entity.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            What Does a Security Officer Actually Do?
          </h2>
          <ul className="space-y-3 text-text-dark mb-6">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Conduct or oversee the Security Risk Assessment (required by HHS)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Develop and maintain security policies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Train workforce on security procedures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Manage BAAs with all Business Associates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Respond to security incidents</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            Full-Time vs. Fractional Security Officer
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-2">Full-time hire</h3>
              <p className="text-text-light text-sm mb-3">$75,000–$110,000/year salary + benefits, hiring pipeline, ongoing management.</p>
              <p className="text-text-dark text-sm">Right fit for large multi-site operators — overkill for a 5–30 person home care agency.</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">Outsourced fractional</h3>
              <p className="text-gray-300 text-sm mb-3">$750–$1,500/month — same coverage, fraction of the cost.</p>
              <p className="text-gray-200 text-sm">Designed specifically for small MN home care agencies that need real compliance without an FTE.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            How Arsi Tech Group Helps
          </h2>
          <p className="text-text-dark leading-relaxed mb-6">
            We serve as the outsourced Security Officer for MN home care agencies — running the Security Risk Assessment on the official HHS OCR Tool, drafting and managing BAAs with your EHR and billing vendors, configuring Microsoft 365 / Azure / Intune to meet HIPAA technical safeguards, and staying on-call for incidents.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-8 md:p-10 text-center border border-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Free Compliance Review
          </h3>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            30-minute call. We&apos;ll tell you where you stand and what it takes to close the gaps.
          </p>
          <a
            href="mailto:arsitechgroup@gmail.com?subject=Free%20Compliance%20Review"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Book a Free Compliance Review
          </a>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-accent hover:text-accent-dark font-semibold"
          >
            ← See all Compliance Services
          </Link>
        </div>
      </div>
    </article>
  );
}
