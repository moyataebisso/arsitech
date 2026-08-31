"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import type { PortfolioItem } from "@/lib/portfolio";
import { PORTFOLIO } from "@/lib/portfolio";
import AnimatedSection from "./AnimatedSection";

function initialsFor(name: string): string {
  const words = name
    .replace(/[^\p{L}\p{N} ]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "??";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(media.matches);
    const listener = (event: MediaQueryListEvent) => setPrefers(event.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);
  return prefers;
}

type Props = {
  items?: PortfolioItem[];
};

// Only render entries with documented consent to display publicly.
const HOME_ITEMS = PORTFOLIO.filter(
  (p) => p.consent && p.showOn.includes("home")
);

export default function WorkCarousel({ items = HOME_ITEMS }: Props) {
  const reducedMotion = usePrefersReducedMotion();

  const plugins = useMemo(
    () =>
      reducedMotion
        ? []
        : [
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    [reducedMotion]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    plugins
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      id="portfolio"
      className="py-20 bg-primary bg-grid-pattern relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Websites we&apos;ve built and systems we run
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real businesses in Minnesota. Live and running today.
          </p>
        </AnimatedSection>

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client work"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={item.name}
                >
                  <article className="h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                    {item.image && (
                      <div className="relative w-full aspect-[16/10] bg-secondary">
                        <Image
                          src={item.image}
                          alt={`Screenshot of ${item.name} website`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Brand strip — logo when available, initials fallback */}
                    <div className="w-full h-24 flex items-center justify-center px-6 py-4 bg-white/5 border-b border-white/10">
                      {item.logo ? (
                        <div className="relative h-12 w-full">
                          <Image
                            src={item.logo}
                            alt={`${item.name} logo`}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="text-3xl font-bold text-accent/70 tracking-wider"
                        >
                          {initialsFor(item.name)}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-300 mb-4">
                        {item.blurb}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.services.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/25"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5">
                        <MapPinIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{item.location}</span>
                      </div>

                      <div className="mt-auto">
                        {item.url.startsWith("/") ? (
                          <Link
                            href={item.url}
                            className="inline-flex items-center gap-2 text-accent hover:text-cyan font-semibold text-sm transition-colors"
                          >
                            View Site
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                          </Link>
                        ) : (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent hover:text-cyan font-semibold text-sm transition-colors"
                            aria-label={`View ${item.name} (opens in a new tab)`}
                          >
                            View Site
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 rounded-full bg-accent/25 hover:bg-accent focus-visible:bg-accent flex items-center justify-center transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-5 h-5 text-white" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 rounded-full bg-accent/25 hover:bg-accent focus-visible:bg-accent flex items-center justify-center transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-5 h-5 text-white" aria-hidden="true" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === selectedIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "bg-accent w-6" : "bg-white/30 hover:bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
