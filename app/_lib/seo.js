import { SITE_DESCRIPTION } from "./site";

export const DEFAULT_TITLE = "CrownTech · Produtos digitais e tecnologia sob medida";

// Base do Open Graph. Quem sobrescreve `openGraph` numa página precisa repetir estes campos,
// porque o Next.js substitui o objeto inteiro (não faz merge profundo).
export const openGraphBase = {
  type: "website",
  locale: "pt_BR",
  siteName: "CrownTech",
  title: DEFAULT_TITLE,
  description: SITE_DESCRIPTION,
};
