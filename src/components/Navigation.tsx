"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { NAV_LINKS, NavLink } from "@/lib/constants";

function DesktopNavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);

  if (!link.children?.length) {
    return (
      <Link
        href={link.href}
        className="text-text-dark hover:text-accent transition-colors font-medium"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 text-text-dark hover:text-accent transition-colors font-medium"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {link.label}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="min-w-[260px] bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
          {link.children.map((child) => {
            const isExternal = child.external;
            const className =
              "flex items-center justify-between gap-3 px-5 py-3 text-sm font-medium text-text-dark hover:bg-light-accent hover:text-accent transition-colors";
            return isExternal ? (
              <a
                key={child.label}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                <span>{child.label}</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-text-muted" />
              </a>
            ) : (
              <Link key={child.label} href={child.href} className={className}>
                <span>{child.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
              <DesktopNavItem key={link.label} link={link} />
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
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-text-dark font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.length ? (
                <div className="pl-4 pb-2 space-y-1 border-l-2 border-light-accent ml-2">
                  {link.children.map((child) =>
                    child.external ? (
                      <a
                        key={child.label}
                        href={child.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-2 text-sm text-text-light hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-text-light hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              ) : null}
            </div>
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
