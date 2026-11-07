"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "none";
  delay?: number;
}

type Phase = "visible" | "hidden" | "revealing";

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  // Start visible so SSR content is never stuck invisible. We only enter
  // the hidden/revealing dance if we can safely animate an element that is
  // currently below the fold.
  const [phase, setPhase] = useState<Phase>("visible");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyInViewport = rect.top < vh && rect.bottom > 0;
    if (alreadyInViewport) {
      return;
    }

    setPhase("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("revealing");
          observer.disconnect();
          window.clearTimeout(fallback);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    // Safety net: if IO hasn't fired within 1.5s, reveal everything.
    const fallback = window.setTimeout(() => {
      setPhase("revealing");
      observer.disconnect();
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const animationClass = () => {
    if (phase !== "hidden") {
      return "opacity-100 translate-y-0 translate-x-0 scale-100";
    }
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-8";
      case "fade-down":
        return "opacity-0 -translate-y-8";
      case "fade-left":
        return "opacity-0 translate-x-8";
      case "fade-right":
        return "opacity-0 -translate-x-8";
      case "scale":
        return "opacity-0 scale-95";
      case "none":
        return "";
      default:
        return "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
