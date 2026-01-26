"use client";

import { PhoneIcon, LightBulbIcon, CogIcon, LifebuoyIcon, HeartIcon, BuildingOfficeIcon, RocketLaunchIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    step: 1,
    icon: PhoneIcon,
    title: "Discovery",
    description: "We learn about your business, understand your challenges, and identify your technology needs",
  },
  {
    step: 2,
    icon: LightBulbIcon,
    title: "Strategy",
    description: "We develop a tailored solution and roadmap that fits your budget and goals",
  },
  {
    step: 3,
    icon: CogIcon,
    title: "Implementation",
    description: "Our team builds, configures, and deploys your solution with minimal disruption",
  },
  {
    step: 4,
    icon: LifebuoyIcon,
    title: "Support",
    description: "Ongoing maintenance, training, and support to ensure long-term success",
  },
];

const audiences = [
  {
    icon: HeartIcon,
    name: "Healthcare Practices",
    description: "HIPAA-compliant solutions for clinics, home healthcare, dental offices, and medical practices",
  },
  {
    icon: BuildingOfficeIcon,
    name: "Small Businesses",
    description: "Technology solutions that scale with your growing company and streamline operations",
  },
  {
    icon: RocketLaunchIcon,
    name: "Startups",
    description: "Build your tech foundation right from the start with scalable, secure infrastructure",
  },
  {
    icon: BriefcaseIcon,
    name: "Professional Services",
    description: "Streamline operations for law firms, accounting practices, and consultancies",
  },
];

export default function ProcessAudienceSection() {
  return (
    <section id="process" className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-highlight/10 rounded-full blur-3xl animate-float delay-400" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-success/10 rounded-full blur-2xl animate-float-fast delay-200" />
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-cyan/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Process Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Work With You
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our proven process ensures we deliver the right solution for your business, on time and on budget.
          </p>
        </AnimatedSection>

        {/* Process timeline */}
        <div className="relative mb-20">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-cyan to-accent -translate-y-1/2 z-0 opacity-50" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="relative h-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 group h-full">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform animate-pulse-glow">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 mt-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>

        {/* Who We Serve Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who We Work With
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We partner with businesses of all sizes to solve their technology challenges and drive growth.
          </p>
        </AnimatedSection>

        {/* Audience grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
