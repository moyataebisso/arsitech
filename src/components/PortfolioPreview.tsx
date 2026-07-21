"use client";

import { ArrowTopRightOnSquareIcon, MapPinIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

type Project = {
  name: string;
  type: string;
  location: string;
  url: string;
  division: "Wajii Websites" | "Arsi Tech Compliance" | "Both Divisions";
};

const projects: Project[] = [
  {
    name: "El Roi Health Services",
    type: "Home Care Agency Website",
    location: "Minneapolis, MN",
    url: "https://elroihealthservices.com",
    division: "Wajii Websites",
  },
  {
    name: "Entrusted Care Residence",
    type: "Assisted Living Website + HIPAA Compliance",
    location: "Saint Paul, MN",
    url: "https://entrustedhomehealthcare.org",
    division: "Both Divisions",
  },
  {
    name: "CareConnect Live",
    type: "245D Provider Marketplace",
    location: "Minnesota Statewide",
    url: "https://careconnectlive.org",
    division: "Wajii Websites",
  },
];

function divisionBadgeClasses(division: Project["division"]) {
  switch (division) {
    case "Wajii Websites":
      return "bg-accent/20 text-accent border border-accent/30";
    case "Arsi Tech Compliance":
      return "bg-cyan/20 text-cyan border border-cyan/30";
    case "Both Divisions":
    default:
      return "bg-highlight/20 text-highlight border border-highlight/30";
  }
}

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
            Real clients. Real websites. Real HIPAA programs — live and running today.
          </p>
        </AnimatedSection>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.name}
              animation="fade-up"
              delay={index * 120}
            >
              <article className="h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${divisionBadgeClasses(
                      project.division
                    )}`}
                  >
                    {project.division}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm mb-3 flex-grow">
                  {project.type}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-cyan font-semibold text-sm transition-colors self-start"
                >
                  View Site
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
