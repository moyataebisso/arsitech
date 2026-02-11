"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";
import ClientCarousel from "./ClientCarousel";

// Client data with Supabase storage logo URLs
const clients = [
  {
    name: "CareConnect Live",
    industry: "Healthcare",
    logo: "https://abhpzepanwhuswhiuutu.supabase.co/storage/v1/object/public/logos/careconnect-logo.png",
  },
  {
    name: "SaveYours",
    industry: "CPR Training",
    logo: "https://abhpzepanwhuswhiuutu.supabase.co/storage/v1/object/public/logos/saveyours-logo.png",
  },
  {
    name: "Entrusted Home Healthcare",
    industry: "Home Healthcare",
    logo: "https://abhpzepanwhuswhiuutu.supabase.co/storage/v1/object/public/logos/entrusted-logo.png",
  },
  {
    name: "Rift Valley Transportation",
    industry: "Transportation",
    logo: "https://abhpzepanwhuswhiuutu.supabase.co/storage/v1/object/public/logos/riftvalley-logo.png",
  },
  {
    name: "INDSVE",
    industry: "Fashion / E-commerce",
    logo: "https://abhpzepanwhuswhiuutu.supabase.co/storage/v1/object/public/logos/indsve-logo.png",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted By Minnesota Businesses
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From healthcare platforms to business technology solutions, we deliver results
          </p>
        </AnimatedSection>

        {/* Client Carousel */}
        <AnimatedSection animation="fade-up" delay={200} className="mb-12 px-8">
          <ClientCarousel clients={clients} />
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-accent font-semibold hover:text-cyan transition-colors group"
          >
            View Our Work
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
