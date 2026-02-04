import { Metadata } from "next";
import { AcademicCapIcon, CodeBracketIcon, MapPinIcon } from "@heroicons/react/24/solid";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { ABOUT_VALUES, CORE_VALUES, FOUNDER_EDUCATION, FOUNDER_SKILLS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Moyata Ebisso | Arsi Technology Group",
  description: "Meet Moyata Ebisso, M.S. Engineering graduate and founder of Arsi Technology Group. Minnesota-based technology consulting with deep expertise in software development, embedded systems, and IT infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      {/* Why "Arsi" */}
      <section className="pt-32 pb-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Why &quot;Arsi&quot;?</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The name &quot;Arsi&quot; comes from the Arsi region of Oromia — a nod to my heritage and the values of community, trust, and dedication that I bring to every client relationship.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Just as the Arsi region is known for its resilience and strength, Arsi Technology Group is built to be your steadfast technology partner here in Minnesota and beyond.
            </p>
            <p className="text-gray-400 mt-6 italic text-lg">Fluent in Afan Oromo (the Oromo people&apos;s language)</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-off-white via-accent/5 to-success/5 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-highlight/10 rounded-full blur-3xl animate-float delay-200" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Mission & Vision</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-accent/10 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-text-light leading-relaxed">{COMPANY.mission}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-accent/10 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-text-light leading-relaxed">{COMPANY.vision}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-cyan/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Our Core Values</h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((value, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-gradient-to-br from-off-white via-accent/5 to-success/5 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-highlight/10 rounded-full blur-3xl animate-float-slow delay-200" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">What We Deliver</h2>
            <p className="text-text-light text-center mb-12 max-w-2xl mx-auto">What you can expect when working with us</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_VALUES.map((value, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-accent/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-text-light">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Minnesota Focus */}
      <section className="py-16 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary to-cyan/20 opacity-95" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection animation="fade-up">
            <MapPinIcon className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Proudly Serving Minnesota Businesses</h2>
            <p className="text-gray-300 text-lg">
              Based in the Twin Cities, we understand the unique needs of Minnesota businesses. From Minneapolis and St. Paul to Rochester and Duluth, we provide technology solutions tailored to local companies while also serving clients nationwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 bg-cyan/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow delay-200" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-3 mb-12">
              <AcademicCapIcon className="w-10 h-10 text-accent" />
              <h2 className="text-3xl font-bold text-white text-center">Education</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {FOUNDER_EDUCATION.map((edu, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-accent font-semibold text-sm mb-2">{edu.date}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-200 font-medium">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                  {edu.gpa && (
                    <div className="mt-3 inline-block px-3 py-1 bg-accent/20 rounded-full text-accent text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.focus && (
                    <p className="mt-2 text-gray-300 text-sm">Focus: {edu.focus}</p>
                  )}
                  {edu.minor && (
                    <p className="mt-2 text-gray-300 text-sm">Minor: {edu.minor}</p>
                  )}
                  {edu.courses && (
                    <p className="mt-2 text-gray-400 text-sm">{edu.courses}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <MapPinIcon className="w-4 h-4 mr-2" />
                <span className="font-medium">Minnesota-Based</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Meet the Founder
              </h1>
              <p className="text-xl text-gray-300">
                M.S. Engineering Graduate | Power Systems Engineer | Technology Consultant
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan/10 rounded-full blur-2xl animate-float-fast" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <AnimatedSection animation="fade-right">
              <div className="bg-gradient-to-br from-accent via-accent-dark to-cyan rounded-2xl p-8 aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden shadow-2xl shadow-accent/20">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                {/* Animated blobs */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-blob" />
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-blob delay-300" />
                <div className="text-center relative z-10">
                  <div className="w-40 h-40 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center border-4 border-white/20 animate-pulse-glow">
                    <span className="text-6xl font-bold text-white">ME</span>
                  </div>
                  <p className="text-white font-semibold text-xl">Moyata Ebisso</p>
                  <p className="text-white/70 text-sm">M.S. Electrical & Computer Engineering</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div>
                <span className="inline-block text-accent font-medium mb-2">Founder & Lead Engineer</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Hi, I&apos;m Moyata Ebisso
                </h2>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-highlight/20 text-highlight font-semibold mb-6">
                  <AcademicCapIcon className="w-5 h-5 mr-2" />
                  M.S. in Electrical & Computer Engineering (Dec. 2025)
                </div>

                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    I graduated in <strong className="text-white">December 2025</strong> with my Master&apos;s degree in Electrical & Computer Engineering from the <strong className="text-white">University of St. Thomas</strong> in Minnesota, focusing on <strong className="text-white">Embedded Intelligent Systems</strong>. I also hold a Bachelor&apos;s degree in Computer Science from the <strong className="text-white">University of Minnesota Twin Cities</strong>.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Currently, I work as a <strong className="text-white">Power Substation Communication Engineer at Hatch (Canada)</strong> as a Professional Consultant, working on Xcel Energy utility projects. This combines my engineering expertise with real-world infrastructure experience.
                  </p>

                  <p className="text-lg leading-relaxed">
                    I founded Arsi Technology Group to help Minnesota businesses navigate the complex world of technology. With experience at companies like <strong className="text-white">Xcel Energy</strong>, <strong className="text-white">Optum/United Health Group</strong>, and various tech startups, I bring enterprise-level expertise to businesses of all sizes.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white/10 text-gray-200 rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary to-cyan/20 opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan/10 rounded-full blur-3xl animate-float-slow delay-200" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-3 mb-12">
              <CodeBracketIcon className="w-10 h-10 text-highlight" />
              <h2 className="text-3xl font-bold text-white text-center">Technical Skills</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-colors h-full">
                <h3 className="text-lg font-semibold text-highlight mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_SKILLS.languages.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-colors h-full">
                <h3 className="text-lg font-semibold text-highlight mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_SKILLS.tools.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-colors h-full">
                <h3 className="text-lg font-semibold text-highlight mb-4">ML/AI Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_SKILLS.mlAi.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-colors h-full">
                <h3 className="text-lg font-semibold text-highlight mb-4">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_SKILLS.coursework.slice(0, 6).map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Let's Build Something Great Together"
        subtext="Ready to work with an engineer who understands your technology challenges?"
        buttonText="Contact Me"
      />
    </>
  );
}
