export type PortfolioCategory =
  | "Healthcare"
  | "Restaurant"
  | "Transportation"
  | "Community"
  | "Platform";

export type PortfolioItem = {
  slug: string;
  name: string;
  url: string;
  category: PortfolioCategory;
  services: string[];
  location: string;
  blurb: string;
  image: string | null;
  live: boolean;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "entrusted",
    name: "Entrusted Care Residence",
    url: "https://www.entrustedcareresidence.org",
    category: "Healthcare",
    services: ["Website", "IT", "HIPAA"],
    location: "Saint Paul, MN",
    blurb: "Assisted living site, staff email, and named HIPAA Security Officer.",
    image: null,
    live: true,
  },
  {
    slug: "elroi",
    name: "El Roi Health Services",
    url: "https://elroihealthservices.com",
    category: "Healthcare",
    services: ["Website", "Email"],
    location: "Minneapolis, MN",
    blurb: "Home care agency site with business email on their own domain.",
    image: null,
    live: true,
  },
  {
    slug: "careconnect",
    name: "CareConnect Live",
    url: "https://careconnectlive.org",
    category: "Platform",
    services: ["Platform Build"],
    location: "Minnesota Statewide",
    blurb: "Directory that connects 245D providers with case managers.",
    image: null,
    live: true,
  },
  {
    slug: "saveyours",
    name: "SaveYours",
    url: "https://saveyours.net",
    category: "Platform",
    services: ["Website", "Automation"],
    location: "Minnesota",
    blurb: "Marketing site with automated intake and follow-up workflow.",
    image: null,
    live: true,
  },
  {
    slug: "riftvalley",
    name: "Rift Valley Transportation",
    url: "https://rvtusinc.com",
    category: "Transportation",
    services: ["Website", "Email", "Hosting"],
    location: "Minnesota",
    blurb: "Company site, staff email, and managed hosting for a transport firm.",
    image: null,
    live: true,
  },
  {
    slug: "oromo",
    name: "Oromo Platform",
    url: "https://oromo-platform.vercel.app",
    category: "Community",
    services: ["Platform Build"],
    location: "Community",
    blurb: "Community platform for events, resources, and member profiles.",
    image: null,
    live: true,
  },
  {
    slug: "wajii",
    name: "Wajii Websites",
    url: "https://wajiiwebsites.com",
    category: "Platform",
    services: ["Our Product"],
    location: "Minneapolis, MN",
    blurb: "Our own product: done-for-you websites for small businesses.",
    image: null,
    live: true,
  },
];
