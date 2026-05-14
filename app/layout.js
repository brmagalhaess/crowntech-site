import "./globals.css";

export const metadata = {
  title: "Crowntech | Soluções em Tecnologia e Inovação",
  description:
    "A Crowntech oferece soluções corporativas em TI: câmeras de segurança, cabeamento estruturado, modernização de hotelaria, desenvolvimento de software e produtos digitais.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
