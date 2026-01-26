"use client";

import Link from "next/link";
import { CheckBadgeIcon, AcademicCapIcon, MapPinIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import AnimatedSection from "./AnimatedSection";

const teamCredentials = [
  "M.S. in Electrical & Computer Engineering (University of St. Thomas)",
  "B.S. in Computer Science (UMN Twin Cities CSE)",
  "B.A.Sc. in IT Infrastructure (University of Minnesota)",
  "Fortune 500 Experience (Optum, Xcel Energy)",
  "Minnesota-Based, Serving Businesses Nationwide",
];

const degrees = [
  {
    degree: "M.S. Electrical & Computer Engineering",
    school: "University of St. Thomas, MN",
  },
  {
    degree: "B.S. Computer Science",
    school: "University of Minnesota Twin Cities (CSE)",
  },
  {
    degree: "B.A.Sc. IT Infrastructure",
    school: "University of Minnesota",
  },
];

const highlights = [
  { value: "Fortune 500", label: "Company Experience" },
  { value: "5+", label: "Years Combined Experience" },
  { value: "4 Days", label: "HIPAA Compliance" },
];

export default function TeamCredentialsSection() {
  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-highlight/10 rounded-full blur-3xl animate-float delay-200" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-success/10 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-cyan/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-highlight/20 text-highlight mb-4">
            <AcademicCapIcon className="w-5 h-5 mr-2" />
            <span className="font-medium">Our Team&apos;s Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Engineering Excellence That Powers Your Solutions
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPinIcon className="w-5 h-5 text-cyan" />
            <span>Minnesota-Based Expertise</span>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Team Visual */}
          <AnimatedSection animation="fade-right" className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-accent via-accent-dark to-cyan rounded-2xl p-8 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden group hover:shadow-2xl shadow-xl shadow-accent/20 transition-shadow duration-300">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />

              {/* Animated blobs */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-blob" />
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-blob delay-300" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full animate-float" />

              <div className="text-center relative z-10">
                <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center border-4 border-white/20 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <UserGroupIcon className="w-16 h-16 text-white" />
                </div>
                <p className="text-white font-semibold text-lg">Expert Team</p>
                <p className="text-white/70 text-sm">Advanced Engineering Degrees</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={200} className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block text-accent font-medium">Meet the Team</span>
              <div className="flex items-center px-3 py-1 bg-highlight/20 rounded-full">
                <MapPinIcon className="w-4 h-4 text-highlight mr-1" />
                <span className="text-highlight text-sm font-medium">Minnesota</span>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our team brings graduate-level engineering expertise from <strong className="text-white">University of St. Thomas</strong> and <strong className="text-white">University of Minnesota Twin Cities</strong>. With experience at <strong className="text-white">Optum/United Health Group</strong>, <strong className="text-white">Xcel Energy</strong>, and multiple tech startups, we deliver enterprise-level solutions to businesses of all sizes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We founded Arsi Technology Group to help Minnesota businesses solve their toughest technology challenges — from custom software to HIPAA compliance.
            </p>

            {/* Team Credentials */}
            <ul className="space-y-3 mb-8">
              {teamCredentials.map((credential, index) => (
                <li key={index} className="flex items-center group">
                  <CheckBadgeIcon className="w-6 h-6 text-accent mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-200 group-hover:text-accent transition-colors">{credential}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/30 group"
            >
              Meet Our Team
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

        {/* Degrees grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {degrees.map((cred, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{cred.degree}</h3>
                <p className="text-gray-300 text-sm">{cred.school}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
          {highlights.map((stat, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={(index + 3) * 100}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1 stat-number">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
