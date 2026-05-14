"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    /* --- Header Scroll Effect --- */
    const header = document.getElementById("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    /* --- Mobile Menu Toggle --- */
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => navMenu?.classList.toggle("active");
    navToggle?.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () =>
        navMenu?.classList.remove("active")
      );
    });

    /* --- Scroll Animations --- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggle?.removeEventListener("click", toggleMenu);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Header / Navbar */}
      <header className="header" id="header">
        <nav className="nav-container">
          <a href="#" className="logo">
            <Image
              src="/logo.svg"
              alt="Crown Tech Logo"
              width={36}
              height={36}
              className="logo-img"
            />
            <span className="logo-crown">Crown</span>
            <span className="logo-tech">tech</span>
          </a>

          <div className="nav-menu" id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a href="#sobre" className="nav-link">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a href="#servicos" className="nav-link">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a href="#produtos" className="nav-link">
                  Produtos
                </a>
              </li>
              <li className="nav-item">
                <a href="#diferenciais" className="nav-link">
                  Por que Nós?
                </a>
              </li>
              <li className="nav-item">
                <a href="#contato" className="nav-link">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-actions">
            <a href="mailto:contato@crowntech.com.br" className="btn btn-primary">
              Fale Conosco
            </a>
            <button className="nav-toggle" id="nav-toggle" aria-label="Abrir Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="container hero-container">
            <div className="hero-content animate-on-scroll">
              <div className="hero-eyebrow">
                <span className="eyebrow-line"></span>
                <span className="badge">Inovação &amp; Tecnologia</span>
              </div>
              <h1 className="hero-title">
                Soluções Corporativas <br />
                <span className="text-gradient">que Impulsionam</span>
                <br />o Seu Negócio
              </h1>
              <p className="hero-description">
                Da infraestrutura física à transformação digital — a Crowntech
                oferece serviços e produtos de tecnologia com excelência,
                segurança e comprometimento.
              </p>
              <div className="hero-buttons">
                <a href="#servicos" className="btn btn-primary btn-lg">
                  Ver Serviços
                </a>
                <a href="#contato" className="btn btn-outline btn-lg">
                  Entrar em Contato
                </a>
              </div>
            </div>
            <div className="hero-stats animate-on-scroll delay-1">
              <div className="stat-box">
                <div className="stat-icon">🔒</div>
                <p>Segurança &amp; CFTV</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">📡</div>
                <p>Redes &amp; Cabeamento</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">💻</div>
                <p>Software Sob Medida</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🏨</div>
                <p>Modernização Hotelaria</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section className="services section" id="servicos">
          <div className="container">
            <div className="section-header text-center animate-on-scroll">
              <span className="section-subtitle">Nossa Expertise</span>
              <h2 className="section-title">Serviços Corporativos</h2>
              <p className="section-description">
                Soluções completas para empresas que buscam eficiência, segurança
                e conectividade.
              </p>
            </div>

            <div className="services-grid">
              {/* Service 1: Câmeras */}
              <div className="service-card animate-on-scroll">
                <div className="service-card-top">
                  <div className="service-icon cam-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1z"></path>
                      <rect x="2" y="5" width="14" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <span className="service-tag">Segurança</span>
                </div>
                <h3 className="service-title">Câmeras de Segurança</h3>
                <p className="service-text">
                  Instalação profissional de câmeras e sistemas CFTV de alta
                  resolução.
                </p>
                <ul className="service-list">
                  <li>Câmeras IP e Analógicas</li>
                  <li>Gravação HD / Full HD</li>
                  <li>Acesso remoto via app</li>
                </ul>
              </div>

              {/* Service 2: Cabeamento */}
              <div className="service-card animate-on-scroll delay-1">
                <div className="service-card-top">
                  <div className="service-icon net-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="6" height="6" rx="1"></rect>
                      <rect x="16" y="2" width="6" height="6" rx="1"></rect>
                      <rect x="9" y="9" width="6" height="6" rx="1"></rect>
                      <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                      <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                      <line x1="5" y1="8" x2="12" y2="12"></line>
                      <line x1="19" y1="8" x2="12" y2="12"></line>
                      <line x1="5" y1="16" x2="12" y2="15"></line>
                      <line x1="19" y1="16" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <span className="service-tag">Infraestrutura</span>
                </div>
                <h3 className="service-title">Cabeamento Estruturado</h3>
                <p className="service-text">
                  Projeto e instalação de rede física para escritórios e lojas.
                  Organização completa com conectividade rápida e estável.
                </p>
                <ul className="service-list">
                  <li>Cat5e / Cat6</li>
                  <li>Rack e patch panel</li>
                </ul>
              </div>

              {/* Service 3: Hotelaria */}
              <div className="service-card animate-on-scroll delay-2">
                <div className="service-card-top">
                  <div className="service-icon hotel-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                      <line x1="12" y1="20" x2="12.01" y2="20"></line>
                    </svg>
                  </div>
                  <span className="service-tag">Hotelaria</span>
                </div>
                <h3 className="service-title">Modernização de Hotelaria</h3>
                <p className="service-text">
                  Wi-Fi premium de alta performance e rede cabeada estável em
                  todos os quartos da sua pousada ou hotel.
                </p>
                <ul className="service-list">
                  <li>Wi-Fi por quarto (Access Points)</li>
                  <li>Rede cabeada estruturada</li>
                  <li>Gerenciamento centralizado</li>
                </ul>
              </div>

              {/* Service 4: Software */}
              <div className="service-card animate-on-scroll">
                <div className="service-card-top">
                  <div className="service-icon soft-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <span className="service-tag">TI</span>
                </div>
                <h3 className="service-title">Desenvolvimento de Software</h3>
                <p className="service-text">
                  Sistemas e aplicações sob medida, desenvolvidos com as melhores
                  tecnologias para o seu negócio crescer.
                </p>
                <ul className="service-list">
                  <li>Sistemas Web</li>
                  <li>Consultoria em TI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Section */}
        <section className="products section bg-alt" id="produtos">
          <div className="container">
            <div className="section-header text-center animate-on-scroll">
              <span className="section-subtitle">Produtos Próprios</span>
              <h2 className="section-title">Tecnologia que Criamos</h2>
              <p className="section-description">
                Além dos serviços, desenvolvemos produtos digitais próprios
                disponíveis no mercado.
              </p>
            </div>
            <div className="products-grid">
              <div className="product-card animate-on-scroll">
                <div className="product-badge">App</div>
                <div className="product-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <h3>Toma A Lista</h3>
                <p>
                  Plataforma completa para gestão de eventos e listas de
                  participantes. Controle em tempo real pelo celular, confirmações
                  e relatórios automatizados.
                </p>
                <a
                  href="https://www.tomaalista.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-link"
                >
                  Acessar plataforma{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
              <div className="product-card animate-on-scroll delay-1">
                <div className="product-badge">Em breve</div>
                <div className="product-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3>Cardápio Online</h3>
                <p>
                  Plataforma digital para restaurantes e bares com painel
                  administrativo completo, cardápio responsivo e gerenciamento de
                  pedidos em tempo real.
                </p>
                <span className="product-link muted">Em desenvolvimento</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section className="about section" id="sobre">
          <div className="container about-container">
            <div className="about-content animate-on-scroll">
              <span className="section-subtitle">Quem Somos</span>
              <h2 className="section-title">
                Tecnologia <span className="text-gradient">com Propósito</span>
              </h2>
              <p className="about-text">
                A <strong>Crowntech</strong> é uma empresa de tecnologia focada em
                entregar soluções reais para negócios reais. Atuamos com
                responsabilidade, técnica apurada e parceria de longo prazo.
              </p>
              <p className="about-text">
                De câmeras de segurança a sistemas digitais complexos, nosso
                compromisso é o mesmo:{" "}
                <strong>
                  excelência na entrega e satisfação do cliente.
                </strong>
              </p>
              <ul className="about-list">
                <li>
                  <span className="check-icon">✔</span> Soluções customizadas para
                  cada cliente
                </li>
                <li>
                  <span className="check-icon">✔</span> Instalações físicas com
                  garantia de qualidade
                </li>
                <li>
                  <span className="check-icon">✔</span> Suporte técnico e
                  relacionamento transparente
                </li>
                <li>
                  <span className="check-icon">✔</span> Portfólio de produtos
                  digitais próprios
                </li>
              </ul>
            </div>
            <div className="about-visual animate-on-scroll delay-1">
              <div className="about-card">
                <div className="about-card-item">
                  <div className="about-icon">🎯</div>
                  <div>
                    <strong>Missão</strong>
                    <p>
                      Transformar tecnologia em vantagem competitiva para nossos
                      clientes.
                    </p>
                  </div>
                </div>
                <div className="about-card-item">
                  <div className="about-icon">🔭</div>
                  <div>
                    <strong>Visão</strong>
                    <p>
                      Ser referência em soluções integradas de TI e segurança
                      eletrônica.
                    </p>
                  </div>
                </div>
                <div className="about-card-item">
                  <div className="about-icon">💎</div>
                  <div>
                    <strong>Valores</strong>
                    <p>
                      Excelência, ética, inovação e parceria verdadeira com cada
                      cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="features section bg-alt" id="diferenciais">
          <div className="container">
            <div className="section-header text-center animate-on-scroll">
              <span className="section-subtitle">Nossos Diferenciais</span>
              <h2 className="section-title">
                Por que Escolher a Crowntech?
              </h2>
            </div>
            <div className="features-grid animate-on-scroll">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <h4>Agilidade</h4>
                <p>
                  Entregas no prazo, sem abrir mão da qualidade e da segurança do
                  serviço.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <h4>Confiabilidade</h4>
                <p>
                  Infraestrutura e sistemas construídos com os melhores padrões do
                  mercado.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <h4>Inovação</h4>
                <p>
                  Utilizamos tecnologias modernas e escaláveis em todas as nossas
                  soluções.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h4>Parceria de Verdade</h4>
                <p>
                  Entendemos o seu negócio e trabalhamos como parte do seu time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section className="contact section" id="contato">
          <div className="container">
            <div className="contact-block animate-on-scroll">
              <div className="contact-text-side">
                <span className="section-subtitle">Vamos Conversar?</span>
                <h2 className="section-title">Entre em Contato</h2>
                <p>
                  Estamos prontos para entender os desafios da sua empresa e
                  propor a melhor solução tecnológica. Envie um e-mail e
                  retornaremos rapidamente.
                </p>
              </div>
              <div className="contact-cta-side">
                <div className="contact-email-card">
                  <div className="email-icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="email-label">E-mail corporativo</p>
                    <a
                      href="mailto:contato@crowntech.com.br"
                      className="email-address"
                    >
                      contato@crowntech.com.br
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:contato@crowntech.com.br"
                  className="btn btn-primary btn-lg"
                >
                  Enviar E-mail
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Image
                src="/logo.svg"
                alt="Crown Tech Logo"
                width={32}
                height={32}
                className="logo-img logo-img-footer"
              />
              <span className="logo-crown">Crown</span>
              <span className="logo-tech">tech</span>
            </a>
            <p className="footer-desc">
              Excelência, segurança e inovação em tecnologia da informação.
              Resolvendo o hoje e arquitetando o futuro do seu negócio.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#servicos">Nossos Serviços</a></li>
              <li><a href="#produtos">Nossos Produtos</a></li>
              <li><a href="#sobre">Sobre a Empresa</a></li>
              <li><a href="#contato">Fale Conosco</a></li>
            </ul>
          </div>

          <div className="footer-legal">
            <h4>Informações Legais</h4>
            <p><strong>CROWN TECH LTDA</strong></p>
            <p className="cnpj-line">
              CNPJ: <strong>65.586.793/0001-18</strong>
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Contrato Social e demais documentos disponíveis fisicamente na sede
              da empresa para auditorias e fins de conformidade.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <a
                href="mailto:contato@crowntech.com.br"
                style={{ color: "#93C5FD" }}
              >
                contato@crowntech.com.br
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Crown Tech Ltda — CNPJ 65.586.793/0001-18. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
