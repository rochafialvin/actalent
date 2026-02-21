import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import VisionMission from "../sections/VisionMission";
import Values from "../sections/Values";
import Services from "../sections/Services";
import Advantages from "../sections/Advantages";
import Industries from "../sections/Industries";
import Workflow from "../sections/Workflow";
import SLA from "../sections/SLA";
import Team from "../sections/Team";
import Clients from "../sections/Clients";
import Contact from "../sections/Contact";
import { StructuredData } from "../components/StructuredData";

// Define supported locales
const locales = ["id", "en"] as const;
type Locale = (typeof locales)[number];

interface PageProps {
  params: {
    lang: string;
  };
}

// Generate metadata for each language
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = params;
  
  if (!locales.includes(lang as Locale)) {
    return {};
  }

  const isIndonesian = lang === "id";

  return {
    title: isIndonesian 
      ? "ACTALENT Solutions Partners | Partner Rekrutmen Strategis"
      : "ACTALENT Solutions Partners | Strategic Recruitment Partner",
    description: isIndonesian
      ? "PT ACTALENT SOLUTIONS PARTNERS - Partner rekrutmen strategis untuk UMKM. Menghubungkan perusahaan dengan talenta profesional melalui proses cepat, fleksibel, dan terukur. Headhunter, Executive Search, Rekrutmen Umum, Mass Hiring."
      : "PT ACTALENT SOLUTIONS PARTNERS - Strategic recruitment partner for SMEs. Connecting companies with professional talent through fast, flexible, and measurable processes. Headhunter, Executive Search, General Recruitment, Mass Hiring.",
    keywords: isIndonesian
      ? "rekrutmen, headhunter, executive search, talent acquisition, solusi HR, Indonesia, UMKM, rekrutmen SME, jasa headhunter, pencarian eksekutif"
      : "recruitment, headhunter, executive search, talent acquisition, HR solutions, Indonesia, SME recruitment, headhunting services, executive recruitment",
    authors: [{ name: "ACTALENT Solutions Partners" }],
    alternates: {
      canonical: `https://actalent.id/${lang}/`,
      languages: {
        "id-ID": "https://actalent.id/id/",
        "en-US": "https://actalent.id/en/",
      },
    },
    openGraph: {
      title: isIndonesian
        ? "ACTALENT Solutions Partners | Partner Rekrutmen Strategis"
        : "ACTALENT Solutions Partners | Strategic Recruitment Partner",
      description: isIndonesian
        ? "Partner rekrutmen strategis untuk UMKM. 100+ recruiter profesional di seluruh Indonesia."
        : "Strategic recruitment partner for SMEs. 100+ professional recruiters nationwide.",
      type: "website",
      locale: isIndonesian ? "id_ID" : "en_US",
      url: `https://actalent.id/${lang}/`,
      siteName: "ACTALENT Solutions Partners",
    },
    twitter: {
      card: "summary_large_image",
      title: isIndonesian
        ? "ACTALENT Solutions Partners | Partner Rekrutmen Strategis"
        : "ACTALENT Solutions Partners | Strategic Recruitment Partner",
      description: isIndonesian
        ? "Partner rekrutmen strategis untuk UMKM. 100+ recruiter profesional di seluruh Indonesia."
        : "Strategic recruitment partner for SMEs. 100+ professional recruiters nationwide.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE", // Replace with actual code
    },
  };
}

// Generate static params for both languages
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function HomePage({ params }: PageProps) {
  const { lang } = params;

  // Validate locale
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <>
      <StructuredData lang={lang as Locale} />
      <main className="min-h-screen">
        <Navigation language={lang as Locale} />
        
        <Hero language={lang as Locale} />
        <About language={lang as Locale} />
        <VisionMission language={lang as Locale} />
        <Values language={lang as Locale} />
        <Services language={lang as Locale} />
        <Advantages language={lang as Locale} />
        <Industries language={lang as Locale} />
        <Workflow language={lang as Locale} />
        <SLA language={lang as Locale} />
        <Team language={lang as Locale} />
        <Clients language={lang as Locale} />
        <Contact language={lang as Locale} />
        
        <Footer language={lang as Locale} />
      </main>
    </>
  );
}
