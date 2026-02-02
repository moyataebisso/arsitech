export const COMPANY = {
  name: "Arsi Technology Group",
  legalName: "Arsi Technology Group LLC",
  tagline: "Your Complete Technology Partner for Business Success",
  description: "We help businesses solve any technology challenge — from custom software development to IT infrastructure, security compliance, and HIPAA certification.",
  location: "Minnesota",
  phone: "(763) 639-3746",
  email: "arsitechgroup@gmail.com",
  founded: "2024",
  linkedin: "https://www.linkedin.com/in/moyata-ebisso",
  founder: {
    name: "Moyata Ebisso",
    title: "Founder & Lead Engineer",
    credentials: "M.S. in Electrical & Computer Engineering",
    email: "arsitechgroup@gmail.com",
    phone: "(763) 639-3746",
    linkedin: "https://www.linkedin.com/in/moyata-ebisso",
  },
};

export const SERVICES = [
  {
    id: "software-development",
    title: "Software Development",
    shortDescription: "Custom software solutions tailored to your business",
    description: "From web applications to internal tools, we build custom software that solves your unique business challenges and drives growth.",
    icon: "code",
    href: "/services#software-development",
    features: [
      "Custom Web Applications",
      "Business Process Automation",
      "API Development & Integration",
      "Database Design & Management",
      "Mobile-Responsive Solutions",
      "Ongoing Maintenance & Support",
    ],
    price: "Custom",
    priceNote: "per project",
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Infrastructure",
    shortDescription: "Complete IT solutions for your business",
    description: "Microsoft 365 administration, cloud infrastructure, network setup, and ongoing IT support to keep your business running smoothly.",
    icon: "server",
    href: "/services#it-consulting",
    features: [
      "Microsoft 365 Administration",
      "Cloud Infrastructure Setup",
      "Network Design & Security",
      "Hardware & Software Procurement",
      "Help Desk & Technical Support",
      "Backup & Disaster Recovery",
    ],
    price: "Custom",
    priceNote: "pricing",
  },
  {
    id: "hipaa-compliance",
    title: "HIPAA Compliance",
    shortDescription: "Complete HIPAA certification in as little as 4 days",
    description: "Comprehensive HIPAA compliance solutions for healthcare businesses including risk assessment, policy documentation, security configuration, and audit-ready documentation.",
    icon: "shield",
    href: "/services#hipaa-compliance",
    features: [
      "Complete HIPAA Risk Assessment",
      "Security Gap Analysis",
      "Policy & Procedure Documentation",
      "Microsoft 365 Security Configuration",
      "Staff Training Materials",
      "Audit-Ready Documentation Binder",
    ],
    price: "Get Quote",
    priceNote: "prices vary",
    highlighted: true,
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    shortDescription: "Protect your business and meet regulatory requirements",
    description: "Comprehensive security assessments, compliance consulting, and ongoing monitoring to protect your business and customer data.",
    icon: "lock",
    href: "/services#security-compliance",
    features: [
      "Security Assessments & Audits",
      "Compliance Consulting (SOC 2, PCI-DSS)",
      "Vulnerability Scanning",
      "Security Policy Development",
      "Incident Response Planning",
      "Employee Security Training",
    ],
    price: "Custom",
    priceNote: "pricing",
  },
];

export const HIPAA_PACKAGE_DETAILS = {
  title: "HIPAA Compliance Setup",
  price: "Get Quote",
  priceNote: "pricing varies based on practice size",
  timeline: "4 business days",
  includes: [
    "Complete HIPAA Risk Assessment",
    "Security Gap Analysis",
    "Written Policies & Procedures (customized for your practice)",
    "Microsoft 365 Security Configuration",
    "Data Loss Prevention (DLP) policies",
    "Conditional Access rules",
    "Multi-Factor Authentication setup",
    "Email encryption configuration",
    "Mobile Device Management (Intune)",
    "Business Associate Agreement templates",
    "Staff Security Awareness Training materials",
    "Incident Response Plan",
    "Complete Audit-Ready Documentation Binder",
    "30-day post-implementation support",
  ],
  targetAudience: [
    "Home healthcare agencies",
    "Small medical practices",
    "Mental health providers",
    "Dental offices",
    "Any healthcare business handling PHI",
  ],
};

export const SECURITY_OFFICER_DETAILS = {
  title: "Designated Security Officer",
  price: "$150",
  priceNote: "/month",
  includes: [
    "Act as your designated HIPAA Security Officer",
    "Quarterly security reviews & risk assessments",
    "Policy updates when regulations change",
    "Compliance monitoring & alerts",
    "Direct phone/email access for questions",
    "Incident response guidance",
    "Annual training refreshers",
    "Audit preparation support",
  ],
  whyNeeded: "HIPAA requires a designated Security Officer. For small practices, hiring a full-time compliance officer isn't practical. We fill that role for a fraction of the cost.",
};

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description: "We learn about your business, understand your challenges, and identify your technology needs",
  },
  {
    step: 2,
    title: "Strategy",
    description: "We develop a tailored solution and roadmap that fits your budget and timeline",
  },
  {
    step: 3,
    title: "Implementation",
    description: "Our team builds, configures, and deploys your solution with minimal disruption",
  },
  {
    step: 4,
    title: "Support",
    description: "Ongoing maintenance, training, and support to ensure long-term success",
  },
];

export const PAIN_POINTS = [
  {
    title: "Technology Holding You Back",
    description: "Outdated systems, manual processes, and disconnected tools are slowing down your business growth.",
    icon: "slow",
  },
  {
    title: "No Dedicated IT Team",
    description: "You're focused on running your business, not managing servers, software, and security threats.",
    icon: "user",
  },
  {
    title: "Compliance Concerns",
    description: "HIPAA, security requirements, and data protection regulations are complex and constantly changing.",
    icon: "warning",
  },
];

export const STATS = [
  { value: "M.S.", label: "Engineering Degree" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
  { value: "4", label: "Day HIPAA Compliance" },
];

export const TARGET_AUDIENCES = [
  { name: "Healthcare Practices", icon: "health", description: "HIPAA-compliant solutions for clinics, home healthcare, and medical offices" },
  { name: "Small Businesses", icon: "business", description: "Technology solutions that scale with your growing company" },
  { name: "Startups", icon: "rocket", description: "Build your tech foundation right from the start" },
  { name: "Professional Services", icon: "briefcase", description: "Streamline operations for law firms, accounting, and consultancies" },
];

export const FAQS = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established companies. Our clients include healthcare practices, professional services firms, retail businesses, and more. If you have a technology challenge, we can help.",
  },
  {
    question: "Do you offer HIPAA compliance services?",
    answer: "Yes! HIPAA compliance is one of our specialties. We offer comprehensive HIPAA compliance setup in as little as 4 business days, including risk assessment, policy documentation, security configuration, and audit-ready documentation. Pricing varies based on the number of computers and practice size — contact us for a quote.",
  },
  {
    question: "Can you build custom software for my business?",
    answer: "Absolutely. We develop custom web applications, internal tools, automation solutions, and integrations tailored to your specific business needs. We'll work with you to understand your requirements and deliver a solution that drives real results.",
  },
  {
    question: "Do you provide ongoing IT support?",
    answer: "Yes, we offer flexible support options including help desk services, managed IT, and on-demand consulting. We can serve as your complete IT department or supplement your existing team.",
  },
  {
    question: "How do you handle security and compliance?",
    answer: "Security is built into everything we do. We follow industry best practices, implement proper access controls, encryption, and monitoring. For regulated industries, we provide compliance consulting for HIPAA, SOC 2, and other frameworks.",
  },
  {
    question: "What's your typical project timeline?",
    answer: "Timelines vary based on project scope. Simple IT setups can be completed in days, while custom software projects typically take weeks to months. We'll provide a clear timeline during our discovery process.",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Software Development", href: "/services#software-development" },
    { label: "IT Consulting", href: "/services#it-consulting" },
    { label: "HIPAA Compliance", href: "/services#hipaa-compliance" },
    { label: "Security & Compliance", href: "/services#security-compliance" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const COMPARISON_TABLE = {
  headers: ["Feature", "Generic IT", "Arsi Technology Group"],
  rows: [
    ["Custom Development", "Limited", "Full-Stack"],
    ["HIPAA Expertise", "Basic", "Specialized"],
    ["Local Support", "Maybe", "Yes (Minnesota)"],
    ["Response Time", "Hours/Days", "Same Day"],
    ["Ongoing Support", "Extra Cost", "Included"],
    ["Security Focus", "Basic", "Enterprise-Grade"],
  ],
};

export const ABOUT_VALUES = [
  {
    title: "Expertise",
    description: "Advanced engineering education combined with real-world industry experience at Fortune 500 companies.",
  },
  {
    title: "Partnership",
    description: "We're not just vendors — we're your long-term technology partner invested in your success.",
  },
  {
    title: "Simplicity",
    description: "We translate complex technology into clear, actionable solutions you can understand.",
  },
  {
    title: "Security",
    description: "Your data and systems are protected with enterprise-grade security practices.",
  },
];

export const FOUNDER_EDUCATION = [
  {
    degree: "M.S. in Electrical & Computer Engineering",
    school: "University of St. Thomas",
    location: "St. Paul, MN",
    date: "Dec. 2025",
    gpa: "3.8/4.0",
    focus: "Embedded Intelligent Systems",
  },
  {
    degree: "B.S. in Computer Science",
    school: "University of Minnesota Twin Cities",
    location: "Minneapolis, MN",
    date: "May 2024",
    minor: "Management (Carlson School of Management)",
  },
  {
    degree: "Document of Completion in Computer Science",
    school: "Stanford University",
    location: "Summer Session 2019",
    courses: "Client-Side Internet Tech, Intro to High-Performance Computing, Calculus",
  },
];

export const FOUNDER_EXPERIENCE = [
  {
    title: "Power Substation Communication Engineer",
    company: "Hatch (Canada)",
    date: "Present",
    highlights: [
      "Professional Consultant working on Xcel Energy utility projects through Hatch",
      "Engineering power substation communication systems and infrastructure",
    ],
  },
  {
    title: "Substation Communications Engineering Intern",
    company: "Xcel Energy",
    date: "May 2025 – Aug 2025",
    highlights: [
      "Supported testing and configuration of SEL-411L relays and RTU's (RTAC) for cybersecurity event logging",
      "Reviewed and updated SCOL models for accurate substation network representations",
      "Assisted in implementing OTSA logging procedures aligned with NERC CIP standards",
    ],
  },
  {
    title: "Graduate Student Assistant",
    company: "University of St. Thomas",
    date: "Nov 2024 – May 2025",
    highlights: [
      "Leveraged Salesforce and Ellucian Banner ERP systems for student profile management",
      "Designed and maintained web pages using HTML, CSS, and JavaScript",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "Rift Valley Transportation",
    date: "June 2024 – May 2025",
    highlights: [
      "Designed and developed business website using Wix with GoDaddy domain integration",
      "Integrated Cloudflare for performance optimization and security",
      "Managed email servers and dispatcher app infrastructure",
    ],
  },
  {
    title: "Web Developer (Contracted)",
    company: "Entrusted Home Healthcare",
    date: "June 2024 – Aug 2024",
    highlights: [
      "Led website migration from Deluxe Hosting to GoDaddy",
      "Integrated professional email system improving company's online presence",
    ],
  },
  {
    title: "TDP Software Engineering Intern",
    company: "Optum/United Health Group",
    date: "June 2022 – Aug 2022",
    highlights: [
      "Spearheaded team project using Agile/Scrum methodology",
      "Mastered AlgoSec network security software, contributing to remediation of 16,000+ firewall objects",
    ],
  },
];

export const FOUNDER_SKILLS = {
  languages: ["Python", "JavaScript", "C", "C++", "Java", "SQL", "C#"],
  tools: ["MATLAB", "Keil uVision", "Supabase", "Linux", "Git", "Docker", "React", "Firebase", "Agile Methodology"],
  mlAi: ["scikit-learn", "TensorFlow Lite", "pandas", "NumPy", "matplotlib", "OpenCV"],
  coursework: [
    "Machine Learning",
    "Wireless Sensor Networks",
    "Real-Time Digital Signal Processing",
    "Embedded & Cyber Physical Systems",
    "Introduction to Cybersecurity",
    "Operating Systems",
    "Software Engineering",
    "Computer Networks",
    "Database Systems",
    "Data Structures & Algorithms",
  ],
};

export const BUSINESS_TYPES = [
  "Healthcare",
  "Professional Services",
  "Retail",
  "Startup",
  "Other",
];

export const SERVICE_INTERESTS = [
  "Software Development",
  "IT Consulting",
  "HIPAA Compliance",
  "Security & Compliance",
  "Not Sure",
];
