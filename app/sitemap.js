import { SITE_URL } from "./_lib/site";

// Datas da última mudança de conteúdo de cada página (atualize ao editar).
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-10-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
