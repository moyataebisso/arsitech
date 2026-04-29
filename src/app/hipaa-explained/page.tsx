import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  BookOpenIcon,
  ScaleIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title:
    "How HIPAA Compliance Actually Works (For Small Providers) | Arsi Technology Group",
  description:
    "Honest guide to HIPAA compliance for small Minnesota healthcare providers. What HIPAA requires, what it does not require, what happens if violations occur, and how to be compliant on a small budget.",
  keywords: [
    "HIPAA compliance small business",
    "affordable HIPAA",
    "HIPAA group home",
    "HIPAA requirements explained",
    "HIPAA Security Officer",
    "HIPAA violation consequences",
    "HIPAA for home healthcare",
    "HIPAA Minnesota",
  ],
  openGraph: {
    title: "How HIPAA Compliance Actually Works (For Small Providers)",
    description:
      "Plain-English HIPAA guide for small Minnesota providers — what's required, what isn't, real penalty cases, and realistic probabilities.",
    type: "article",
  },
};

const NOT_REQUIRED = [
  {
    title: "Microsoft 365 Enterprise or Azure",
    body:
      "HIPAA is technology-neutral. Federal law (45 CFR 164.306) explicitly says you can use any security measures that are reasonable and appropriate for your organization size.",
  },
  {
    title: "Encryption of all data at rest",
    body:
      'Encryption is "addressable" not "required" — meaning you can choose to encrypt OR document why you didn\'t and what you did instead.',
  },
  {
    title: "A HIPAA certification or seal",
    body:
      "There is no official HIPAA certification from the government. Companies that sell HIPAA certifications are selling marketing, not legal compliance.",
  },
  {
    title: "Specific software (EHR, practice management)",
    body:
      "No mandate to use any specific tool. You can be HIPAA compliant on paper records if you handle them properly.",
  },
  {
    title: "A full-time Security Officer",
    body:
      "Required role, but a fractional or part-time Security Officer satisfies the requirement.",
  },
  {
    title: "HITRUST or SOC 2 certification",
    body: "These are marketing certifications, not HIPAA requirements.",
  },
];

const ADMINISTRATIVE = [
  "Security Management Process — risk analysis and risk management",
  "Assigned Security Responsibility — designated Security Officer",
  "Workforce Security — staff access controls and termination procedures",
  "Information Access Management — who can access what PHI",
  "Security Awareness and Training — staff training program",
  "Security Incident Procedures — how you respond to incidents",
  "Contingency Plan — backup, disaster recovery, emergency operations",
  "Evaluation — periodic review of your security program",
  "Business Associate Contracts — BAAs with every vendor that touches PHI",
];

const PHYSICAL = [
  "Facility Access Controls — who can physically access where PHI is stored",
  "Workstation Use — what staff can and cannot do on workstations with PHI",
  "Workstation Security — physical security of devices that access PHI",
  "Device and Media Controls — managing devices throughout their lifecycle including disposal",
];

const TECHNICAL = [
  "Access Control — unique user IDs, automatic logoff, encryption (addressable)",
  "Audit Controls — logs of who accessed what PHI when",
  "Integrity — protection from improper alteration of PHI",
  "Person or Entity Authentication — verifying users are who they say they are",
  "Transmission Security — protecting PHI when it is sent electronically (addressable encryption)",
];

const BUDGET_TABLE: { req: string; enterprise: string; small: string }[] = [
  {
    req: "Encrypted device storage",
    enterprise: "Azure Information Protection",
    small: "BitLocker (built into Windows, free)",
  },
  {
    req: "Encrypted email",
    enterprise: "Microsoft Purview",
    small: "Proton Mail Plus or Hushmail (small monthly fee)",
  },
  {
    req: "Strong passwords + MFA",
    enterprise: "Azure Active Directory",
    small: "Bitwarden Free + Google Authenticator (free)",
  },
  {
    req: "Access logs",
    enterprise: "Microsoft Sentinel",
    small: "Built-in Windows Event Viewer (free)",
  },
  {
    req: "Encrypted backup",
    enterprise: "Azure Backup",
    small: "iDrive or Backblaze (small monthly fee)",
  },
  {
    req: "Antivirus",
    enterprise: "Defender for Endpoint",
    small: "Windows Defender (free)",
  },
  {
    req: "Risk analysis",
    enterprise: "Big consultancy (high project fee)",
    small: "Free HHS SRA Tool with guidance",
  },
  {
    req: "Staff training",
    enterprise: "Enterprise LMS",
    small: "HHS free training videos with documentation",
  },
  {
    req: "Designated Security Officer",
    enterprise: "Full-time hire (annual salary commitment)",
    small: "Fractional Security Officer",
  },
  {
    req: "Documented policies",
    enterprise: "Custom legal (high project fee)",
    small: "HHS sample templates customized",
  },
];

const PENALTY_CASES = [
  {
    org: "North Memorial Health Care",
    penalty: "$1,550,000",
    what: "No BAA with major contractor accessing 289,904 patient records.",
  },
  {
    org: "MAPFRE Life Insurance",
    penalty: "$2,200,000",
    what: "Did not have compliant BAAs in place.",
  },
  {
    org: "Raleigh Orthopaedic Clinic",
    penalty: "$750,000",
    what: "Transferred PHI to vendor without a BAA.",
  },
  {
    org: "Care New England Health System",
    penalty: "$400,000",
    what: "Used outdated BAAs that did not meet HIPAA requirements.",
  },
];

const SECURITY_OFFICER_PREVENTION = [
  "Implement basic technical controls (encryption, MFA, secure backup)",
  "Write and maintain the 18 required policies",
  "Train staff on HIPAA basics annually",
  "Sign BAAs with all vendors that touch PHI",
  "Keep documentation current and audit-ready",
];

const SECURITY_OFFICER_MONITORING = [
  "Bi-weekly password and access log reviews",
  "Monthly check that staff completed required training",
  "Quarterly compliance status reports",
  "Annual full HIPAA Security Risk Analysis",
  "Track changes in operations that affect compliance (new vendors, new staff, new locations)",
];

const SECURITY_OFFICER_RESPONSE = [
  "Assess whether an incident qualifies as a reportable breach",
  "Document the incident properly",
  "Coordinate notification to HHS, individuals, and media if required",
  "Implement corrective actions",
  "Coordinate with legal counsel and insurance",
  "Cooperate with HHS investigation if one occurs",
];

const CASE_MANAGER_MARKERS = [
  "Designated HIPAA Security Officer (named in writing)",
  "Annual HIPAA Security Risk Analysis on file",
  "Signed Business Associate Agreements with all vendors",
  "Documented staff HIPAA training program",
  "Written incident response procedures",
  "Adequate professional liability insurance",
];

const FAQ = [
  {
    q: "I have been operating for years without all this. Am I in trouble now?",
    a: "Probably not in immediate trouble. HHS enforces against incidents, not lack of paperwork in isolation. The risk is what happens IF something occurs and you have no documentation showing you did the basics. Starting now is significantly better than not starting.",
  },
  {
    q: "Can I just download templates and do this myself?",
    a: "Yes, technically. The HHS website provides free templates and a free Security Risk Assessment Tool. The challenge most small providers face is not the templates — it is making the work consistent month after month, year after year. Most do-it-yourself programs fade after the first year.",
  },
  {
    q: "What happens if my Security Officer (you) makes a mistake?",
    a: "We carry professional liability and cyber insurance specifically for HIPAA work. If we make a mistake that contributes to a breach, our insurance covers the response. Your insurance covers your side. This is why we require both parties to maintain adequate coverage as part of our engagement.",
  },
  {
    q: "What does HIPAA cover and what does it not cover?",
    a: "HIPAA covers Protected Health Information (PHI) — identifiable information about a person's health, healthcare, or payment for healthcare. It does not cover non-health business data, employee records (those are covered by other laws), or information that has been properly de-identified. In Minnesota, the Minnesota Health Records Act (MHRA) provides additional protections that go beyond HIPAA in some cases.",
  },
  {
    q: "How is Minnesota different from other states?",
    a: "Minnesota has stricter health privacy laws than federal HIPAA. The Minnesota Health Records Act (MHRA) requires explicit patient consent for many disclosures HIPAA permits without consent. The Minnesota Government Data Practices Act (MGDPA) applies to county-funded clients and adds additional disclosure rules. The Minnesota Consumer Data Privacy Act (MCDPA), effective July 31, 2025, adds new privacy rights. We handle all four frameworks together.",
  },
];

export default function HipaaExplainedPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-[110px] pb-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              HIPAA Explained
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How HIPAA actually works for small healthcare providers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              An honest guide to what HIPAA requires, what it does not require, what happens if a violation occurs, and how to be compliant on a real-world budget. Written for small group homes, home health agencies, and clinics in Minnesota.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl text-text-dark leading-relaxed">
            Most small healthcare providers we talk to assume HIPAA compliance means buying expensive enterprise software, hiring a full-time compliance officer, and dealing with hundreds of pages of policy documentation. None of that is actually true. HIPAA is technology-neutral, scales to your organization size, and can be done well on a small budget. This page explains how.
          </p>
        </div>
      </section>

      {/* SECTION 1 — What HIPAA does NOT require */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-warning/15 flex items-center justify-center">
              <XCircleIcon className="w-6 h-6 text-warning" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What HIPAA does NOT require
            </h2>
          </div>
          <p className="text-lg text-text-light mb-8 leading-relaxed">
            Before we get into what HIPAA actually requires, let us clear up some myths. None of these are required by HIPAA:
          </p>

          <ul className="space-y-5">
            {NOT_REQUIRED.map((item) => (
              <li
                key={item.title}
                className="bg-white rounded-xl p-5 md:p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <XCircleIcon className="w-5 h-5 text-warning mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-text-light leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 2 — What HIPAA actually requires */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What HIPAA actually requires
            </h2>
          </div>
          <p className="text-lg text-text-light mb-10 leading-relaxed">
            Here is the real list. There are exactly 18 standards under the HIPAA Security Rule, organized into three categories:
          </p>

          <div className="space-y-10">
            {/* Administrative */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Administrative Safeguards (9 standards)
              </h3>
              <p className="text-text-light mb-5 italic">
                Policies and procedures around your security program. The most important category for small providers.
              </p>
              <ul className="space-y-2">
                {ADMINISTRATIVE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Physical */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Physical Safeguards (4 standards)
              </h3>
              <p className="text-text-light mb-5 italic">
                Physical security of facilities and equipment.
              </p>
              <ul className="space-y-2">
                {PHYSICAL.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Technical Safeguards (5 standards)
              </h3>
              <p className="text-text-light mb-5 italic">
                Technology controls that protect PHI.
              </p>
              <ul className="space-y-2">
                {TECHNICAL.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-light-accent border-l-4 border-accent rounded-r-lg p-5 md:p-6">
            <p className="text-text-dark leading-relaxed">
              <strong>Required vs Addressable:</strong> Required means you must do it. Addressable means you must either do it OR document why you did not and what alternative you implemented. Neither category is optional — addressable still requires action and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Compliant on a small budget */}
      <section className="py-20 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center">
              <CheckCircleIcon className="w-6 h-6 text-success" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Compliant on a small budget — what it actually looks like
            </h2>
          </div>
          <p className="text-lg text-text-light mb-8 leading-relaxed">
            For a small healthcare provider (under 20 employees), HIPAA compliance can be done with mostly free or low-cost tools. Here is the realistic stack:
          </p>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">HIPAA Requirement</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">What enterprises do</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">What works for a small provider</th>
                </tr>
              </thead>
              <tbody>
                {BUDGET_TABLE.map((row, i) => (
                  <tr
                    key={row.req}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 md:px-6 md:py-4 font-medium text-primary border-t border-gray-100">
                      {row.req}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-text-light border-t border-gray-100">
                      {row.enterprise}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-success font-medium border-t border-gray-100">
                      {row.small}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border-l-4 border-success">
            <p className="text-text-dark leading-relaxed">
              For a small group home, ongoing tooling can be free or near-free, and a fractional Security Officer costs a small fraction of a full-time hire. Whatever the total ends up being, it&apos;s a small fraction of the cost of one breach (covered later on this page).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — What happens if a violation occurs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-warning/15 flex items-center justify-center">
              <ExclamationTriangleIcon className="w-6 h-6 text-warning" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What happens if a violation occurs
            </h2>
          </div>
          <p className="text-lg text-text-light mb-10 leading-relaxed">
            This is the question most providers are afraid to ask. Here is the honest answer.
          </p>

          <h3 className="text-2xl font-bold text-primary mb-6">
            Three categories of violation
          </h3>

          <div className="space-y-6 mb-12">
            <div className="bg-off-white rounded-xl p-6 border-l-4 border-success">
              <h4 className="text-lg font-bold text-primary mb-2">
                Category 1: Internal mistake, no public exposure
              </h4>
              <p className="text-text-dark leading-relaxed">
                Example: a staff member emails PHI to the wrong family member. Caught immediately, email recalled. You document the incident, train the staff member, update procedures. If the breach affected fewer than 500 records and you assess low risk of compromise, you log it for the annual breach report and move on. No individual notification required. This is the most common type of violation and most are handled internally without HHS involvement.
              </p>
            </div>

            <div className="bg-off-white rounded-xl p-6 border-l-4 border-warning">
              <h4 className="text-lg font-bold text-primary mb-2">
                Category 2: Real breach — over 500 records or unsecured PHI
              </h4>
              <p className="text-text-dark leading-relaxed">
                Example: a stolen laptop with unencrypted patient records, a phishing attack that compromises an email account, or ransomware hitting your system. You must notify your business associate (your Security Officer) within 5 business days. The covered entity must notify HHS within 60 days. Affected individuals must be notified within 60 days. If over 500 in one state, media notification is required. HHS opens an investigation that takes 6–18 months. Outcome depends heavily on how prepared you were.
              </p>
            </div>

            <div className="bg-off-white rounded-xl p-6 border-l-4 border-error">
              <h4 className="text-lg font-bold text-primary mb-2">
                Category 3: Willful neglect — fraud or ignoring obvious risks
              </h4>
              <p className="text-text-dark leading-relaxed">
                Example: selling PHI to data brokers, refusing to implement basic security despite knowing about it, or faking compliance records. Maximum statutory penalties apply (six- to seven-figure range per violation). Department of Justice may pursue criminal charges in extreme cases. This is rare and avoidable. Working with a proper Security Officer who flags issues prevents this category entirely.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-4">
            Are you called to court?
          </h3>
          <p className="text-text-dark leading-relaxed mb-10">
            HIPAA enforcement is mostly civil, not criminal. You are not being prosecuted in most cases. However, in a Category 2 investigation, you may need to: provide written responses to HHS investigators, participate in phone or video interviews, provide documentation under subpoena, and rarely give deposition testimony in civil litigation. With proper insurance and documentation, this is an inconvenience. Without them, this is bankruptcy.
          </p>

          <h3 className="text-2xl font-bold text-primary mb-6">
            Real 2024–2026 penalty cases
          </h3>

          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">Organization</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">Penalty</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 font-semibold">What happened</th>
                </tr>
              </thead>
              <tbody>
                {PENALTY_CASES.map((row, i) => (
                  <tr
                    key={row.org}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 md:px-6 md:py-4 font-medium text-primary border-t border-gray-100">
                      {row.org}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-error font-bold border-t border-gray-100">
                      {row.penalty}
                    </td>
                    <td className="px-4 py-3 md:px-6 md:py-4 text-text-light border-t border-gray-100">
                      {row.what}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-text-muted italic">
            These are publicly reported HHS Office for Civil Rights enforcement actions. Most penalties involve small organizations that did not have basic compliance programs in place.
          </p>
        </div>
      </section>

      {/* SECTION 5 — How likely is enforcement */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
              <ScaleIcon className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              How likely is enforcement to actually happen?
            </h2>
          </div>
          <p className="text-lg text-text-light mb-10 leading-relaxed">
            This is what most providers really want to know. The honest data:
          </p>

          <h3 className="text-2xl font-bold text-primary mb-4">
            How HHS actually finds violations
          </h3>
          <p className="text-text-dark mb-4 leading-relaxed">Three main paths:</p>
          <ul className="space-y-4 mb-10">
            <li className="bg-white rounded-xl p-5 border border-gray-200">
              <strong className="text-primary">Self-reporting:</strong>{" "}
              <span className="text-text-light">
                covered entities must self-report breaches over 500 records. About 90% of HHS investigations start here.
              </span>
            </li>
            <li className="bg-white rounded-xl p-5 border border-gray-200">
              <strong className="text-primary">Patient or staff complaints:</strong>{" "}
              <span className="text-text-light">
                HHS receives about 30,000 complaints per year. Most are resolved without penalty. About 5% lead to formal investigation.
              </span>
            </li>
            <li className="bg-white rounded-xl p-5 border border-gray-200">
              <strong className="text-primary">Random audits:</strong>{" "}
              <span className="text-text-light">
                HHS conducts about 200–300 random audits per year nationally — out of millions of covered entities. The probability of a random audit hitting any specific small provider in a given year is less than 1%.
              </span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-4">
            Honest probability for a small group home
          </h3>
          <p className="text-text-dark leading-relaxed mb-6">
            For a small healthcare provider with 5–15 patients or residents, the realistic probability of facing HHS enforcement in a given year is roughly <strong>3–7%</strong>. But the probability of catastrophic penalty IF an incident does occur and you have NO compliance program is essentially 100% — penalties scale dramatically by how prepared you were.
          </p>

          <div className="bg-light-accent border-l-4 border-accent rounded-r-lg p-6">
            <p className="text-text-dark leading-relaxed">
              <strong>This is the math that matters:</strong> you are not paying for compliance to prevent the 3–7% chance of investigation. You are paying for compliance to ensure that IF something happens (and over a 10-year business lifespan, the probability climbs significantly), the outcome is a small corrective action plan instead of a six- or seven-figure penalty.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — What a Security Officer does */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What a Security Officer actually does
            </h2>
          </div>
          <p className="text-lg text-text-light mb-10 leading-relaxed">
            HIPAA requires a designated Security Officer. For small providers who cannot justify a full-time hire, a fractional Security Officer satisfies the requirement at a small fraction of the cost. Here is what the role actually involves on a day-to-day basis:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-off-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-primary mb-3">
                Prevention <span className="text-text-muted font-normal text-sm">(90% of the work)</span>
              </h3>
              <ul className="space-y-2">
                {SECURITY_OFFICER_PREVENTION.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-dark">
                    <CheckCircleIcon className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-primary mb-3">
                Monitoring <span className="text-text-muted font-normal text-sm">(ongoing)</span>
              </h3>
              <ul className="space-y-2">
                {SECURITY_OFFICER_MONITORING.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-dark">
                    <CheckCircleIcon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-primary mb-3">
                Response <span className="text-text-muted font-normal text-sm">(when something happens)</span>
              </h3>
              <ul className="space-y-2">
                {SECURITY_OFFICER_RESPONSE.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-dark">
                    <CheckCircleIcon className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — For case managers */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-highlight/15 flex items-center justify-center">
              <UserGroupIcon className="w-6 h-6 text-highlight" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              For case managers and county social workers
            </h2>
          </div>
          <p className="text-text-dark text-lg leading-relaxed mb-6">
            When a case manager refers a resident to a group home, adult foster care provider, or home health agency, the case manager carries some implicit responsibility for that referral. If the provider has a HIPAA breach affecting a referred resident, the case manager has to explain that to the county, to the family, and to their own supervisor.
          </p>
          <p className="text-text-dark text-lg leading-relaxed mb-6">
            Case managers should look for these specific compliance markers in any provider before referring:
          </p>
          <ul className="space-y-3 mb-8">
            {CASE_MANAGER_MARKERS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200"
              >
                <CheckCircleIcon className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                <span className="text-text-dark">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-text-dark text-lg leading-relaxed">
            Providers we work with have all six. We provide written attestation of these elements to case managers on request. This makes referral easier for everyone.
          </p>
        </div>
      </section>

      {/* SECTION 8 — Common questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-cyan/15 flex items-center justify-center">
              <QuestionMarkCircleIcon className="w-6 h-6 text-cyan" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Common questions</h2>
          </div>

          <div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="bg-off-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                  {item.q}
                </h3>
                <p className="text-text-dark leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Soft CTA */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-cyan/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpenIcon className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Need help thinking this through?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            If you run a small healthcare practice in Minnesota and you are not sure where you stand on HIPAA compliance, we offer a free 30-minute consultation. We will tell you honestly what gaps exist and whether you need professional help, basic templates, or nothing at all. No sales pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
          >
            Book a Free Consultation
          </Link>
          <p className="text-sm text-gray-400 mt-6">
            Or if you would prefer to read first, see our{" "}
            <Link href="/services#healthcare" className="text-accent hover:underline">
              Services page
            </Link>{" "}
            for how we handle ongoing HIPAA compliance for small Minnesota providers.
          </p>
        </div>
      </section>
    </>
  );
}
