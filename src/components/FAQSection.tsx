"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-highlight/10 rounded-full blur-3xl animate-float delay-200" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Common questions about our technology and consulting services
          </p>
        </div>

        {/* FAQ list */}
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
      </div>
    </section>
  );
}
