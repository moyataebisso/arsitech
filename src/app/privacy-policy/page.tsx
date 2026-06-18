import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Arsi Technology",
  description: "Privacy policy for Arsi Technology LLC. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Privacy Policy
            </h1>
            <p className="mt-4 text-text-light">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-text-dark leading-relaxed mb-8">
              {COMPANY.legalName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed
              to protecting your personal information. This Privacy Policy explains how we collect,
              use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Information We Collect</h2>
            <p className="text-text-dark leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark mb-8">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, and company
                name when you contact us or submit a form.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including pages visited and time spent on the site.
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, operating system, and IP address
                for analytics and security purposes.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-text-dark leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark mb-8">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver the services you request</li>
              <li>Send you relevant information about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Information Sharing</h2>
            <p className="text-text-dark leading-relaxed mb-8">
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information with trusted service providers who assist us in operating
              our website and conducting our business, provided they agree to keep your
              information confidential. We may also disclose information when required by law
              or to protect our rights.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Data Security</h2>
            <p className="text-text-dark leading-relaxed mb-8">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the Internet or electronic storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Your Rights</h2>
            <p className="text-text-dark leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark mb-8">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Cookies</h2>
            <p className="text-text-dark leading-relaxed mb-8">
              Our website may use cookies to enhance your browsing experience. Cookies are
              small text files stored on your device that help us analyze web traffic and
              improve our services. You can choose to disable cookies through your browser
              settings, though this may affect some website functionality.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Third-Party Links</h2>
            <p className="text-text-dark leading-relaxed mb-8">
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices or content of these external sites. We encourage you
              to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Updates to This Policy</h2>
            <p className="text-text-dark leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated revision date. We encourage you to review this
              policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Contact Us</h2>
            <p className="text-text-dark leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="bg-off-white p-6 rounded-xl">
              <p className="text-text-dark mb-2">
                <strong>{COMPANY.legalName}</strong>
              </p>
              <p className="text-text-dark mb-2">{COMPANY.location}</p>
              <p className="text-text-dark">
                Email:{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-accent hover:text-primary">
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
