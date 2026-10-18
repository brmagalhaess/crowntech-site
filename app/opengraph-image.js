import { ImageResponse } from "next/og";

// Imagem de compartilhamento (Open Graph), gerada no build como PNG estático.
export const alt = "CrownTech: produtos digitais e tecnologia sob medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f6f5f1",
          color: "#16181d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="20" fill="#1D4ED8" />
            <rect x="20" y="62" width="60" height="11" rx="3" fill="#fff" />
            <polygon points="20,62 20,38 34,52 42,38" fill="#fff" />
            <polygon points="42,38 50,22 58,38 42,38" fill="#fff" />
            <polygon points="58,38 66,52 80,38 80,62" fill="#fff" />
            <circle cx="20" cy="38" r="5" fill="#F59E0B" />
            <circle cx="50" cy="22" r="5" fill="#F59E0B" />
            <circle cx="80" cy="38" r="5" fill="#F59E0B" />
          </svg>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
            <span>Crown</span>
            <span style={{ color: "#1D4ED8" }}>Tech</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Produtos digitais próprios e tecnologia sob medida.
          </div>
          <div style={{ fontSize: 30, color: "#4a4f5a" }}>
            CROWN TECH LTDA · Maricá/RJ · www.crowntech.com.br
          </div>
        </div>
      </div>
    ),
    size
  );
}
