"use client";

import { PhoneIcon, LightBulbIcon, CogIcon, LifebuoyIcon } from "@heroicons/react/24/outline";
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

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-off-white via-success/5 to-cyan/5 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-highlight/10 rounded-full blur-3xl animate-float delay-400" />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-success/5 rounded-full blur-2xl animate-float-fast delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How We Work With You
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Our proven process ensures we deliver the right solution for your business, on time and on budget.
          </p>
        </AnimatedSection>

        {/* Process timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-accent -translate-y-1/2 z-0 animate-gradient" style={{ backgroundSize: '200% 100%' }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="relative h-full">
                  <div className="bg-gradient-to-br from-light-accent/50 to-success/10 rounded-2xl p-8 shadow-sm border border-accent/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full backdrop-blur-sm">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform animate-pulse-glow">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
