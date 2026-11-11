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
    slug: "adama",
    name: "Adama Restaurant",
    url: "https://www.adamarestaurant.com",
    category: "Restaurant",
    industry: "Oromo & Ethiopian Restaurant",
    services: ["Web Development", "Admin-Editable Content", "Catering Requests", "SEO"],
    location: "Columbia Heights, MN",
    blurb:
      "Family-owned Oromo & Ethiopian restaurant site with menu, catering, and editable content.",
    description:
      "Website for a family-owned Oromo and Ethiopian restaurant in Columbia Heights. Covers menu, catering requests, and admin-editable content so the owners can update their site themselves.",
    projectType: "Restaurant Website + CMS",
    featured: true,
    image: null,
    logo: null,
    live: true,
    showOn: ["home", "portfolio"],
    consent: true,
  },
  {
    slug: "entrusted",
    name: "Entrusted Care Residence",
    url: "https://www.entrustedcareresidence.org",
    category: "Healthcare",
    industry: "Assisted Living",
    services: ["Web Development", "Job Applications", "HIPAA Compliance", "Ongoing IT Support"],
    location: "Saint Paul, MN",
    blurb:
      "Nurse-founded assisted living residence site with care services, homes, and job applications.",
    description:
      "Nurse-founded assisted living residence in Saint Paul. We built the website covering care services, resident homes, and job applications, and provide ongoing HIPAA and IT support including a named Security Officer role.",
    projectType: "Website + HIPAA Compliance",
    featured: true,
    image: null,
    logo: `${LOGO_BASE}/entrusted-logo.png`,
    live: true,
    showOn: ["home", "portfolio"],
    consent: true,
  },
  {
    slug: "elroi",
    name: "El Roi Health Services",
    url: "https://elroihealthservices.com",
    category: "Healthcare",
    industry: "Home Care & HCBS",
    services: ["Web Development", "Business Email", "Contact Intake", "SEO"],
    location: "Blaine, MN",
    blurb:
      "Minnesota-licensed home care & HCBS agency site with services and contact intake.",
    description:
      "Minnesota-licensed home care and HCBS agency based in Blaine. We built the website covering their service lines and contact/intake flow, with business email on their own domain and ongoing support.",
    projectType: "Website + Business Email",
    featured: true,
    image: null,
    logo: `${LOGO_BASE}/furtu-logo-2.png`,
    live: true,
    showOn: ["home", "portfolio"],
    consent: true,
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
    slug: "careconnect",
    name: "CareConnect",
    url: "https://careconnections.live",
    category: "Platform",
    industry: "Healthcare",
    services: ["Full-Stack Development", "Database Design", "Cloud Infrastructure", "Ongoing Support"],
    location: "Minnesota Statewide",
    blurb: "Statewide directory connecting Minnesota 245D providers with case managers and families.",
    description:
      "A two-sided platform built from the ground up with React, TypeScript, and Supabase (PostgreSQL). Minnesota 245D and HCBS providers list their services, and case managers and families search them and send referrals. Built and operated by Arsi Technology Group.",
    projectType: "Healthcare Marketplace Platform",
    featured: false,
    image: null,
    logo: `${LOGO_BASE}/careconnect-logo.png`,
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
