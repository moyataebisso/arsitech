"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, MapPinIcon, CheckCircleIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  "Hands-on experience with real client projects",
  "Mentorship from experienced engineers",
  "Flexible remote/hybrid work options",
  "Exposure to diverse technologies",
  "Potential for full-time conversion",
  "Minnesota-based with nationwide projects",
];

const positions = [
  {
    title: "Software Development Intern",
    description: "Build web applications, APIs, and automation tools for our clients",
    skills: ["JavaScript/TypeScript", "React/Next.js", "Node.js", "SQL"],
  },
  {
    title: "IT Consulting Intern",
    description: "Help businesses with Microsoft 365, cloud infrastructure, and IT support",
    skills: ["Microsoft 365", "Azure/AWS", "Networking", "Help Desk"],
  },
  {
    title: "Cybersecurity Intern",
    description: "Assist with security assessments, compliance audits, and HIPAA implementations",
    skills: ["Security fundamentals", "Compliance", "Risk assessment", "Documentation"],
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  school: string;
  major: string;
  graduationDate: string;
  position: string;
  experience: string;
  skills: string;
  whyInterested: string;
  availability: string;
  linkedIn: string;
  portfolio: string;
}

export default function CareersPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    major: "",
    graduationDate: "",
    position: "",
    experience: "",
    skills: "",
    whyInterested: "",
    availability: "",
    linkedIn: "",
    portfolio: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit application");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "",
        major: "",
        graduationDate: "",
        position: "",
        experience: "",
        skills: "",
        whyInterested: "",
        availability: "",
        linkedIn: "",
        portfolio: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors";
  const selectClasses = "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors [&>option]:bg-primary [&>option]:text-white";
  const labelClasses = "block text-sm font-medium text-gray-200 mb-2";

  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-highlight/20 text-highlight mb-6">
                <RocketLaunchIcon className="w-4 h-4 mr-2" />
                <span className="font-medium">Join Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Internship Opportunities
              </h1>
              <p className="text-xl text-gray-300">
                Launch your tech career with hands-on experience at a growing Minnesota consulting firm
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Intern With Us */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <span className="inline-block text-accent font-medium mb-2">Why Intern With Us?</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Real Experience, Real Impact
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  At Arsi Technology Group, interns work directly on client projects alongside our engineering team. You&apos;ll gain practical skills, build your portfolio, and make a real difference for Minnesota businesses.
                </p>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start group">
                      <CheckCircleIcon className="w-6 h-6 text-accent mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-200 group-hover:text-white transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-gradient-to-br from-accent via-accent-dark to-cyan rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-blob" />
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-blob delay-300" />

                <div className="relative z-10 text-center">
                  <AcademicCapIcon className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Students Welcome</h3>
                  <p className="text-white/80 mb-4">
                    We work with students from University of Minnesota, St. Thomas, and other Minnesota schools
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/70">
                    <MapPinIcon className="w-5 h-5" />
                    <span>Minnesota-Based</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 bg-highlight/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-slow delay-200" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-3 mb-12">
              <BriefcaseIcon className="w-10 h-10 text-accent" />
              <h2 className="text-3xl font-bold text-white text-center">Open Positions</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <CodeBracketIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-primary bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-95" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Apply Now</h2>
              <p className="text-gray-300">
                Fill out the form below and we&apos;ll get back to you within 1-2 weeks
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            {status === "success" ? (
              <div className="bg-success/20 border border-success rounded-2xl p-8 text-center">
                <svg
                  className="h-16 w-16 text-success mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-300 mb-6">
                  Thanks for applying! We&apos;ve sent a confirmation to your email. We&apos;ll review your application and reach out if there&apos;s a fit.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center text-accent hover:text-cyan font-medium transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className={labelClasses}>
                          First Name <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className={labelClasses}>
                          Last Name <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="you@school.edu"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="school" className={labelClasses}>
                          School/University <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="school"
                          name="school"
                          required
                          value={formData.school}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="University of Minnesota"
                        />
                      </div>
                      <div>
                        <label htmlFor="major" className={labelClasses}>
                          Major/Field of Study <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="major"
                          name="major"
                          required
                          value={formData.major}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Computer Science"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="graduationDate" className={labelClasses}>
                        Expected Graduation
                      </label>
                      <input
                        type="text"
                        id="graduationDate"
                        name="graduationDate"
                        value={formData.graduationDate}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="May 2026"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className={labelClasses}>
                        Position Interest
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className={selectClasses}
                      >
                        <option value="">Select position...</option>
                        <option value="Software Development">Software Development Intern</option>
                        <option value="IT Consulting">IT Consulting Intern</option>
                        <option value="Cybersecurity">Cybersecurity Intern</option>
                        <option value="General">Open to Any</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience & Skills */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Experience & Skills</h3>
                    <div>
                      <label htmlFor="experience" className={labelClasses}>
                        Prior Experience (internships, projects, jobs)
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        rows={3}
                        value={formData.experience}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                        placeholder="Briefly describe any relevant experience..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="skills" className={labelClasses}>
                      Technical Skills
                    </label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Python, JavaScript, React, SQL, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="whyInterested" className={labelClasses}>
                      Why are you interested in Arsi Technology Group? <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="whyInterested"
                      name="whyInterested"
                      rows={4}
                      required
                      value={formData.whyInterested}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us why you want to intern here and what you hope to learn..."
                    />
                  </div>

                  <div>
                    <label htmlFor="availability" className={labelClasses}>
                      Availability (hours per week, start date)
                    </label>
                    <input
                      type="text"
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="e.g., 20 hrs/week starting June 2025"
                    />
                  </div>

                  {/* Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Links (Optional)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="linkedIn" className={labelClasses}>
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          id="linkedIn"
                          name="linkedIn"
                          value={formData.linkedIn}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                      <div>
                        <label htmlFor="portfolio" className={labelClasses}>
                          Portfolio/GitHub
                        </label>
                        <input
                          type="url"
                          id="portfolio"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="https://github.com/..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="bg-error/20 border border-error rounded-lg p-4 text-error">
                      {errorMessage || "Something went wrong. Please try again or email us directly at arsitechgroup@gmail.com"}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent/30"
                  >
                    {status === "loading" ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
