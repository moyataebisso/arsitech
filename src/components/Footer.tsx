import Link from "next/link";
import { ShieldCheckIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan/5 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-accent" />
              <span className="text-lg font-bold tracking-tight">
                ARSI <span className="text-accent">TECHNOLOGY GROUP</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm italic leading-relaxed mb-4">
              Big-company tech. Small-business prices. Real human support.
            </p>
            <p className="text-gray-500 text-sm mb-1">&copy; {year} {COMPANY.legalName}</p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <MapPinIcon className="w-3.5 h-3.5 text-highlight" />
              Minneapolis, Minnesota
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-white font-medium mb-1">Email</span>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin/dashboard"
                  className="inline-flex items-center text-gray-400 hover:text-accent transition-colors font-medium"
                >
                  Login
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="ml-2">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              A Minnesota-based technology company building tech that fits your size and your budget.
            </p>
            <div className="flex gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
