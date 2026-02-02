"use client";

import Link from "next/link";
import { ClockIcon, WrenchScrewdriverIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon, ServerStackIcon, ShieldCheckIcon, LockClosedIcon, CheckIcon } from "@heroicons/react/24/outline";
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

const services = [
  {
    icon: CodeBracketIcon,
    title: "Software Development",
    description: "Custom web apps, automation, and integrations",
    features: [
      "Custom Web Applications",
      "Business Process Automation",
      "API Development & Integration",
      "Database Design",
    ],
    highlighted: false,
  },
  {
    icon: ServerStackIcon,
    title: "IT Consulting",
    description: "Complete IT solutions for your business",
    features: [
      "Microsoft 365 Administration",
      "Cloud Infrastructure",
      "Network & Security",
      "Help Desk Support",
    ],
    highlighted: false,
  },
  {
    icon: ShieldCheckIcon,
    title: "HIPAA Compliance",
    price: "Get Quote",
    priceNote: "prices vary",
    description: "Full compliance in as little as 4 days",
    features: [
      "Complete Risk Assessment",
      "Policy Documentation",
      "Security Configuration",
      "Audit-Ready Binder",
    ],
    highlighted: true,
  },
  {
    icon: LockClosedIcon,
    title: "Security & Compliance",
    description: "Protect your business and data",
    features: [
      "Security Assessments",
      "Compliance Consulting",
      "Vulnerability Scanning",
      "Incident Response",
    ],
    highlighted: false,
  },
];

export default function ProblemServicesSection() {
  return (
    <section id="services" className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl animate-float-slow delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Problem Section */}
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
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Transition to Solutions */}
        <AnimatedSection animation="scale" delay={450} className="text-center mb-16">
          <p className="text-2xl font-semibold text-white mb-2">
            We&apos;re here to change that.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
        </AnimatedSection>

        {/* Solutions/Services Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Technology Solutions for Your Business
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From custom software to IT infrastructure and compliance — we handle it all so you can focus on growing your business.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                className={`relative rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 ${
                  service.highlighted
                    ? "bg-accent text-white shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30"
                    : "bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/50 hover:shadow-xl"
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-highlight text-primary px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 ${
                    service.highlighted ? "bg-white/20" : "bg-accent/20"
                  }`}
                >
                  <service.icon
                    className={`w-6 h-6 ${
                      service.highlighted ? "text-white" : "text-accent"
                    }`}
                  />
                </div>

                <h3
                  className={`text-lg font-semibold mb-2 ${
                    service.highlighted ? "text-white" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {service.price && (
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.price}
                    </span>
                    <span className="text-sm ml-1 text-white/70">
                      {service.priceNote}
                    </span>
                  </div>
                )}

                <p
                  className={`text-sm mb-4 ${
                    service.highlighted ? "text-white/80" : "text-gray-300"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <CheckIcon
                        className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                          service.highlighted ? "text-highlight" : "text-accent"
                        }`}
                      />
                      <span
                        className={
                          service.highlighted ? "text-white/90" : "text-gray-200"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-accent font-semibold hover:text-cyan transition-colors group"
          >
            View All Services & Pricing
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
