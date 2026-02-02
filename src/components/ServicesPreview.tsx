"use client";

import Link from "next/link";
import { CodeBracketIcon, ServerStackIcon, ShieldCheckIcon, LockClosedIcon, CheckIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

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

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-off-white via-accent/5 to-success/5 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-float-slow delay-200" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-success/5 rounded-full blur-2xl animate-float-fast delay-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Complete Technology Solutions for Your Business
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
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
                    ? "bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
                    : "bg-gradient-to-br from-light-accent/40 to-success/10 border border-accent/10 hover:shadow-xl hover:border-accent/30"
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
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    service.highlighted ? "bg-white/10" : "bg-accent/10"
                  }`}
                >
                  <service.icon
                    className={`w-6 h-6 ${
                      service.highlighted ? "text-accent" : "text-accent"
                    }`}
                  />
                </div>

                <h3
                  className={`text-lg font-semibold mb-2 ${
                    service.highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  {service.title}
                </h3>

                {service.price && (
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.price}
                    </span>
                    <span className="text-sm ml-1 text-gray-300">
                      {service.priceNote}
                    </span>
                  </div>
                )}

                <p
                  className={`text-sm mb-4 ${
                    service.highlighted ? "text-gray-300" : "text-text-light"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <CheckIcon
                        className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                          service.highlighted ? "text-accent" : "text-success"
                        }`}
                      />
                      <span
                        className={
                          service.highlighted ? "text-gray-200" : "text-text-dark"
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
            className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors group"
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
