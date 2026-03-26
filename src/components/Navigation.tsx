"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ShieldCheckIcon className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-primary tracking-tight">
              ARSI <span className="text-accent">TECHNOLOGY GROUP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-text-dark hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Free Consultation
            </Link>
            <a
              href="/admin/dashboard"
              className="w-1.5 h-1.5 rounded-full bg-gray-400 opacity-20 hover:opacity-60 transition-opacity cursor-pointer"
              title="Portal"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-text-dark" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-text-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-text-dark font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              className="block w-full text-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
