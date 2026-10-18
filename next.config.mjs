/** @type {import('next').NextConfig} */
const nextConfig = {
  // Servidor mínimo em .next/standalone (usado pelo Dockerfile multi-stage).
  output: "standalone",
  poweredByHeader: false,
  // Um único endereço oficial: crowntech.com.br → www.crowntech.com.br.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "crowntech.com.br" }],
        destination: "https://www.crowntech.com.br/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
