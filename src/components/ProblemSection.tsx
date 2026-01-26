"use client";

import { ClockIcon, WrenchScrewdriverIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const painPoints = [
  {
    icon: ClockIcon,
    title: "Technology Slowing You Down",
    description: "Outdated systems, manual processes, and disconnected tools are costing you time, money, and opportunities.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "No Dedicated IT Team",
    description: "You're running a business, not an IT department. Managing servers, software, and tech issues shouldn't be your job.",
  },
  {
    icon: ShieldExclamationIcon,
    title: "Security & Compliance Worries",
    description: "From HIPAA to data protection, staying compliant with regulations is complex and constantly changing.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Warning headline */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-highlight/20 text-highlight mb-6 animate-pulse">
            <span className="font-medium">Sound Familiar?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technology Should Help Your Business,{" "}
            <span className="text-gradient-animate">Not Hold It Back</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Most small businesses struggle with the same technology challenges. You&apos;re not alone.
          </p>
        </AnimatedSection>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 group h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <point.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Transition text */}
        <AnimatedSection animation="scale" delay={450} className="text-center">
          <p className="text-2xl font-semibold text-white">
            We&apos;re here to change that.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
