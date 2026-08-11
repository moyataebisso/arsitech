import type { MetadataRoute } from "next";
import { solutions } from "@/content/solutions";

const SITE_URL = "https://arsitechgroup.com";

const LAST_MODIFIED = new Date("2026-08-11");

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes: SitemapEntry[] = [
  { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/services`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/solutions`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/hipaa-explained`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/careers`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/portfolio`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/blog/hipaa-security-officer-home-care-minnesota`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/blog/what-is-a-baa-and-who-needs-one`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/privacy-policy`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionRoutes: SitemapEntry[] = solutions.map((s) => ({
    url: `${SITE_URL}/solutions/${s.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...solutionRoutes];
}
