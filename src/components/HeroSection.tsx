"use client";

import Link from "next/link";
import { CodeBracketIcon, ShieldCheckIcon, CpuChipIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] bg-primary bg-grid-pattern relative overflow-hidden pt-[70px]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-95" />

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl animate-float delay-300" />

        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/30 rounded-full animate-float-fast" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-highlight/30 rounded-full animate-float delay-200" />
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-cyan/40 rounded-full animate-float-slow delay-400" />
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-accent/20 rounded-full animate-float delay-600" />
        <div className="absolute top-2/3 left-1/5 w-4 h-4 bg-highlight/20 rounded-full animate-float-fast delay-100" />
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-success/30 rounded-full animate-float delay-500" />

        <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/10 animate-blob" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-cyan/10 animate-blob delay-400" />
      </div>

      {/* Floating decoration icons */}
      <div className="absolute top-1/4 right-10 opacity-10 hidden lg:block">
        <CpuChipIcon className="w-64 h-64 text-accent animate-float-rotate" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-10 hidden lg:block">
        <CodeBracketIcon className="w-20 h-20 text-cyan animate-float delay-300" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 opacity-10 hidden lg:block">
        <ShieldCheckIcon className="w-16 h-16 text-highlight animate-float-slow delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Slogan headline */}
          <h1
            className="font-bold text-white leading-[1.1] mb-8 text-4xl md:text-5xl lg:text-6xl animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Making{" "}
            <span className="text-gradient-animate">expensive tech services</span>{" "}
            affordable for small businesses.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Arsi Technology Group helps Minnesota businesses get the tech infrastructure they need — websites, hosting, HIPAA compliance, and fractional IT — at prices designed for small and local owners.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <a
              href="#two-routes"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 btn-glow hover:scale-105"
            >
              See What We Offer
              <svg className="ml-2 w-5 h-5 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/50"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full opacity-30"
        >
          <path
            d="M0 50L48 45.7C96 41 192 33 288 35.3C384 38 480 50 576 55.8C672 62 768 62 864 55.8C960 50 1056 38 1152 35.3C1248 33 1344 41 1392 45.7L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="#1E293B"
          />
        </svg>
      </div>
    </section>
  );
}
