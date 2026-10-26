export type PortfolioCategory =
  | "Healthcare"
  | "Restaurant"
  | "Transportation"
  | "Community"
  | "Platform"
  | "Fashion";

export type PortfolioSurface = "home" | "portfolio";

export type PortfolioItem = {
  slug: string;
  name: string;
  url: string;
  category: PortfolioCategory;
  industry?: string;
  services: string[];
  location: string;
  blurb: string;
  description: string;
  projectType: string;
  featured: boolean;
  image: string | null;
  logo: string | null;
  live: boolean;
  showOn: PortfolioSurface[];
  // Written permission to display this entry publicly. Own properties may set
  // this to true; third-party clients require documented consent on file.
  // Anything with consent: false must be filtered out at every render site.
  consent: boolean;
};

const LOGO_BASE =
  "https://abhpzepanwhuswhiuutu.supabase.co/storage/v1/object/public/logos";

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "entrusted",
    name: "Entrusted Care Residence",
    url: "https://www.entrustedcareresidence.org",
    category: "Healthcare",
    industry: "Home Healthcare",
    services: ["Web Development", "HIPAA Compliance", "Security Implementation", "Ongoing IT Support"],
    location: "Saint Paul, MN",
    blurb: "Assisted living site, staff email, and named HIPAA Security Officer.",
    description:
      "Long-term client relationship spanning over a year. Initially built their website, and recently completed full HIPAA compliance implementation including security policies, Microsoft 365 configuration, and audit-ready documentation.",
    projectType: "Website + HIPAA Compliance",
    featured: true,
    image: null,
    logo: `${LOGO_BASE}/entrusted-logo.png`,
    live: true,
    showOn: ["home", "portfolio"],
    consent: false,
  },
  {
    slug: "elroi",
    name: "El Roi Health Services",
    url: "https://elroihealthservices.com",
    category: "Healthcare",
    industry: "Home Care",
    services: ["Website", "Email"],
    location: "Minneapolis, MN",
    blurb: "Home care agency site with business email on their own domain.",
    description:
      "Home care agency website with business email on their own domain, hosting, and ongoing support.",
    projectType: "Website + Business Email",
    featured: false,
    image: null,
    logo: `${LOGO_BASE}/furtu-logo-2.png`,
    live: true,
    showOn: ["home", "portfolio"],
    consent: false,
  },
  {
    slug: "saveyours",
    name: "SaveYours",
    url: "https://saveyours.net",
    category: "Platform",
    industry: "First Aid & CPR Training",
    services: ["Web Development", "Email Automation", "Admin Dashboard", "Database Setup"],
    location: "Minnesota",
    blurb: "Marketing site with automated intake and follow-up workflow.",
    description:
      "Developed website with integrated registration system for first aid and CPR classes. Built automated email notification system that triggers when students register. Admin dashboard with full control over class management, registrations, and communications.",
    projectType: "Website + Automated Email System",
    featured: true,
    image: null,
    logo: `${LOGO_BASE}/saveyours-logo.png`,
    live: true,
    showOn: ["home", "portfolio"],
    consent: true,
  },
  {
    slug: "riftvalley",
    name: "Rift Valley Transportation",
    url: "https://rvtusinc.com",
    category: "Transportation",
    industry: "Student Transportation",
    services: ["Website Development", "Email Setup", "Business Applications", "Hosting & Management"],
    location: "Saint Paul, MN",
    blurb: "Type III school bus operator serving the Minneapolis metro.",
    description:
      "Our earliest client. Type III student transportation provider based in Saint Paul, running school bus routes across the Minneapolis metro. We provided the complete technology foundation — website, business email, hosting, and ongoing management — and continue to support day-to-day operations.",
    projectType: "Website + Business Email + Ongoing Support",
    featured: false,
    image: null,
    logo: `${LOGO_BASE}/riftvalley-logo.png`,
    live: true,
    showOn: ["home", "portfolio"],
    consent: false,
  },
  {
    slug: "oromo",
    name: "Odaa Platform",
    url: "https://oromo-platform.vercel.app",
    category: "Community",
    industry: "Education",
    services: ["Full-Stack Development", "AI Integration", "User Dashboard", "Course Management"],
    location: "Community",
    blurb: "Community platform for events, resources, and member profiles.",
    description:
      "Built a comprehensive education platform for the Oromo community featuring free world-class courses covering language, culture, history, and career skills. Includes personalized learning paths for all ages (kids to adults), parent/teacher dashboards, and an AI-powered Oromo language assistant.",
    projectType: "Full Education Platform",
    featured: true,
    image: null,
    logo: `${LOGO_BASE}/odda-logo.png`,
    live: true,
    showOn: ["home", "portfolio"],
    consent: true,
  },
  {
    slug: "wajii",
    name: "Wajii Websites",
    url: "https://wajiiwebsites.com",
    category: "Platform",
    industry: "Managed Websites",
    services: ["Our Product"],
    location: "Minneapolis, MN",
    blurb: "Our own product: done-for-you websites for small businesses.",
    description:
      "Our own product. Done-for-you websites for small businesses on a flat monthly plan — build, hosting, and ongoing edits handled.",
    projectType: "Our Product",
    featured: false,
    image: null,
    logo: `${LOGO_BASE}/waji.png`,
    live: true,
    showOn: ["home"],
    consent: true,
  },
  {
    slug: "indsve",
    name: "INDSVE",
    url: "https://indsve.com/",
    category: "Fashion",
    industry: "Fashion / E-commerce",
    services: ["Shopify UI/UX Customization", "SMS Notification Setup", "Code Modifications", "E-commerce Optimization"],
    location: "Minnesota",
    blurb: "Shopify fashion brand with custom UI and SMS order updates.",
    description:
      "E-commerce fashion brand built on Shopify. Provided UI/UX customization to create a unique shopping experience, implemented SMS notification system for customer order updates, and custom code modifications to enhance store functionality.",
    projectType: "Shopify Clothing Brand",
    featured: false,
    image: null,
    logo: `${LOGO_BASE}/indsve-logo.png`,
    live: true,
    showOn: ["portfolio"],
    consent: false,
  },
];
