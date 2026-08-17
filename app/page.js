"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// CrownTech Product Ecosystem Data
const PRODUCTS = [
  {
    id: "tomaalista",
    name: "Toma A Lista",
    category: "eventos",
    url: "https://tomaalista.com.br/",
    tag: "Eventos & Credenciamento",
    badge: "SaaS Ativo",
    badgeClass: "badge-live",
    desc: "Plataforma completa para gestão de eventos, listas VIP, credenciamento digital e controle de portaria em tempo real.",
    features: [
      "Check-in via QR Code e celular",
      "Listas VIP e confirmações automáticas",
      "Relatórios de presença e engajamento",
      "Multi-operadores em portas simultâneas"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <polyline points="9 14 11 16 15 11"></polyline>
      </svg>
    )
  },
  {
    id: "mycartao",
    name: "MyCartão",
    category: "gestao",
    url: "https://www.mycartao.com.br/app",
    tag: "Networking & Identity",
    badge: "SaaS Ativo",
    badgeClass: "badge-live",
    desc: "Cartão de visitas digital interativo com compartilhamento via Aproximação (NFC), QR Code e PIX integrado para profissionais e empresas.",
    features: [
      "Compartilhamento instantâneo via NFC/QR",
      "Links ilimitados e botão WhatsApp direto",
      "PIX para recebimentos na hora",
      "Catálogo de serviços no próprio perfil"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <line x1="2" y1="10" x2="22" y2="10"></line>
      </svg>
    )
  },
  {
    id: "myprojectup",
    name: "MyProjectUp",
    category: "gestao",
    url: "https://www.myprojectup.com.br/",
    tag: "Gestão Corporativa",
    badge: "SaaS Enterprise",
    badgeClass: "badge-gold",
    desc: "Sistema de alta produtividade para gestão de projetos corporativos, quadros Kanban, reporte de horas trabalhadas e alocação de equipes.",
    features: [
      "Quadros Kanban com colunas inteligentes",
      "Acompanhamento de horas e custos por projeto",
      "Relatórios de produtividade executiva",
      "Notificações e sinergia de equipes"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    )
  },
  {
    id: "conformagov",
    name: "ConformaGov",
    category: "gov",
    url: "https://www.conformagov.com.br/",
    tag: "Governança & Compliance",
    badge: "Gov Tech",
    badgeClass: "badge-primary",
    desc: "Plataforma de alta segurança para governança pública, conformidade com a Nova Lei de Licitações e auditoria de processos governamentais.",
    features: [
      "Adequação rigorosa a normas públicas",
      "Auditoria automatizada de processos",
      "Portal da transparência e relatórios legais",
      "Segurança de dados padrão militar/LGPD"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    )
  },
  {
    id: "organizeup",
    name: "OrganizeUp",
    category: "gestao",
    url: "https://organizeup.com.br/",
    tag: "Finanças PME",
    badge: "SaaS Ativo",
    badgeClass: "badge-live",
    desc: "Plataforma para gestão financeira empresarial, controle de fluxo de caixa, emissão de cobranças e inteligência de crescimento para PMEs.",
    features: [
      "Fluxo de caixa previsto vs. realizado",
      "DRE gerencial automático",
      "Gestão de contas a pagar e receber",
      "Dashboard com KPIs em tempo real"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    id: "menuri",
    name: "Menuri",
    category: "foodtech",
    url: "https://www.menuri.com.br/",
    tag: "FoodTech & Restaurantes",
    badge: "SaaS Ativo",
    badgeClass: "badge-live",
    desc: "Cardápio digital interativo e ecossistema de autoatendimento para restaurantes, bares e lanchonetes com gestão de pedidos no balcão e mesas.",
    features: [
      "Cardápio QR Code com imagens em alta definição",
      "Envio de pedidos para cozinha/WhatsApp",
      "Painel de controle em tempo real",
      "Atualização instantânea de produtos e preços"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  }
];

// Interactive Diagnostic Tool Options (No prices)
const DIAGNOSTIC_ITEMS = [
  { id: "soft", label: "Desenvolvimento de Software / App Web Sob Medida", tag: "Engenharia de Software", days: 30 },
  { id: "cftv", label: "Câmeras IP, Monitoramento Inteligente & CFTV", tag: "Segurança Física", days: 7 },
  { id: "rede", label: "Cabeamento Estruturado & Redes Cat6/Fibra", tag: "Infraestrutura TI", days: 5 },
  { id: "hotel", label: "Wi-Fi Corporativo de Alta Densidade (Hotelaria / Pousadas)", tag: "Conectividade Premium", days: 10 },
  { id: "saas_gov", label: "Gestão Pública, Licitações & Compliance Regulatório (ConformaGov)", tag: "GovTech", days: 3 },
  { id: "saas_gestao", label: "Gestão de Projetos & Finanças Corporativas (MyProjectUp / OrganizeUp)", tag: "SaaS Produtividade", days: 2 },
  { id: "saas_food", label: "Cardápio Digital & Autoatendimento para Restaurantes (Menuri)", tag: "FoodTech", days: 1 }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productCategory, setProductCategory] = useState("all");
  const [selectedDiagItems, setSelectedDiagItems] = useState(["soft", "saas_gestao"]);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", service: "Desenvolvimento de Software", msg: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = productCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === productCategory);

  const toggleDiagItem = (id) => {
    if (selectedDiagItems.includes(id)) {
      setSelectedDiagItems(selectedDiagItems.filter(i => i !== id));
    } else {
      setSelectedDiagItems([...selectedDiagItems, id]);
    }
  };

  const calcTotalDays = Math.max(...selectedDiagItems.map(itemId => {
    const found = DIAGNOSTIC_ITEMS.find(c => c.id === itemId);
    return found ? found.days : 0;
  }), 0);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  const generateWhatsAppLink = () => {
    const text = `Olá CrownTech! Gostaria de agendar uma consultoria / demonstração técnica para:\nServiço: ${leadForm.service}\nNome: ${leadForm.name}\nContato: ${leadForm.email} / ${leadForm.phone}\nMensagem: ${leadForm.msg}`;
    return `https://wa.me/5531999999999?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Header / Navigation Bar */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <Link href="/" className="logo">
            <Image
              src="/logo.svg"
              alt="CrownTech Logo"
              width={34}
              height={34}
              style={{ objectFit: "contain" }}
            />
            <span>
              <span className="logo-crown">Crown</span>
              <span className="logo-tech">Tech</span>
            </span>
          </Link>

          <nav className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Início</a></li>
              <li><a href="#produtos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Ecossistema SaaS</a></li>
              <li><a href="#servicos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Serviços Corporativos</a></li>
              <li><a href="#diagnostico" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Diagnóstico Tecnológico</a></li>
              <li><a href="#sobre" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sobre</a></li>
              <li><a href="#contato" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <Link href="/admin" className="btn btn-outline btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Área Admin
            </Link>
            <a href="#contato" className="btn btn-primary btn-sm">
              Fale Conosco
            </a>
            <button
              className="nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
          
          <div className="container">
            <div className="hero-grid">
              <div>
                <div className="hero-eyebrow">
                  <span className="badge badge-gold">Empresa de Tecnologia &amp; Inovação</span>
                  <span className="badge badge-live">SLA 99.9% Garantido</span>
                </div>
                
                <h1 className="hero-title">
                  Ecossistema de Software <br />
                  <span className="text-gradient-cyan">&amp; Infraestrutura Corporativa</span>
                  <br />de Alta Performance
                </h1>

                <p className="hero-description">
                  A **CrownTech** desenvolve softwares proprietários de alto valor (SaaS), sistemas sob medida e infraestrutura de TI corporativa de alto nível para acelerar o crescimento e a segurança do seu negócio.
                </p>

                <div className="hero-ctas">
                  <a href="#produtos" className="btn btn-primary btn-lg">
                    Explorar Produtos SaaS
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a href="#diagnostico" className="btn btn-gold btn-lg">
                    Diagnóstico Tecnológico
                  </a>
                </div>

                <div className="hero-kpi-grid">
                  <div className="kpi-card">
                    <div className="kpi-val">6+</div>
                    <div className="kpi-label">Plataformas SaaS Propriedade CrownTech</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-val">100%</div>
                    <div className="kpi-label">Projetos Entregues no Prazo</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-val">24/7</div>
                    <div className="kpi-label">Suporte &amp; Monitoramento</div>
                  </div>
                </div>
              </div>

              {/* Ecosystem Interactive Card Visual */}
              <div className="hero-visual-card">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Image src="/logo.svg" alt="CrownTech" width={28} height={28} />
                    <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>CrownTech Suite</span>
                  </div>
                  <span className="badge badge-gold">Ecosistema Ativo</span>
                </div>

                <p style={{ fontSize: "0.875rem", color: "var(--clr-text-muted)", marginBottom: "1.5rem" }}>
                  Plataformas prontas para uso imediato em diversos segmentos do mercado:
                </p>

                <div className="ecosystem-badge-list">
                  {PRODUCTS.map((prod) => (
                    <a key={prod.id} href={prod.url} target="_blank" rel="noopener noreferrer" className="eco-item">
                      <div className="eco-name">
                        <span style={{ color: "var(--clr-accent-cyan)" }}>{prod.icon}</span>
                        {prod.name}
                      </div>
                      <span className="badge badge-primary" style={{ fontSize: "0.7rem" }}>{prod.tag}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Trust & CNPJ Banner */}
        <section className="trust-banner">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-icon">🏛️</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.95rem" }}>CNPJ Registrado</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)" }}>65.586.793/0001-18</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🛡️</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.95rem" }}>Conformidade LGPD</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)" }}>Proteção rigorosa de dados</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">⚙️</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.95rem" }}>Arquitetura Escalável</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)" }}>Cloud &amp; Microserviços</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🤝</div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.95rem" }}>Contratos Oficiais</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)" }}>Garantia por SLA legal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Ecosystem Section */}
        <section className="section section-bg-alt" id="produtos">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Nossos Produtos Proprietários</span>
              <h2 className="section-title">Soluções Digitais &amp; SaaS Desenvolvidos pela CrownTech</h2>
              <p className="section-description">
                Além de prestar serviços corporativos sob medida, possuímos um ecossistema de produtos digitais robustos, criados para resolver problemas reais de empresas, órgãos públicos e eventos.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="products-filter">
              <button 
                className={`filter-btn ${productCategory === "all" ? "active" : ""}`}
                onClick={() => setProductCategory("all")}
              >
                Todos os Produtos (6)
              </button>
              <button 
                className={`filter-btn ${productCategory === "gestao" ? "active" : ""}`}
                onClick={() => setProductCategory("gestao")}
              >
                Gestão &amp; Produtividade
              </button>
              <button 
                className={`filter-btn ${productCategory === "gov" ? "active" : ""}`}
                onClick={() => setProductCategory("gov")}
              >
                GovTech &amp; Compliance
              </button>
              <button 
                className={`filter-btn ${productCategory === "foodtech" ? "active" : ""}`}
                onClick={() => setProductCategory("foodtech")}
              >
                FoodTech &amp; Restaurantes
              </button>
              <button 
                className={`filter-btn ${productCategory === "eventos" ? "active" : ""}`}
                onClick={() => setProductCategory("eventos")}
              >
                Eventos &amp; Acesso
              </button>
            </div>

            {/* Product Cards Grid */}
            <div className="products-grid">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="glass-card product-card">
                  <div>
                    <div className="product-top">
                      <div className="product-icon-wrap">{prod.icon}</div>
                      <span className={`badge ${prod.badgeClass}`}>{prod.badge}</span>
                    </div>

                    <h3 className="product-title">{prod.name}</h3>
                    <span style={{ display: "inline-block", fontSize: "0.8rem", color: "var(--clr-accent-cyan)", fontWeight: 700, marginBottom: "0.85rem" }}>
                      {prod.tag}
                    </span>

                    <p className="product-desc">{prod.desc}</p>

                    <div className="product-features">
                      {prod.features.map((feat, idx) => (
                        <div key={idx} className="product-feature-item">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="product-footer">
                    <a 
                      href={prod.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="product-url"
                    >
                      Acessar Plataforma
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>

                    <a 
                      href={prod.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline btn-sm"
                    >
                      Ver Mais
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Services Section */}
        <section className="section" id="servicos">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Serviços Corporativos Especializados</span>
              <h2 className="section-title">Infraestrutura Física &amp; Desenvolvimento de Software</h2>
              <p className="section-description">
                Garantimos excelência operacional com engenheiros e técnicos qualificados para projetos de infraestrutura tecnológica de ponta a ponta.
              </p>
            </div>

            <div className="services-grid">
              {/* Service 1 */}
              <div className="service-card">
                <div className="service-icon-box soft">💻</div>
                <h3 className="service-title">Desenvolvimento de Software Sob Medida</h3>
                <p className="service-desc">
                  Arquitetura de sistemas web corporativos, APIs RESTful, aplicativos móveis e integrações com bancos de dados relacionais e em nuvem.
                </p>
              </div>

              {/* Service 2 */}
              <div className="service-card">
                <div className="service-icon-box cam">📷</div>
                <h3 className="service-title">Câmeras IP &amp; CFTV Inteligente</h3>
                <p className="service-desc">
                  Projetos de segurança eletrônica com câmeras de altíssima resolução, inteligência artificial para detecção de movimento e gravação redundante.
                </p>
              </div>

              {/* Service 3 */}
              <div className="service-card">
                <div className="service-icon-box net">🌐</div>
                <h3 className="service-title">Cabeamento Estruturado &amp; Redes</h3>
                <p className="service-desc">
                  Organização de racks, cabeamento Cat6/Fibra Óptica, roteamento de alta velocidade e certificação de rede física para empresas.
                </p>
              </div>

              {/* Service 4 */}
              <div className="service-card">
                <div className="service-icon-box hotel">🏨</div>
                <h3 className="service-title">Wi-Fi &amp; Modernização para Hotelaria</h3>
                <p className="service-desc">
                  Instalação de Access Points de alta densidade por quarto/área comum para hotéis e pousadas com gerenciamento e portal captivo personalizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Solution Architect / Project Diagnostic Tool */}
        <section className="section section-bg-alt" id="diagnostico">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Diagnóstico Tecnológico Interativo</span>
              <h2 className="section-title">Monte a Solução Ideal para o Seu Negócio</h2>
              <p className="section-description">
                Selecione os objetivos da sua empresa e descubra a combinação recomendada de ecossistema tecnológico e tempo estimado de implantação.
              </p>
            </div>

            <div className="calc-wrapper">
              <div className="calc-grid">
                <div className="calc-options">
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#FFF" }}>Selecione as Necessidades da Sua Operação:</h4>
                  {DIAGNOSTIC_ITEMS.map((item) => {
                    const isSelected = selectedDiagItems.includes(item.id);
                    return (
                      <div 
                        key={item.id} 
                        className={`calc-option-item ${isSelected ? "selected" : ""}`}
                        onClick={() => toggleDiagItem(item.id)}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <div className="chk-box">
                            {isSelected && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B0F19" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </div>
                          <div>
                            <strong style={{ display: "block", fontSize: "0.95rem" }}>{item.label}</strong>
                            <span style={{ fontSize: "0.825rem", color: "var(--clr-text-muted)" }}>Prazo estimado de entrega: ~{item.days} {item.days === 1 ? "dia útil" : "dias úteis"}</span>
                          </div>
                        </div>

                        <span className="badge badge-primary" style={{ fontSize: "0.75rem" }}>
                          {item.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="calc-summary-card">
                  <span className="badge badge-gold">Diagnóstico sob Medida</span>
                  <h3 style={{ marginTop: "1rem", fontSize: "1.3rem" }}>Arquitetura Recomendada</h3>
                  
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--clr-accent-cyan)", margin: "1rem 0" }}>
                    {selectedDiagItems.length} {selectedDiagItems.length === 1 ? "Módulo Selecionado" : "Módulos Selecionados"}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem", textAlign: "left" }}>
                    {selectedDiagItems.map((id) => {
                      const item = DIAGNOSTIC_ITEMS.find(d => d.id === id);
                      return item ? (
                        <div key={id} style={{ fontSize: "0.85rem", color: "var(--clr-text)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ color: "var(--clr-accent-emerald)" }}>✓</span>
                          <span>{item.label}</span>
                        </div>
                      ) : null;
                    })}
                  </div>

                  <p style={{ fontSize: "0.875rem", color: "var(--clr-text-muted)", marginBottom: "1.75rem" }}>
                    Prazo estimado total para implantação: <strong>~{calcTotalDays} dias úteis</strong>. <br />
                    Atendimento corporativo com suporte dedicado CrownTech.
                  </p>

                  <a 
                    href="#contato" 
                    className="btn btn-gold btn-lg"
                    style={{ width: "100%" }}
                  >
                    Agendar Demonstração / Consultoria Gratuita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional & About Section */}
        <section className="section" id="sobre">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <span className="section-subtitle">Sobre a CrownTech</span>
                <h2 className="section-title">
                  Engenharia e Inovação para Negócios de Sucesso
                </h2>
                <p style={{ color: "var(--clr-text-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                  A <strong>Crown Tech Ltda</strong> é uma empresa brasileira de tecnologia focada na criação de soluções de alto impacto corporativo, unindo engenharia de software avançada com a instalação e manutenção de infraestrutura de TI de alta confiabilidade.
                </p>
                <p style={{ color: "var(--clr-text-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                  Atuamos com transparência ética, governança rigorosa e suporte dedicado aos nossos clientes.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                    <div style={{ color: "var(--clr-accent-gold)", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.25rem" }}>Missão</div>
                    <span style={{ fontSize: "0.875rem", color: "var(--clr-text-muted)" }}>Desenvolver softwares e infraestrutura segura para gerar máxima rentabilidade.</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                    <div style={{ color: "var(--clr-accent-cyan)", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.25rem" }}>Visão</div>
                    <span style={{ fontSize: "0.875rem", color: "var(--clr-text-muted)" }}>Ser ecossistema referência nacional de produtos SaaS e soluções de infraestrutura.</span>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>Credenciais Corporativas</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ borderBottom: "1px solid var(--clr-border)", paddingBottom: "1rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", textTransform: "uppercase" }}>Razão Social</span>
                    <strong style={{ display: "block", fontSize: "1.05rem", color: "#FFF" }}>CROWN TECH LTDA</strong>
                  </div>

                  <div style={{ borderBottom: "1px solid var(--clr-border)", paddingBottom: "1rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", textTransform: "uppercase" }}>CNPJ Registrado</span>
                    <strong style={{ display: "block", fontSize: "1.05rem", color: "var(--clr-accent-gold)" }}>65.586.793/0001-18</strong>
                  </div>

                  <div style={{ borderBottom: "1px solid var(--clr-border)", paddingBottom: "1rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", textTransform: "uppercase" }}>Canal de Auditoria &amp; Conformidade</span>
                    <strong style={{ display: "block", fontSize: "1rem", color: "var(--clr-accent-cyan)" }}>contato@crowntech.com.br</strong>
                  </div>

                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", textTransform: "uppercase" }}>Status Jurídico</span>
                    <div style={{ marginTop: "0.35rem" }}>
                      <span className="badge badge-live">Regular &amp; Ativo na Receita Federal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section section-bg-alt" id="contato">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Atendimento Executivo</span>
              <h2 className="section-title">Entre em Contato com a Nossa Equipe</h2>
              <p className="section-description">
                Estamos prontos para atender a sua empresa. Envie um e-mail ou inicie uma conversa direta via WhatsApp para receber uma proposta personalizada.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-card-item">
                  <div className="trust-icon">📧</div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)" }}>E-mail Oficial</span>
                    <a href="mailto:contato@crowntech.com.br" style={{ display: "block", fontWeight: 700, fontSize: "1.1rem", color: "#FFF" }}>
                      contato@crowntech.com.br
                    </a>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="trust-icon">💬</div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)" }}>WhatsApp Corporativo</span>
                    <strong style={{ display: "block", fontSize: "1.1rem", color: "var(--clr-accent-emerald)" }}>
                      Atendimento Direto &amp; Orçamentos
                    </strong>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="trust-icon">🏢</div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)" }}>Endereço Institucional</span>
                    <strong style={{ display: "block", fontSize: "0.95rem", color: "#FFF" }}>
                      Brasil — Atendimento Nacional &amp; Projetos Presenciais
                    </strong>
                  </div>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <a 
                    href={generateWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-gold btn-lg" 
                    style={{ width: "100%" }}
                  >
                    Falar via WhatsApp Agora
                  </a>
                </div>
              </div>

              {/* Lead Form */}
              <div className="glass-card">
                {formSubmitted ? (
                  <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Mensagem Enviada!</h3>
                    <p style={{ color: "var(--clr-text-muted)" }}>
                      Obrigado pelo contato! Nossa equipe técnica retornará a sua solicitação em até 2 horas úteis.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit}>
                    <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem" }}>Solicitar Atendimento Técnico</h3>

                    <div className="form-group">
                      <label className="form-label">Nome Completo</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Ex: Carlos Silva"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">E-mail Corporativo</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="carlos@empresa.com.br"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Telefone / WhatsApp</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-input" 
                        placeholder="(31) 99999-9999"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({...leadForm, phone: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Serviço ou Produto Principal</label>
                      <select 
                        className="form-select"
                        value={leadForm.service}
                        onChange={(e) => setLeadForm({...leadForm, service: e.target.value})}
                      >
                        <option value="Desenvolvimento de Software">Desenvolvimento de Software Sob Medida</option>
                        <option value="Câmeras e CFTV">Câmeras de Segurança / CFTV</option>
                        <option value="Cabeamento Estruturado">Cabeamento Estruturado / Redes</option>
                        <option value="Wi-Fi Hotelaria">Modernização Wi-Fi Hotelaria</option>
                        <option value="Assinatura SaaS">Assinatura de Produtos SaaS (Toma A Lista, ConformaGov, etc.)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Detalhes da Necessidade</label>
                      <textarea 
                        rows={3} 
                        className="form-textarea" 
                        placeholder="Descreva resumidamente seu projeto..."
                        value={leadForm.msg}
                        onChange={(e) => setLeadForm({...leadForm, msg: e.target.value})}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                      Enviar Solicitação
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <Image src="/logo.svg" alt="CrownTech Logo" width={32} height={32} />
                <span>
                  <span className="logo-crown">Crown</span>
                  <span className="logo-tech">Tech</span>
                </span>
              </Link>
              <p>
                Empresa especializada no desenvolvimento de produtos SaaS de alto valor e soluções corporativas de engenharia de software e infraestrutura de TI.
              </p>
            </div>

            <div className="footer-col">
              <h4>Navegação</h4>
              <ul className="footer-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#produtos">Ecossistema SaaS</a></li>
                <li><a href="#servicos">Serviços Corporativos</a></li>
                <li><a href="#diagnostico">Diagnóstico Tecnológico</a></li>
                <li><a href="#sobre">Sobre a Empresa</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Produtos SaaS</h4>
              <ul className="footer-links">
                <li><a href="https://tomaalista.com.br/" target="_blank" rel="noreferrer">Toma A Lista</a></li>
                <li><a href="https://www.mycartao.com.br/app" target="_blank" rel="noreferrer">MyCartão</a></li>
                <li><a href="https://www.myprojectup.com.br/" target="_blank" rel="noreferrer">MyProjectUp</a></li>
                <li><a href="https://www.conformagov.com.br/" target="_blank" rel="noreferrer">ConformaGov</a></li>
                <li><a href="https://organizeup.com.br/" target="_blank" rel="noreferrer">OrganizeUp</a></li>
                <li><a href="https://www.menuri.com.br/" target="_blank" rel="noreferrer">Menuri</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Conformidade Legal</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", marginBottom: "0.5rem" }}>
                <strong>CROWN TECH LTDA</strong>
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--clr-accent-gold)", marginBottom: "1rem" }}>
                CNPJ: 65.586.793/0001-18
              </p>
              <Link href="/admin" className="btn btn-outline btn-sm">
                Acessar Portal Admin
              </Link>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Crown Tech Ltda — CNPJ 65.586.793/0001-18. Todos os direitos reservados.</p>
            <p>Engenharia de Software &amp; Soluções de TI Corporativas</p>
          </div>
        </div>
      </footer>
    </>
  );
}
