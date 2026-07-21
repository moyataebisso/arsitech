"use client";

import { useState } from "react";
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What does Arsi Technology Group actually do?",
    answer:
      "We run two service lines under one LLC: Wajii Websites (done-for-you custom websites for small businesses, starting at $99/mo) and Arsi Tech Compliance (fractional HIPAA Security Officer services for Minnesota healthcare providers, starting at $750/mo).",
  },
  {
    question: "Do I need a website or compliance services?",
    answer:
      "Many of our clients need both — especially home care agencies and assisted living facilities who need a professional site AND HIPAA compliance. We can handle both under one engagement.",
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "Traditional agencies charge $5,000–$15,000 to build a site and $150–$250/hr for ongoing work. We charge a flat monthly rate and you deal with one person who knows your business.",
  },
  {
    question: "Where are you based?",
    answer:
      "Minneapolis, Minnesota. We serve clients statewide and remotely.",
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
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to get started?
                  </h2>
                  <p className="text-lg text-white/80 mb-8">
                    Free consultation — no pressure, no obligation.
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wajiiwebsites.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white text-accent hover:bg-gray-100 px-6 py-3.5 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      Get a Website
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="mailto:arsitechgroup@gmail.com"
                      className="inline-flex items-center justify-center bg-primary/40 hover:bg-primary/60 text-white border-2 border-white/40 hover:border-white/60 px-6 py-3.5 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      Talk Compliance
                      <svg
                        className="w-4 h-4 ml-2"
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
