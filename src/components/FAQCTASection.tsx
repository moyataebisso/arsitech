"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { COMPANY } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established companies. Our clients include healthcare practices, professional services firms, retail businesses, and more. If you have a technology challenge, we can help.",
  },
  {
    question: "Do you offer HIPAA compliance services?",
    answer: "Yes! HIPAA compliance is one of our specialties. We offer comprehensive HIPAA compliance setup in as little as 4 business days, including risk assessment, policy documentation, security configuration, and audit-ready documentation. Pricing varies based on the number of computers and practice size — contact us for a quote.",
  },
  {
    question: "Can you build custom software for my business?",
    answer: "Absolutely. We develop custom web applications, internal tools, automation solutions, and integrations tailored to your specific business needs. We'll work with you to understand your requirements and deliver a solution that drives real results.",
  },
  {
    question: "Do you provide ongoing IT support?",
    answer: "Yes, we offer flexible support options including help desk services, managed IT, and on-demand consulting. We can serve as your complete IT department or supplement your existing team.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white group-hover:text-accent transition-colors pr-4">
          {question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQCTASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-highlight/10 rounded-full blur-3xl animate-float delay-200" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan/10 rounded-full blur-2xl animate-float-slow delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Section */}
          <div>
            <AnimatedSection animation="fade-up">
              <div className="text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-300">
                  Common questions about our technology and consulting services
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 border border-white/10">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* CTA Section */}
          <div className="lg:sticky lg:top-24">
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-gradient-to-br from-accent via-accent-dark to-cyan rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                {/* Animated blobs */}
                <div className="absolute top-5 left-5 w-16 h-16 bg-white/10 rounded-full animate-blob" />
                <div className="absolute bottom-5 right-5 w-20 h-20 bg-white/10 rounded-full animate-blob delay-300" />

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Solve Your Technology Challenges?
                  </h2>
                  <p className="text-lg text-white/80 mb-8">
                    Schedule a free consultation to discuss how we can help your business grow.
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 mb-6 w-full sm:w-auto"
                  >
                    Get a Free Consultation
                  </Link>

                  <div className="pt-6 border-t border-white/20">
                    <p className="text-white/70 mb-2">Or call us directly:</p>
                    <a
                      href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                      className="text-2xl font-bold text-white hover:text-highlight transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
