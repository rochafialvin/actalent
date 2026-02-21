import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://actalent.id";
  const locales = ["id", "en"];

  // Generate sitemap entries for both languages
  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Homepage
    routes.push({
      url: `${baseUrl}/${locale}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          id: `${baseUrl}/id/`,
          en: `${baseUrl}/en/`,
        },
      },
    });
  });

  return routes;
}
