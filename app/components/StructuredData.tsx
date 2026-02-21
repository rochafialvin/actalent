"use client";

import Script from "next/script";

interface StructuredDataProps {
  lang: "id" | "en";
}

export function StructuredData({ lang }: StructuredDataProps) {
  const isIndonesian = lang === "id";

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ACTALENT Solutions Partners",
    alternateName: "PT ACTALENT SOLUTIONS PARTNERS",
    url: "https://actalent.id",
    logo: {
      "@type": "ImageObject",
      url: "https://actalent.id/logo.png",
      width: 1200,
      height: 1200,
    },
    description: isIndonesian
      ? "Partner rekrutmen strategis untuk UMKM. Menghubungkan perusahaan dengan talenta profesional."
      : "Strategic recruitment partner for SMEs. Connecting companies with professional talent.",
    sameAs: [
      // Add social media URLs when available
      // "https://linkedin.com/company/actalent",
      // "https://facebook.com/actalent",
      // "https://instagram.com/actalent",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-3456-7890",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ACTALENT Solutions Partners",
    image: "https://actalent.id/logo.png",
    "@id": "https://actalent.id",
    url: "https://actalent.id",
    telephone: "+62-812-3456-7890",
    email: "actalentsolutionspartners@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl Cilenggang II",
      addressLocality: "Serpong",
      addressRegion: "Banten",
      postalCode: "15310",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.301912,
      longitude: 106.654646,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isIndonesian ? "Layanan Rekrutmen" : "Recruitment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isIndonesian ? "Headhunter Services" : "Headhunter Services",
            description: isIndonesian
              ? "Pencarian eksekutif dan talenta senior"
              : "Executive search and senior talent acquisition",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isIndonesian ? "Executive Search" : "Executive Search",
            description: isIndonesian
              ? "Rekrutmen untuk posisi manajerial dan direksi"
              : "Recruitment for managerial and director positions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isIndonesian ? "Rekrutmen Umum" : "General Recruitment",
            description: isIndonesian
              ? "Rekrutmen untuk posisi staff dan supervisor"
              : "Recruitment for staff and supervisor positions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isIndonesian ? "Mass Hiring" : "Mass Hiring",
            description: isIndonesian
              ? "Rekrutmen massal untuk kebutuhan besar"
              : "Mass recruitment for large-scale needs",
          },
        },
      ],
    },
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ACTALENT Solutions Partners",
    url: "https://actalent.id",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://actalent.id/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: isIndonesian ? "id" : "en",
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isIndonesian ? "Beranda" : "Home",
        item: `https://actalent.id/${lang}/`,
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
