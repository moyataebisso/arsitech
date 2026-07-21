import { Metadata } from "next";
import Link from "next/link";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title:
    "What Is a Business Associate Agreement (BAA) and Who Needs One?",
  description:
    "A BAA is required whenever a healthcare provider shares ePHI with a vendor. Learn who needs one, what it must contain, and what happens if you skip it.",
};

export default function WhatIsABaaPage() {
  return (
    <article className="pt-[110px] pb-20 bg-off-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          <ClipboardDocumentListIcon className="w-4 h-4" />
          HIPAA Compliance
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
          What Is a Business Associate Agreement (BAA) and Who Needs One?
        </h1>

        <p className="text-lg text-text-light leading-relaxed mb-10">
          If a vendor touches your patient data — even indirectly — you need a signed BAA on file before ePHI moves. Here&apos;s a plain-English breakdown of what that means, what has to be in the document, and what happens if you skip it.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            What Is a Business Associate?
          </h2>
          <p className="text-text-dark leading-relaxed mb-6">
            A Business Associate is any person or entity that creates, receives, maintains, or transmits ePHI on behalf of a covered entity. If a vendor sees, stores, moves, or processes your patient data — they qualify.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            Common Business Associates in Home Care
          </h2>
          <ul className="space-y-3 text-text-dark mb-6">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>EHR/EMR vendors (PointClickCare, MatrixCare, WellSky)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Billing and clearinghouse services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>IT service providers (like Arsi Tech Group)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Microsoft (for M365/Azure services processing ePHI)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Cloud storage and backup providers</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            What Must a BAA Contain?
          </h2>
          <ul className="space-y-3 text-text-dark mb-6">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Permitted uses and disclosures of ePHI</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Obligations to safeguard ePHI</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Breach notification requirements (60-day window)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Subcontractor flow-down requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold mt-1">•</span>
              <span>Return or destruction of ePHI on termination</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">
            What If You Don&apos;t Have a BAA?
          </h2>
          <p className="text-text-dark leading-relaxed mb-6">
            HHS can fine covered entities up to $100,000 per violation per year for missing BAAs. The average HIPAA settlement in 2024 was $490,000. A missing BAA is one of the fastest ways an otherwise-compliant agency lands on the OCR breach portal.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-primary via-secondary to-primary rounded-3xl p-8 md:p-10 text-center border border-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            We Draft and Manage BAAs for MN Healthcare Providers
          </h3>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            One monthly fee. All your vendors covered. No missing signatures on your compliance binder.
          </p>
          <a
            href="mailto:arsitechgroup@gmail.com?subject=BAA%20Help"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Talk to Us About BAAs
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
