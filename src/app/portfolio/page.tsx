import { Metadata } from "next";
import {
  ArrowTopRightOnSquareIcon,
  HeartIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  CheckBadgeIcon,
  UsersIcon,
  Squares2X2Icon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { PORTFOLIO, type PortfolioCategory } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Our Work | Arsi Technology Group",
  description:
    "See how we've helped Minnesota businesses build, secure, and scale their technology. View our client success stories and portfolio.",
};

const CATEGORY_ICONS: Record<PortfolioCategory, typeof HeartIcon> = {
  Healthcare: HeartIcon,
  Restaurant: BuildingStorefrontIcon,
  Transportation: TruckIcon,
  Community: UsersIcon,
  Platform: Squares2X2Icon,
  Fashion: ShoppingBagIcon,
};

// Preserve display order: featured first, everything else in file order.
const clients = PORTFOLIO.filter((p) => p.showOn.includes("portfolio")).sort(
  (a, b) => Number(b.featured) - Number(a.featured)
);

const industries = Array.from(
  new Set(clients.map((c) => c.industry ?? c.category))
);

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <CheckBadgeIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                <span className="font-medium">Client Success Stories</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Work
              </h1>
              <p className="text-xl text-gray-300">
                We&apos;ve helped Minnesota businesses build, secure, and scale their technology
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {clients.map((client, index) => {
              const Icon = CATEGORY_ICONS[client.category];
              return (
                <AnimatedSection key={client.slug} animation="fade-up" delay={index * 150}>
                  <div
                    className={`rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2 ${
                      client.featured
                        ? "bg-gradient-to-br from-accent via-accent-dark to-cyan text-white shadow-xl shadow-accent/20"
                        : "bg-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/50"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                            client.featured ? "bg-white/20" : "bg-accent/20"
                          }`}
                        >
                          <Icon
                            className={`w-7 h-7 ${client.featured ? "text-white" : "text-accent"}`}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{client.name}</h3>
                          <span
                            className={`text-sm font-medium ${
                              client.featured ? "text-white/80" : "text-accent"
                            }`}
                          >
                            {client.industry ?? client.category}
                          </span>
                        </div>
                      </div>
                      {client.featured && (
                        <span className="inline-block bg-highlight text-primary px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Project Type */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                        client.featured ? "bg-white/20 text-white" : "bg-white/10 text-gray-200"
                      }`}
                    >
                      {client.projectType}
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-6 leading-relaxed ${
                        client.featured ? "text-white/90" : "text-gray-300"
                      }`}
                    >
                      {client.description}
                    </p>

                    {/* Services */}
                    <div className="mb-6">
                      <p
                        className={`text-sm font-medium mb-3 ${
                          client.featured ? "text-white/70" : "text-gray-400"
                        }`}
                      >
                        Services Provided:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {client.services.map((service) => (
                          <span
                            key={service}
                            className={`px-3 py-1 rounded-full text-sm ${
                              client.featured ? "bg-white/10 text-white" : "bg-white/10 text-gray-200"
                            }`}
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-semibold transition-colors ${
                        client.featured
                          ? "text-white hover:text-highlight"
                          : "text-accent hover:text-cyan"
                      }`}
                      aria-label={`View ${client.name} (opens in a new tab)`}
                    >
                      View Live Site
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" aria-hidden="true" />
                    </a>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">{clients.length}+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-gray-300">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">1+</div>
                <div className="text-gray-300">Years in Business</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">MN</div>
                <div className="text-gray-300">Based & Nationwide</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 bg-cyan/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow delay-200" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                From healthcare to transportation, we bring technology solutions to diverse industries
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 font-medium border border-white/10 hover:border-accent/50 transition-colors"
                >
                  {industry}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Be Our Next Success Story?"
        subtext="Let's discuss how we can help your business grow with the right technology solutions."
        buttonText="Start Your Project"
      />
    </>
  );
}
