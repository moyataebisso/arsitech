"use client";

import { useEffect, useRef, useState } from "react";
import { AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/solid";

const credentials = [
  {
    icon: "ms",
    degree: "M.S. Electrical & Computer Engineering",
    school: "University of St. Thomas, MN",
  },
  {
    icon: "bs",
    degree: "B.S. Computer Science",
    school: "University of Minnesota Twin Cities (CSE)",
  },
  {
    icon: "bas",
    degree: "B.A.Sc. IT Infrastructure",
    school: "University of Minnesota",
  },
];

const highlights = [
  { value: "Fortune 500", label: "Company Experience" },
  { value: "5+", label: "Years Combined Experience" },
  { value: "4 Days", label: "HIPAA Compliance" },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-95" />
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-highlight/20 text-highlight mb-4">
            <AcademicCapIcon className="w-5 h-5 mr-2" />
            <span className="font-medium">Our Team&apos;s Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Education That Powers Your Solutions
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPinIcon className="w-5 h-5 text-cyan" />
            <span>Minnesota-Based Expertise</span>
          </div>
        </div>

        {/* Credentials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <AcademicCapIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{cred.degree}</h3>
              <p className="text-gray-300 text-sm">{cred.school}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
          {highlights.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 stat-number">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
