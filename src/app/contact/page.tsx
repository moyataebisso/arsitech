import { Metadata } from "next";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Arsi Technology Group",
  description: "Get in touch with Arsi Technology Group. Schedule a free consultation for software development, IT consulting, or HIPAA compliance services.",
};

const expectations = [
  "We'll respond within 24 hours",
  "Schedule a free discovery call",
  "We'll assess your technology needs",
  "You'll receive a customized proposal",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan/10 rounded-full blur-3xl animate-float delay-200" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let&apos;s Talk Technology
              </h1>
              <p className="text-xl text-gray-300">
                Schedule a free consultation or send us a message
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fade-right">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Get In Touch</h2>
                <p className="text-gray-300 mb-8">
                  Tell us about your business and technology needs. We&apos;ll get back to you within 24 hours.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="lg:pl-8">
                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <EnvelopeIcon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">Email</h3>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-accent hover:text-cyan transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <PhoneIcon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">Phone</h3>
                      <a
                        href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                        className="text-accent hover:text-cyan transition-colors"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <MapPinIcon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-gray-300">{COMPANY.location}</p>
                      <p className="text-gray-400 text-sm">(Serving nationwide)</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <ClockIcon className="h-6 w-6 text-accent mr-3" />
                    <h3 className="font-semibold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-200">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-white">9:00 AM - 5:00 PM CST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium text-white">By appointment</span>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
                  <ul className="space-y-3">
                    {expectations.map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <CheckCircleIcon className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-200 group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-gray-400 text-sm italic">
                    No pressure, no obligation — just an honest assessment of your technology needs.
                  </p>
                </div>

                {/* LinkedIn */}
                <div className="mt-8">
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-cyan transition-colors font-medium group"
                  >
                    <svg
                      className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
