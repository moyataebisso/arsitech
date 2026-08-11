export type Solution = {
  slug: string;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  subhead: string;
  painPoints: { title: string; body: string }[];
  included: string[];
  proof: string;
  faq: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
};

export const solutions: Solution[] = [
  {
    slug: "245d-hcbs",
    navLabel: "245D & HCBS Providers",
    seoTitle:
      "IT & HIPAA Compliance for Minnesota 245D Providers | Arsi Technology Group",
    seoDescription:
      "Fractional HIPAA Security Officer and managed IT for Minnesota 245D and HCBS licensed providers. Based in Minneapolis. Risk assessments, policies, Microsoft 365, incident response.",
    h1: "IT and HIPAA compliance built for Minnesota 245D providers",
    subhead:
      "You need a named HIPAA Security Officer, a documented risk assessment, and someone who answers the phone when a laptop gets compromised. We do all three, for providers your size.",
    painPoints: [
      {
        title: "DHS is re-reviewing providers during the moratorium",
        body: "DHS has said it will spend the moratorium period reconnecting with providers that have not been evaluated in over three years. If your last documented security risk assessment is old or missing, that is a problem you want to solve before the review, not during it.",
      },
      {
        title: "HIPAA names a person, not a vendor",
        body: "The Security Rule requires you to designate a specific individual as your Security Officer. Most small providers assign it to an administrator who has never done a risk assessment. We take the role formally, in writing.",
      },
      {
        title: "Your IT and your compliance are the same problem",
        body: "Microsoft 365 configuration, device management, and access reviews are not separate from HIPAA. They are where most of the Security Rule is actually satisfied or failed.",
      },
    ],
    included: [
      "Designated HIPAA Security Officer, named in writing",
      "Annual Security Risk Assessment using the HHS SRA methodology",
      "Written policies and procedures mapped to the Security Rule",
      "Business Associate Agreement review and tracking",
      "Workforce security awareness training and documentation",
      "Microsoft 365, Entra ID, and Intune administration",
      "Endpoint protection, patching, and backup monitoring",
      "Incident response plan, tested, with a documented breach clock",
      "Helpdesk for your staff",
    ],
    proof:
      "We serve as designated HIPAA Security Officer for a licensed Minnesota assisted living and 245D provider, where we led a full forensic investigation of a remote-access compromise, coordinated with legal counsel on the breach determination, and delivered a 25-item corrective action plan.",
    faq: [
      {
        q: "Do you replace our administrator?",
        a: "No. We take the Security Officer role and the technical work. Your administrator stays responsible for operations and for the parts of HIPAA that are clinical and administrative.",
      },
      {
        q: "We are already licensed. Does the moratorium affect us?",
        a: "It does not restrict your existing license, and it means DHS is not adding new competitors to your market for two years. It also means DHS licensing capacity is being redirected toward reviewing existing providers.",
      },
      {
        q: "What size provider is this built for?",
        a: "Roughly five to fifty staff, with Microsoft 365 and no internal IT department.",
      },
    ],
    ctaHeading: "Start with a free 30-minute gap check",
    ctaBody:
      "We will walk your current HIPAA security posture against the Security Rule and tell you where the gaps are. No obligation, and you keep the findings either way.",
  },
  {
    slug: "home-care-assisted-living",
    navLabel: "Home Care & Assisted Living",
    seoTitle:
      "HIPAA Compliance & IT Support for Minnesota Home Care and Assisted Living | Arsi Technology Group",
    seoDescription:
      "Fractional HIPAA Security Officer and managed IT for Minnesota 144A home care and 144G assisted living providers. Minneapolis and Saint Paul.",
    h1: "HIPAA compliance and IT support for Minnesota home care and assisted living",
    subhead:
      "144A home care, 144G assisted living, and community residential settings. Same Security Rule, same Microsoft 365, same shortage of anyone who owns it.",
    painPoints: [
      {
        title: "Staff turnover is a security control problem",
        body: "Every hire and every departure is an access change. When offboarding is informal, former staff keep mailbox and file access long after their last shift. This is one of the most common findings in a real risk assessment.",
      },
      {
        title: "Shared devices and standing admin rights",
        body: "Most incidents we see in this sector trace back to a daily-use account holding local administrator rights. It is the single control that most often would have stopped the attack.",
      },
      {
        title: "Nobody has run the assessment",
        body: "The Security Rule requires a documented, current risk analysis. Not a checklist someone downloaded. A real assessment with findings, a remediation plan, and dates.",
      },
    ],
    included: [
      "Designated HIPAA Security Officer, named in writing",
      "Annual Security Risk Assessment and remediation plan",
      "Written Security Rule policies and workforce training",
      "Business Associate Agreement review and tracking",
      "Microsoft 365 and Exchange Online administration",
      "Device management, endpoint protection, and patching",
      "Onboarding and offboarding access control procedures",
      "Incident response plan and on-call support",
      "Helpdesk for your staff",
    ],
    proof:
      "We manage Microsoft 365, device security, and the HIPAA program for a licensed Minnesota assisted living provider, including the forensic response to a live remote-access compromise.",
    faq: [
      {
        q: "We use an EHR vendor. Does that cover us?",
        a: "No. Your EHR vendor is a business associate responsible for their own systems. Your staff devices, email, accounts, and access controls are yours, and that is where most of the Security Rule applies.",
      },
      {
        q: "Do you work with providers who hold both a home care and a 245D license?",
        a: "Yes. That is a common structure and our current client holds both.",
      },
      {
        q: "Can you handle an incident if one happens?",
        a: "Yes. We do forensic collection, evidence preservation, four-factor risk assessment, and coordination with your legal counsel on the breach notification determination.",
      },
    ],
    ctaHeading: "Start with a free 30-minute gap check",
    ctaBody:
      "Thirty minutes, your current posture against the Security Rule, and a written list of gaps you keep regardless of whether we work together.",
  },
  {
    slug: "accounting-tax-firms",
    navLabel: "Accounting & Tax Firms",
    seoTitle:
      "WISP & FTC Safeguards Compliance for Minnesota Tax and Accounting Firms | Arsi Technology Group",
    seoDescription:
      "Written Information Security Plan, designated Qualified Individual, and managed IT for Minnesota CPA, tax, and bookkeeping firms. FTC Safeguards Rule and IRS Publication 4557.",
    h1: "WISP and FTC Safeguards compliance for Minnesota tax and accounting firms",
    subhead:
      "If you hold a PTIN, you are a financial institution under federal law. That means a written security plan, a named Qualified Individual, and an annual review. We are that Qualified Individual.",
    painPoints: [
      {
        title: "The PTIN attestation is no longer a checkbox",
        body: "You certify at renewal that you maintain a data security plan. The IRS has moved toward verifying that attestation rather than accepting it, and a false certification carries federal exposure.",
      },
      {
        title: "A template WISP is not a WISP",
        body: "The Safeguards Rule requires nine specific elements, a designated Qualified Individual, a documented risk assessment, and vendor oversight. A downloaded PDF with your firm name typed in satisfies none of them under audit.",
      },
      {
        title: "Your cyber insurer is now asking for proof",
        body: "Carriers increasingly require the actual plan document, evidence of MFA enforcement, and the name of your Qualified Individual on the application. Firms that cannot produce them face non-renewal.",
      },
    ],
    included: [
      "Designated Qualified Individual under the FTC Safeguards Rule",
      "Written Information Security Plan covering all nine required elements",
      "Documented annual risk assessment",
      "Multi-factor authentication enforcement and evidence",
      "Encryption at rest and in transit, verified",
      "Vendor and service provider oversight documentation",
      "Incident response plan including the 30-day FTC notification clock",
      "Workforce security training with completion records",
      "Microsoft 365 administration, endpoint protection, and backup",
    ],
    proof:
      "We build and maintain regulated security programs for Minnesota businesses, including serving as designated HIPAA Security Officer for a licensed healthcare provider and leading a full forensic incident investigation through to the legal breach determination.",
    faq: [
      {
        q: "I am a sole practitioner working from home. Does this apply?",
        a: "Yes. There is no small-preparer or home-office exemption. The requirement attaches to the PTIN.",
      },
      {
        q: "When should we start?",
        a: "Before PTIN renewal and before filing season. September through December is the right window. Starting in February means doing it during your busiest weeks.",
      },
      {
        q: "Do you also handle our day-to-day IT?",
        a: "Yes, and it is usually cheaper combined. Most of the technical Safeguards requirements are things a managed IT provider is already doing.",
      },
    ],
    ctaHeading: "Free WISP gap check before renewal season",
    ctaBody:
      "Thirty minutes against the nine Safeguards elements. You get a written gap list you can act on with or without us.",
  },
  {
    slug: "cyber-insurance-readiness",
    navLabel: "Cyber Insurance Readiness",
    seoTitle:
      "Cyber Insurance Readiness for Minnesota Small Business | Arsi Technology Group",
    seoDescription:
      "Get your business ready for cyber liability renewal. MFA evidence, incident response plan, backup verification, and a named security lead. Minneapolis, Minnesota.",
    h1: "Get your business ready for cyber insurance renewal",
    subhead:
      "Carriers stopped taking your word for it. They now want the documents, the evidence, and a name. We produce all three before your renewal date.",
    painPoints: [
      {
        title: "The application questions are now audited",
        body: "Answering yes to multi-factor authentication, tested backups, and an incident response plan is a representation. If a claim gets investigated and the controls were not actually in place, coverage can be denied.",
      },
      {
        title: "Renewal dates arrive faster than remediation",
        body: "Closing real gaps takes weeks. Most firms discover the requirements when the application lands, which is far too late to fix anything before the quote.",
      },
      {
        title: "Nobody owns it internally",
        body: "The application asks who is responsible for information security. Most small businesses do not have an answer that survives a follow-up question.",
      },
    ],
    included: [
      "Review of your carrier application against your actual environment",
      "Multi-factor authentication rollout and documented evidence",
      "Backup verification with a tested restore, documented",
      "Written incident response plan with defined roles and timelines",
      "Named security lead for the application",
      "Endpoint protection deployment and reporting",
      "Access review and removal of standing administrator rights",
      "A remediation report you can attach to your submission",
    ],
    proof:
      "We have run a live incident end to end for a Minnesota client: forensic evidence collection, structural verification of what executed on the device, network traffic analysis, coordination with legal counsel, and a 25-item corrective action plan.",
    faq: [
      {
        q: "How long before my renewal should we start?",
        a: "Ninety days is comfortable. Sixty is workable. Thirty means we prioritize the controls that most affect your quote and document the rest as in progress.",
      },
      {
        q: "Do I need to be in a regulated industry?",
        a: "No. This applies to any business buying cyber liability coverage.",
      },
      {
        q: "Will this lower my premium?",
        a: "We cannot promise a number. What we can do is make sure your answers are accurate and supportable, which is what protects the claim.",
      },
    ],
    ctaHeading: "Free renewal readiness check",
    ctaBody:
      "Send us your carrier application or renewal date. We will tell you in thirty minutes where you would fail.",
  },
  {
    slug: "student-transportation",
    navLabel: "Student Transportation",
    seoTitle:
      "IT & Data Security for Minnesota Student Transportation Operators | Arsi Technology Group",
    seoDescription:
      "Managed IT, data security, and digital operations for Minnesota Type III and school bus contractors. Student records, driver files, and district contract requirements. Minneapolis and Saint Paul.",
    h1: "IT and data security for Minnesota student transportation operators",
    subhead:
      "You move children and you hold their records. Districts are asking harder questions about how that data is protected. We handle the systems and the answers.",
    painPoints: [
      {
        title: "District contracts now carry data security terms",
        body: "School districts are public entities, and the contracts they write increasingly specify how a contractor stores, transmits, and disposes of student information. Most operators discover those clauses at renewal, not at signing.",
      },
      {
        title: "Driver files are the most sensitive records you hold",
        body: "Background study results, license and medical records, and disciplinary history live in email attachments and shared folders at most operators. That is the single easiest place to fail a district audit.",
      },
      {
        title: "Dispatch runs on systems nobody administers",
        body: "Routing software, driver apps, timekeeping, payroll, and email are usually five vendors and zero owners. When someone leaves, their access to all five tends to persist.",
      },
    ],
    included: [
      "Microsoft 365 administration, email security, and account lifecycle",
      "Onboarding and offboarding access procedures for drivers and office staff",
      "Secure handling of driver files and background study records",
      "Student data handling review against your district contract terms",
      "Endpoint protection, patching, and verified backups",
      "Written incident response plan",
      "Vendor and system inventory across dispatch, payroll, and routing",
      "Helpdesk for office and dispatch staff",
      "Optional: website, booking, and digital operations support",
    ],
    proof:
      "We provide ongoing digital operations support to a Minnesota Type III student transportation operator, and we run security and compliance programs for regulated Minnesota clients including a licensed healthcare provider, where we led a full forensic incident investigation through to the legal breach determination.",
    faq: [
      {
        q: "We are a small operator with a dozen drivers. Is this oversized for us?",
        a: "No. Operators in the five to fifty staff range are exactly who we build for. Larger operators we typically start with a defined-scope assessment rather than full managed service.",
      },
      {
        q: "Do you work with the districts directly?",
        a: "We work for you. If a district sends a security questionnaire or a contract with data handling terms, we help you answer it accurately and make sure the answers are actually true.",
      },
      {
        q: "What if we already have someone doing IT?",
        a: "Co-managed works. We take the security and compliance side and the systems your current person does not cover, and we stay out of the rest.",
      },
    ],
    ctaHeading: "Free 30-minute operations and data review",
    ctaBody:
      "Thirty minutes on how your student and driver records actually move today, and a written list of what a district would flag. Yours either way.",
  },
];
