import CrownMark from "./CrownMark";

const NAV = [
  { href: "/#produtos", label: "Produtos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export default function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="/" className="brand">
            <CrownMark size={30} />
            <span className="brand-word">
              Crown<span>Tech</span>
            </span>
          </a>
          <nav aria-label="Principal">
            <ul className="nav-list">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
