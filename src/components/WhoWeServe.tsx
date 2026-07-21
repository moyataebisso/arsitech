"use client";

import {
  BuildingStorefrontIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  HeartIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const audiences = [
  {
    icon: BuildingStorefrontIcon,
    name: "Restaurants",
    description: "Menus, online ordering links, and a site that actually shows up on Google.",
  },
  {
    icon: HomeModernIcon,
    name: "Home Care Agencies",
    description: "Professional site + HIPAA compliance under one monthly engagement.",
  },
  {
    icon: BuildingOffice2Icon,
    name: "Assisted Living",
    description: "Marketing site, admissions inquiries, and full HIPAA Security Officer coverage.",
  },
  {
    icon: HeartIcon,
    name: "Clinics",
    description: "Small MN clinics who need HIPAA support without a $5,000/mo IT contract.",
  },
  {
    icon: SparklesIcon,
    name: "Salons",
    description: "Bookings, service menu, and a site that reflects the room.",
  },
  {
    icon: TruckIcon,
    name: "Transportation Services",
    description: "NEMT and local transport — dispatch pages, contact forms, and clean design.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-success/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-highlight/10 rounded-full blur-2xl animate-float-fast delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industries we serve
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Local businesses and small healthcare providers across Minnesota — one team, two divisions.
          </p>
        </AnimatedSection>

        {/* Audience grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-accent hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 cursor-default hover:-translate-y-2 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/20 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <audience.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-white mb-2 transition-colors">
                  {audience.name}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-white/80 transition-colors">
                  {audience.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
