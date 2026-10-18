import localFont from "next/font/local";
import "./globals.css";
// Estilos do painel interno (/admin), escopados em .admin-layout para não vazar no site.
import "./admin-legacy.css";
import { SITE_DESCRIPTION, SITE_URL } from "./_lib/site";
import { DEFAULT_TITLE, openGraphBase } from "./_lib/seo";

// Fonte de títulos auto-hospedada (Bricolage Grotesque, SIL OFL 1.1; ver app/fonts).
// O texto corrido usa a fonte do sistema: nenhuma requisição a serviços externos.
const display = localFont({
  src: "./fonts/BricolageGrotesque-latin-wght.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-display",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | CrownTech" },
  description: SITE_DESCRIPTION,
  applicationName: "CrownTech",
  openGraph: openGraphBase,
  twitter: { card: "summary_large_image", title: DEFAULT_TITLE, description: SITE_DESCRIPTION },
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1115" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={display.variable}>
      <body>{children}</body>
    </html>
  );
}
