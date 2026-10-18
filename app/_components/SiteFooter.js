import CrownMark from "./CrownMark";
import { ALL_PRODUCTS, COMPANY } from "../_lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a href="/" className="brand">
            <CrownMark size={28} />
            <span className="brand-word">
              Crown<span>Tech</span>
            </span>
          </a>
          <p>Produtos digitais próprios e tecnologia sob medida, de {COMPANY.city}/{COMPANY.state}.</p>
        </div>

        <nav aria-labelledby="footer-produtos">
          <h2 id="footer-produtos" className="footer-title">
            Produtos
          </h2>
          <ul className="footer-links">
            {ALL_PRODUCTS.map((p) => (
              <li key={p.id}>
                <a href={p.url}>{p.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-site">
          <h2 id="footer-site" className="footer-title">
            Site
          </h2>
          <ul className="footer-links">
            <li>
              <a href="/#servicos">Serviços</a>
            </li>
            <li>
              <a href="/#sobre">Sobre</a>
            </li>
            <li>
              <a href="/#contato">Contato</a>
            </li>
            <li>
              <a href="/privacidade">Política de Privacidade</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Empresa</h2>
          <address className="footer-address">
            {COMPANY.legalName}
            <br />
            CNPJ {COMPANY.cnpj}
            <br />
            {COMPANY.city}/{COMPANY.state}
            <br />
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </address>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {COMPANY.legalName} · CNPJ {COMPANY.cnpj}
        </p>
      </div>
    </footer>
  );
}
