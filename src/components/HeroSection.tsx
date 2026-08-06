import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-off-white pt-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-bold text-primary leading-[1.1] mb-6 text-4xl md:text-5xl lg:text-6xl">
            Making expensive tech services affordable for small businesses.
          </h1>

          <p className="text-lg md:text-xl text-text-dark mb-10 leading-relaxed">
            We build and manage technology for small businesses and healthcare providers across Minnesota — websites, business IT, and HIPAA compliance. Three services. One person who knows your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              See What We Do
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary/40 text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/5 transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
