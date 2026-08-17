import "./globals.css";

export const metadata = {
  title: "CrownTech | Ecossistema de Software, SaaS & Infraestrutura Corporativa",
  description:
    "A CrownTech é uma empresa de tecnologia especializada em produtos SaaS proprietários (Toma A Lista, MyCartão, MyProjectUp, ConformaGov, OrganizeUp, Menuri), engenharia de software sob medida e infraestrutura de TI corporativa com garantia por contrato.",
  keywords: [
    "CrownTech",
    "SaaS Brasil",
    "Desenvolvimento de Software",
    "ConformaGov",
    "OrganizeUp",
    "MyProjectUp",
    "Menuri",
    "Toma A Lista",
    "MyCartão",
    "Cabeamento Estruturado",
    "CFTV Inteligente",
    "Wi-Fi Hotelaria"
  ],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
