import { NextResponse } from "next/server";

// Área administrativa protegida (o painel interno não pode ficar público).
// Login por Basic Auth com ADMIN_USER / ADMIN_PASSWORD (variáveis de ambiente do Dokploy).
// Sem senha configurada, a área simplesmente não existe (404).
export function proxy(request) {
  const user = process.env.ADMIN_USER || "admin";
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return new NextResponse("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex" } });
  }
  const header = request.headers.get("authorization") || "";
  const [scheme, encoded] = header.split(" ");
  if (scheme === "Basic" && encoded) {
    const [u, ...rest] = atob(encoded).split(":");
    if (u === user && rest.join(":") === password) {
      const res = NextResponse.next();
      res.headers.set("X-Robots-Tag", "noindex, nofollow");
      return res;
    }
  }
  return new NextResponse("Autenticação necessária", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="CrownTech Admin"', "X-Robots-Tag": "noindex" },
  });
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
