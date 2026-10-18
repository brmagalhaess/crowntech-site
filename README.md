# crowntech-site

Site institucional da CrownTech (www.crowntech.com.br), da CROWN TECH LTDA, CNPJ 65.586.793/0001-18.
Next.js 16 (App Router) + React 19.

## Rodar

```bash
npm ci
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção (gera .next/standalone)
npm start          # servidor de produção com next start
```

Para testar o servidor standalone igual ao do Docker:

```bash
npm run build
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
PORT=3000 node .next/standalone/server.js
```

## Estrutura

- `app/page.js`: página inicial, Server Component estático (sem JavaScript de página, exceto o formulário).
- `app/_lib/site.js`: todo o conteúdo institucional (produtos, serviços, contato). Edite aqui.
- `app/_components/`: cabeçalho, rodapé, ícones e `ContactForm` (único componente cliente).
- `app/privacidade/page.js`: Política de Privacidade.
- `app/sitemap.js`, `app/robots.js`, `app/opengraph-image.js`: SEO.
- `app/fonts/`: fonte de títulos auto-hospedada (Bricolage Grotesque, SIL OFL 1.1). Nenhuma fonte externa.
- `app/admin-legacy.css`: estilos do painel interno `/admin`, escopados em `.admin-layout`.
- `proxy.js`: protege `/admin` com Basic Auth (`ADMIN_USER` / `ADMIN_PASSWORD`).
- `public/app-ads.txt`: arquivo do AdMob. Não alterar.

## Conteúdo honesto

O site já foi sinalizado pelo Google por padrões enganosos. Regras: só informações verdadeiras e
verificáveis; nada de números inventados, depoimentos, logos de clientes, contadores ou urgência.
A descrição e o status de cada produto devem seguir o que o site do próprio produto diz.

## Variáveis de ambiente

- `NEXT_PUBLIC_WHATSAPP_NUMBER` (build): só dígitos com DDI. Se vazio, o WhatsApp não aparece.
- `ADMIN_USER`, `ADMIN_PASSWORD` (execução): acesso a `/admin`. Sem senha, `/admin` responde 404.

## Deploy

`Dockerfile` multi-stage (deps → build → runner com só `.next/standalone`, `.next/static` e `public`,
usuário `node`, porta 3000, `node server.js`). Compose do Dokploy: `docker-compose.vps-imperio.yml`.
