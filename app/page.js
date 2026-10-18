// Página inicial: Server Component estático. O único JavaScript de página é o formulário
// de contato (ContactForm); todo o resto chega pronto no HTML.
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import ContactForm from "./_components/ContactForm";
import TelegramPreview from "./_components/TelegramPreview";
import Icon from "./_components/Icon";
import {
  ALL_PRODUCTS,
  COMPANY,
  CONTACT_TOPICS,
  FEATURED_PRODUCT,
  SERVICES,
  SITE_DESCRIPTION,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "./_lib/site";
import { openGraphBase } from "./_lib/seo";

export const metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...openGraphBase, url: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  taxID: COMPANY.cnpj,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  email: COMPANY.email,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.state,
    addressCountry: "BR",
  },
};

function StatusPill({ status, label }) {
  if (!label) return null;
  return <span className={`pill pill-${status}`}>{label}</span>;
}

function HeroDrawing() {
  // Desenho técnico da coroa da marca: decorativo.
  return (
    <svg className="hero-drawing" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <g className="guides">
        <line x1="4" y1="22" x2="96" y2="22" />
        <line x1="4" y1="38" x2="96" y2="38" />
        <line x1="4" y1="62" x2="96" y2="62" />
        <line x1="4" y1="73" x2="96" y2="73" />
        <line x1="20" y1="8" x2="20" y2="88" />
        <line x1="50" y1="8" x2="50" y2="88" />
        <line x1="80" y1="8" x2="80" y2="88" />
        <circle cx="20" cy="38" r="9" />
        <circle cx="50" cy="22" r="9" />
        <circle cx="80" cy="38" r="9" />
      </g>
      <path className="outline" d="M20 62 V38 L34 52 L42 38 L50 22 L58 38 L66 52 L80 38 V62 Z" />
      <rect className="outline" x="20" y="62" width="60" height="11" rx="3" />
      <circle className="dot" cx="20" cy="38" r="5" />
      <circle className="dot" cx="50" cy="22" r="5" />
      <circle className="dot" cx="80" cy="38" r="5" />
    </svg>
  );
}

export default function Home() {
  const p = FEATURED_PRODUCT;
  const mailtoVaga = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    "CrownTech Marketing: quero uma das primeiras vagas"
  )}`;

  return (
    <>
      <SiteHeader />

      <main id="conteudo">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Software house · {COMPANY.city}/{COMPANY.state}
              </p>
              <h1 id="hero-title">Produtos digitais próprios e tecnologia sob medida.</h1>
              <p className="lead">
                A CrownTech é uma empresa brasileira de tecnologia. Criamos e mantemos produtos como o
                CrownTech Marketing, o Menuri e o Toma a Lista!, e desenvolvemos software, redes e
                infraestrutura de TI para empresas.
              </p>
              <div className="actions">
                <a className="button button-primary" href="#produtos">
                  Ver os produtos
                </a>
                <a className="button button-ghost" href="#contato">
                  Falar com a gente
                </a>
              </div>
            </div>
            <HeroDrawing />
          </div>

          <div className="wrap">
            <nav className="product-index" aria-label="Produtos CrownTech">
              <span className="product-index-label">Produtos</span>
              <ul>
                {ALL_PRODUCTS.map((item) => (
                  <li key={item.id}>
                    <a href={`#p-${item.id}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Lançamento: CrownTech Marketing */}
        <section className="section spotlight" id="lancamento" aria-labelledby="lancamento-title">
          <div className="wrap spotlight-grid">
            <div className="spotlight-copy">
              <p className="eyebrow eyebrow-status">
                <StatusPill status={p.status} label={p.statusLabel} /> Novo produto
              </p>
              <h2 id="lancamento-title">{p.name}</h2>
              <p className="spotlight-tagline">Suas redes no automático. Você decide pelo Telegram.</p>
              <p>{p.summary}</p>
              <ul className="checklist">
                {p.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="price">
                <strong>{p.price}</strong>
              </p>
              <p className="muted small">{p.note}</p>
              <div className="actions">
                <a className="button button-primary" href={p.url}>
                  Conhecer o CrownTech Marketing
                  <Icon name="arrow" size={18} />
                </a>
                <a className="button button-ghost" href={mailtoVaga}>
                  Pedir uma vaga por e-mail
                </a>
              </div>
            </div>
            <TelegramPreview />
          </div>
        </section>

        {/* Produtos */}
        <section className="section section-alt" id="produtos" aria-labelledby="produtos-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Produtos</p>
              <h2 id="produtos-title">Produtos que criamos e mantemos</h2>
              <p>
                Cada produto tem o próprio site, com planos, termos e política de privacidade. O status ao
                lado do nome mostra em que fase ele está hoje.
              </p>
            </div>

            <ul className="product-grid">
              {ALL_PRODUCTS.map((item) => (
                <li key={item.id} id={`p-${item.id}`} className="card">
                  <div className="card-top">
                    <span className="card-category">{item.category}</span>
                    <StatusPill status={item.status} label={item.statusLabel} />
                  </div>
                  <h3 className="card-title">
                    <a className="card-link" href={item.url}>
                      {item.name}
                    </a>
                  </h3>
                  <p className="card-text">{item.cardSummary ?? item.summary}</p>
                  {(item.cardPoints ?? item.points).length > 0 ? (
                    <ul className="card-points">
                      {(item.cardPoints ?? item.points).map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="card-domain" aria-hidden="true">
                    {item.domain}
                    <Icon name="arrow" size={16} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Serviços */}
        <section className="section" id="servicos" aria-labelledby="servicos-title">
          <div className="wrap split">
            <div className="section-head">
              <p className="eyebrow">Serviços</p>
              <h2 id="servicos-title">Tecnologia sob medida para empresas</h2>
              <p>
                Quando um produto pronto não resolve, desenvolvemos o sistema ou montamos a infraestrutura
                que a sua operação precisa.
              </p>
              <a className="button button-ghost" href="#contato">
                Pedir uma proposta
              </a>
            </div>
            <ol className="service-list">
              {SERVICES.map((service, index) => (
                <li key={service.id} className="service">
                  <span className="service-icon">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <div>
                    <h3>
                      <span className="service-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      {service.title}
                    </h3>
                    <p>{service.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Sobre */}
        <section className="section section-alt" id="sobre" aria-labelledby="sobre-title">
          <div className="wrap split">
            <div className="section-head">
              <p className="eyebrow">Sobre</p>
              <h2 id="sobre-title">Quem somos</h2>
              <p>
                A {COMPANY.legalName} é uma empresa brasileira de tecnologia com sede em {COMPANY.city}/
                {COMPANY.state}. Criamos e mantemos produtos digitais próprios, incluindo jogos para celular
                com a marca CrownTech Games, e atendemos empresas com software e infraestrutura de TI sob
                medida.
              </p>
            </div>
            <dl className="facts">
              <div>
                <dt>Razão social</dt>
                <dd>{COMPANY.legalName}</dd>
              </div>
              <div>
                <dt>CNPJ</dt>
                <dd>{COMPANY.cnpj}</dd>
              </div>
              <div>
                <dt>Sede</dt>
                <dd>
                  {COMPANY.city}/{COMPANY.state}
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Contato */}
        <section className="section" id="contato" aria-labelledby="contato-title">
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contato</p>
              <h2 id="contato-title">Fale com a gente</h2>
              <p>
                Conte o que você precisa. Respondemos por e-mail com as dúvidas que tivermos ou com uma
                proposta de escopo, prazo e valor.
              </p>
              <a className="contact-email" href={`mailto:${COMPANY.email}`}>
                <Icon name="mail" size={22} />
                {COMPANY.email}
              </a>
              {WHATSAPP_NUMBER ? (
                <a className="contact-email" href={`https://wa.me/${WHATSAPP_NUMBER}`}>
                  <Icon name="chat" size={22} />
                  WhatsApp
                </a>
              ) : null}
              <p className="muted small">
                Pedidos sobre dados pessoais (LGPD) também vão para esse e-mail. Saiba mais na{" "}
                <a href="/privacidade">Política de Privacidade</a>.
              </p>
            </div>
            <ContactForm email={COMPANY.email} whatsapp={WHATSAPP_NUMBER} topics={CONTACT_TOPICS} />
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
