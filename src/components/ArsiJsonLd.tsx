export function ArsiJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Arsi Technology Group LLC",
    url: "https://arsitechgroup.com",
    email: "arsitechgroup@gmail.com",
    description:
      "IT services, HIPAA compliance consulting, and managed website services for small businesses and healthcare providers in Minnesota.",
    areaServed: { "@type": "State", name: "Minnesota" },
    serviceType: [
      "HIPAA Compliance Consulting",
      "Web Design",
      "IT Services",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
