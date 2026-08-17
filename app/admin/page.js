"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Initial CRM Leads Mock Data
const INITIAL_LEADS = [
  { id: 1, name: "Prefeitura Municipal (Licitação)", company: "Órgão Público", service: "ConformaGov", value: 3500, status: "proposta", phone: "(31) 98888-1111" },
  { id: 2, name: "Hotel Pousada Solar do Sol", company: "Hotelaria", service: "Wi-Fi & CFTV", value: 12000, status: "negociacao", phone: "(31) 98888-2222" },
  { id: 3, name: "Restaurante Sabor & Arte", company: "Alimentação", service: "Menuri", value: 199, status: "fechado", phone: "(31) 98888-3333" },
  { id: 4, name: "Construtora & Engenharia BH", company: "Engenharia", service: "MyProjectUp", value: 450, status: "novo", phone: "(31) 98888-4444" },
  { id: 5, name: "Produtora de Festas VIP", company: "Eventos", service: "Toma A Lista", value: 250, status: "fechado", phone: "(31) 98888-5555" }
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("calc");

  // Product Mix Simulator Quantities (Default setup targeting R$ 1M/yr ARR = ~R$ 83,3k MRR)
  const [simQuantities, setSimQuantities] = useState({
    conformagov: 15,     // 15 * 2.500 = 37.500
    organizeup: 40,      // 40 * 290   = 11.600
    myprojectup: 30,     // 30 * 350   = 10.500
    menuri: 60,          // 60 * 199   = 11.940
    tomaalista: 30,      // 30 * 250   = 7.500
    mycartao: 100,       // 100 * 49   = 4.900
    infraRetainers: 5    // 5 * 5.000  = 25.000
  });

  // Calculate MRR & ARR from simulator
  const simPrices = {
    conformagov: 2500,
    organizeup: 290,
    myprojectup: 350,
    menuri: 199,
    tomaalista: 250,
    mycartao: 49,
    infraRetainers: 5000
  };

  const calculatedMRR = 
    (simQuantities.conformagov * simPrices.conformagov) +
    (simQuantities.organizeup * simPrices.organizeup) +
    (simQuantities.myprojectup * simPrices.myprojectup) +
    (simQuantities.menuri * simPrices.menuri) +
    (simQuantities.tomaalista * simPrices.tomaalista) +
    (simQuantities.mycartao * simPrices.mycartao) +
    (simQuantities.infraRetainers * simPrices.infraRetainers);

  const calculatedARR = calculatedMRR * 12;
  const targetARR = 1000000;
  const progressPercent = Math.min(Math.round((calculatedARR / targetARR) * 100), 100);

  // CRM State
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [newLead, setNewLead] = useState({ name: "", company: "", service: "ConformaGov", value: 1000, status: "novo", phone: "" });

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLead.name) return;
    const item = {
      id: Date.now(),
      ...newLead,
      value: parseFloat(newLead.value) || 0
    };
    setLeads([item, ...leads]);
    setNewLead({ name: "", company: "", service: "ConformaGov", value: 1000, status: "novo", phone: "" });
  };

  const updateLeadStatus = (id, newStatus) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  // Proposal Generator State
  const [propData, setPropData] = useState({
    clientName: "Empresa Exemplo Ltda",
    cnpj: "00.000.000/0001-00",
    serviceName: "Implantação ConformaGov + Treinamento de Equipe",
    setupPrice: "5.000,00",
    monthlyPrice: "2.500,00",
    termMonths: "12",
    details: "Inclui suporte dedicado 24/7, garantia de SLA 99.9% e backup em nuvem diariamente."
  });

  const generatedProposalText = `PROPOSTA COMERCIAL — CROWN TECH LTDA
CNPJ: 65.586.793/0001-18 | E-mail: contato@crowntech.com.br
------------------------------------------------------------
CLIENTE: ${propData.clientName}
CNPJ/CPF: ${propData.cnpj}
DATA: ${new Date().toLocaleDateString('pt-BR')}

ESCOPO DO PROJETO / SERVIÇO:
${propData.serviceName}

OBSERVAÇÕES E GARANTIAS:
${propData.details}

CONDIÇÕES FINANCEIRAS:
• Taxa de Setup / Implantação: R$ ${propData.setupPrice}
• Valor da Mensalidade Recorrente: R$ ${propData.monthlyPrice} / mês
• Período de Vigência do Contrato: ${propData.termMonths} meses

GARANTIAS CORPORATIVAS CROWNTECH:
✔ Suporte Técnico Executivo e Manutenção Contínua
✔ SLA de Disponibilidade 99.9% em Contrato
✔ Total Conformidade com a LGPD e Normas de Segurança

Atenciosamente,
Bruno Magalhães — Diretor Executivo CrownTech
www.crowntech.com.br`;

  return (
    <div className="admin-layout">
      {/* Admin Top Header */}
      <header className="admin-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" className="logo">
            <Image src="/logo.svg" alt="CrownTech Logo" width={30} height={30} />
            <span>
              <span className="logo-crown">Crown</span>
              <span className="logo-tech">Tech</span>
            </span>
          </Link>
          <span className="badge badge-gold" style={{ fontSize: "0.75rem" }}>
            Central Executiva &amp; Growth
          </span>
        </div>

        <nav className="admin-nav-tabs">
          <button 
            className={`admin-tab-btn ${activeTab === "calc" ? "active" : ""}`}
            onClick={() => setActiveTab("calc")}
          >
            🎯 Meta R$ 1M &amp; Simulador
          </button>
          <button 
            className={`admin-tab-btn ${activeTab === "playbook" ? "active" : ""}`}
            onClick={() => setActiveTab("playbook")}
          >
            💡 Estratégias &amp; Vendas
          </button>
          <button 
            className={`admin-tab-btn ${activeTab === "crm" ? "active" : ""}`}
            onClick={() => setActiveTab("crm")}
          >
            📋 Mini CRM ({leads.length})
          </button>
          <button 
            className={`admin-tab-btn ${activeTab === "proposta" ? "active" : ""}`}
            onClick={() => setActiveTab("proposta")}
          >
            📝 Gerador de Propostas
          </button>
          <button 
            className={`admin-tab-btn ${activeTab === "domains" ? "active" : ""}`}
            onClick={() => setActiveTab("domains")}
          >
            🌐 Ecossistema SaaS
          </button>
        </nav>

        <div>
          <Link href="/" className="btn btn-outline btn-sm">
            ← Voltar ao Site
          </Link>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="admin-container">
        
        {/* TAB 1: Meta Financial Tracker & Simulator */}
        {activeTab === "calc" && (
          <div>
            <div className="target-hero-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span className="badge badge-gold">Objetivo Anual ARR</span>
                  <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "0.5rem" }}>
                    Meta de Faturamento: <span className="text-gradient-gold">R$ 1.000.000,00 / ano</span>
                  </h2>
                  <p style={{ color: "var(--clr-text-muted)", fontSize: "0.95rem" }}>
                    Meta mensal (MRR): <strong>R$ 83.333,33 / mês</strong> em faturamento recorrente + serviços.
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--clr-accent-gold)" }}>
                    {progressPercent}%
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)" }}>Projeção Atingida</span>
                </div>
              </div>

              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "var(--clr-text-muted)" }}>
                <span>MRR Simulado Atual: <strong style={{ color: "#FFF" }}>R$ {calculatedMRR.toLocaleString('pt-BR')},00 / mês</strong></span>
                <span>Faturamento Anual Projetado (ARR): <strong style={{ color: "var(--clr-accent-gold)" }}>R$ {calculatedARR.toLocaleString('pt-BR')},00 / ano</strong></span>
              </div>
            </div>

            {/* Product Mix Simulator Form */}
            <div className="glass-card" style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                🧮 Simulador da Composição do Faturamento (Mix de Clientes)
              </h3>
              <p style={{ color: "var(--clr-text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Ajuste a quantidade estimada de clientes ativos em cada produto e veja a receita gerada em tempo real:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
                
                {/* ConformaGov */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--clr-accent-cyan)" }}>🏛️ ConformaGov</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--clr-accent-gold)" }}>R$ 2.500/mês</span>
                  </div>
                  <label style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", display: "block", marginBottom: "0.35rem" }}>
                    Clientes Órgãos Públicos / Licitações: <strong>{simQuantities.conformagov}</strong>
                  </label>
                  <input 
                    type="range" min="0" max="50" 
                    value={simQuantities.conformagov} 
                    onChange={(e) => setSimQuantities({...simQuantities, conformagov: parseInt(e.target.value) || 0})}
                    style={{ width: "100%" }}
                  />
                  <div style={{ textAlign: "right", fontSize: "0.85rem", marginTop: "0.35rem", color: "#FFF" }}>
                    = R$ {(simQuantities.conformagov * simPrices.conformagov).toLocaleString('pt-BR')}/mês
                  </div>
                </div>

                {/* OrganizeUp */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--clr-accent-cyan)" }}>📊 OrganizeUp</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--clr-accent-gold)" }}>R$ 290/mês</span>
                  </div>
                  <label style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", display: "block", marginBottom: "0.35rem" }}>
                    Empresas PMEs Ativas: <strong>{simQuantities.organizeup}</strong>
                  </label>
                  <input 
                    type="range" min="0" max="200" 
                    value={simQuantities.organizeup} 
                    onChange={(e) => setSimQuantities({...simQuantities, organizeup: parseInt(e.target.value) || 0})}
                    style={{ width: "100%" }}
                  />
                  <div style={{ textAlign: "right", fontSize: "0.85rem", marginTop: "0.35rem", color: "#FFF" }}>
                    = R$ {(simQuantities.organizeup * simPrices.organizeup).toLocaleString('pt-BR')}/mês
                  </div>
                </div>

                {/* MyProjectUp */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--clr-accent-cyan)" }}>🚀 MyProjectUp</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--clr-accent-gold)" }}>R$ 350/mês</span>
                  </div>
                  <label style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", display: "block", marginBottom: "0.35rem" }}>
                    Times Corporativos: <strong>{simQuantities.myprojectup}</strong>
                  </label>
                  <input 
                    type="range" min="0" max="150" 
                    value={simQuantities.myprojectup} 
                    onChange={(e) => setSimQuantities({...simQuantities, myprojectup: parseInt(e.target.value) || 0})}
                    style={{ width: "100%" }}
                  />
                  <div style={{ textAlign: "right", fontSize: "0.85rem", marginTop: "0.35rem", color: "#FFF" }}>
                    = R$ {(simQuantities.myprojectup * simPrices.myprojectup).toLocaleString('pt-BR')}/mês
                  </div>
                </div>

                {/* Menuri */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--clr-accent-cyan)" }}>🍽️ Menuri</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--clr-accent-gold)" }}>R$ 199/mês</span>
                  </div>
                  <label style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", display: "block", marginBottom: "0.35rem" }}>
                    Restaurantes / Bares: <strong>{simQuantities.menuri}</strong>
                  </label>
                  <input 
                    type="range" min="0" max="300" 
                    value={simQuantities.menuri} 
                    onChange={(e) => setSimQuantities({...simQuantities, menuri: parseInt(e.target.value) || 0})}
                    style={{ width: "100%" }}
                  />
                  <div style={{ textAlign: "right", fontSize: "0.85rem", marginTop: "0.35rem", color: "#FFF" }}>
                    = R$ {(simQuantities.menuri * simPrices.menuri).toLocaleString('pt-BR')}/mês
                  </div>
                </div>

                {/* Toma A Lista */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--clr-accent-cyan)" }}>🎫 Toma A Lista</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--clr-accent-gold)" }}>R$ 250/mês</span>
                  </div>
                  <label style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", display: "block", marginBottom: "0.35rem" }}>
                    Produtoras / Casas Noturnas: <strong>{simQuantities.tomaalista}</strong>
                  </label>
                  <input 
                    type="range" min="0" max="150" 
                    value={simQuantities.tomaalista} 
                    onChange={(e) => setSimQuantities({...simQuantities, tomaalista: parseInt(e.target.value) || 0})}
                    style={{ width: "100%" }}
                  />
                  <div style={{ textAlign: "right", fontSize: "0.85rem", marginTop: "0.35rem", color: "#FFF" }}>
                    = R$ {(simQuantities.tomaalista * simPrices.tomaalista).toLocaleString('pt-BR')}/mês
                  </div>
                </div>

                {/* Contratos Infra / Custom Dev */}
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--clr-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <strong style={{ color: "var(--clr-accent-cyan)" }}>🛠️ Retainers Infra / Dev</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--clr-accent-gold)" }}>R$ 5.000/mês</span>
                  </div>
                  <label style={{ fontSize: "0.8rem", color: "var(--clr-text-muted)", display: "block", marginBottom: "0.35rem" }}>
                    Contratos Corporativos Enterprise: <strong>{simQuantities.infraRetainers}</strong>
                  </label>
                  <input 
                    type="range" min="0" max="20" 
                    value={simQuantities.infraRetainers} 
                    onChange={(e) => setSimQuantities({...simQuantities, infraRetainers: parseInt(e.target.value) || 0})}
                    style={{ width: "100%" }}
                  />
                  <div style={{ textAlign: "right", fontSize: "0.85rem", marginTop: "0.35rem", color: "#FFF" }}>
                    = R$ {(simQuantities.infraRetainers * simPrices.infraRetainers).toLocaleString('pt-BR')}/mês
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Playbook de Vendas & Divulgação */}
        {activeTab === "playbook" && (
          <div>
            <div className="glass-card" style={{ marginBottom: "2rem" }}>
              <span className="badge badge-gold">Playbook de Crescimento CrownTech</span>
              <h2 style={{ fontSize: "1.8rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
                🚀 Estratégias Práticas para Alcançar R$ 1.000.000,00 de Faturamento Anual
              </h2>
              <p style={{ color: "var(--clr-text-muted)", fontSize: "1rem" }}>
                Para faturar **R$ 83.333/mês**, a chave é combinar produtos de **Ticket Médio/Alto (ConformaGov e Contratos de Infraestrutura/Desenvolvimento)** que cobrem a base fixa com produtos de **Volume e Escalabilidade (Menuri, OrganizeUp, MyProjectUp e Toma A Lista)**.
              </p>
            </div>

            <div className="admin-grid-3">
              
              {/* Product 1 Strategy */}
              <div className="strategy-card">
                <span className="strategy-tag">Ticket Alto (B2G / Enterprise)</span>
                <h3 className="strategy-title">🏛️ ConformaGov</h3>
                <ul className="strategy-list">
                  <li><strong>Público-Alvo:</strong> Câmaras municipais, prefeituras e órgãos públicos regionais.</li>
                  <li><strong>Estratégia Outbound:</strong> Agendamento presencial/remoto com Secretários de Administração e Controladores de Governo.</li>
                  <li><strong>Argumento Chave:</strong> Evitar sanções do TCU/TCE e garantir conformidade instantânea com a Nova Lei de Licitações.</li>
                  <li><strong>Meta de Vendas:</strong> 15 contratos @ R$ 2.500/mês = <strong>R$ 37.500/mês</strong>.</li>
                </ul>
              </div>

              {/* Product 2 Strategy */}
              <div className="strategy-card">
                <span className="strategy-tag">Volume Recorrente (FoodTech)</span>
                <h3 className="strategy-title">🍽️ Menuri</h3>
                <ul className="strategy-list">
                  <li><strong>Público-Alvo:</strong> Donos de restaurantes, bares, hamburguerias e cafeterias.</li>
                  <li><strong>Prospecção PAP (Porta a Porta):</strong> Visitas rápidas nos horários fora de pico (14h-17h) com demonstração em tablet.</li>
                  <li><strong>Oferta Irresistível:</strong> 14 dias grátis + montagem inicial do cardápio sem taxa de adesão.</li>
                  <li><strong>Meta de Vendas:</strong> 60 estabelecimentos @ R$ 199/mês = <strong>R$ 11.940/mês</strong>.</li>
                </ul>
              </div>

              {/* Product 3 Strategy */}
              <div className="strategy-card">
                <span className="strategy-tag">B2B Gestão &amp; Projetos</span>
                <h3 className="strategy-title">🚀 MyProjectUp &amp; OrganizeUp</h3>
                <ul className="strategy-list">
                  <li><strong>Público-Alvo:</strong> Gestores de TI, Diretores de Operação, escritórios de arquitetura/engenharia e PMEs.</li>
                  <li><strong>Canal Principal:</strong> LinkedIn InMail direcionado para CEOs/CFOs + Anúncios de Busca no Google Ads.</li>
                  <li><strong>Parcerias:</strong> Comissionar contadores e consultores empresariais com 10% recorrente.</li>
                  <li><strong>Meta de Vendas:</strong> 70 assinaturas PME = <strong>R$ 22.100/mês</strong>.</li>
                </ul>
              </div>

              {/* Product 4 Strategy */}
              <div className="strategy-card">
                <span className="strategy-tag">Eventos &amp; Entretenimento</span>
                <h3 className="strategy-title">🎫 Toma A Lista</h3>
                <ul className="strategy-list">
                  <li><strong>Público-Alvo:</strong> Produtoras de eventos, casas de show, organizadores de formaturas e conferências.</li>
                  <li><strong>Modelo de Parceria:</strong> Cobrança por evento realizado ou assinatura mensal para casas noturnas.</li>
                  <li><strong>Diferencial:</strong> Rapidez extrema de leitura do QR code na recepção.</li>
                  <li><strong>Meta de Vendas:</strong> 30 parceiros = <strong>R$ 7.500/mês</strong>.</li>
                </ul>
              </div>

              {/* Product 5 Strategy */}
              <div className="strategy-card">
                <span className="strategy-tag">Serviços &amp; Projetos Físicos</span>
                <h3 className="strategy-title">📷 CFTV, Redes &amp; Wi-Fi Hotelaria</h3>
                <ul className="strategy-list">
                  <li><strong>Público-Alvo:</strong> Pousadas, hotéis, redes de lojas e escritórios corporativos.</li>
                  <li><strong>Estratégia de Retainers:</strong> Fechar contratação de infraestrutura com contrato de manutenção preventiva mensal (SLA).</li>
                  <li><strong>Cross-Selling:</strong> Oferecer suporte de TI + MyProjectUp para clientes de infraestrutura.</li>
                  <li><strong>Meta de Vendas:</strong> 5 grandes contratos = <strong>R$ 25.000/mês</strong>.</li>
                </ul>
              </div>

              {/* Product 6 Strategy */}
              <div className="strategy-card">
                <span className="strategy-tag">Networking &amp; Trojan Horse</span>
                <h3 className="strategy-title">🎴 MyCartão</h3>
                <ul className="strategy-list">
                  <li><strong>Estratégia Porta de Entrada:</strong> Oferecer cartões de visita digitais para toda a diretoria/equipe comercial de grandes empresas.</li>
                  <li><strong>Upsell Automático:</strong> Usar o contato inicial do MyCartão para apresentar o OrganizeUp e os serviços CrownTech.</li>
                  <li><strong>Meta de Vendas:</strong> 100 usuários corporativos = <strong>R$ 4.900/mês</strong>.</li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: CRM Leads Pipeline */}
        {activeTab === "crm" && (
          <div>
            <div className="glass-card" style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: "1.4rem" }}>📋 Pipeline de Oportunidades &amp; Leads CRM</h3>
                  <p style={{ color: "var(--clr-text-muted)", fontSize: "0.9rem" }}>
                    Gerencie prospects, propostas enviadas e contratos fechados em um só lugar.
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)" }}>Valor em Pipeline</span>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--clr-accent-gold)" }}>
                    R$ {leads.reduce((acc, l) => acc + l.value, 0).toLocaleString('pt-BR')},00
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-grid-2">
              
              {/* Add Lead Form */}
              <div className="glass-card">
                <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>➕ Adicionar Novo Lead</h4>
                
                <form onSubmit={handleAddLead}>
                  <div className="form-group">
                    <label className="form-label">Nome do Contato / Responsável</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="Ex: Dra. Mariana Mendes"
                      value={newLead.name}
                      onChange={(e) => setNewLead({...newLead, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Empresa / Órgão</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Ex: Prefeitura ou Restaurante X"
                      value={newLead.company}
                      onChange={(e) => setNewLead({...newLead, company: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Telefone / WhatsApp</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="(31) 99999-9999"
                      value={newLead.phone}
                      onChange={(e) => setNewLead({...newLead, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Produto ou Serviço de Interesse</label>
                    <select 
                      className="form-select"
                      value={newLead.service}
                      onChange={(e) => setNewLead({...newLead, service: e.target.value})}
                    >
                      <option value="ConformaGov">ConformaGov</option>
                      <option value="Menuri">Menuri</option>
                      <option value="OrganizeUp">OrganizeUp</option>
                      <option value="MyProjectUp">MyProjectUp</option>
                      <option value="Toma A Lista">Toma A Lista</option>
                      <option value="MyCartão">MyCartão</option>
                      <option value="Infraestrutura & Câmeras">Infraestrutura &amp; Câmeras</option>
                      <option value="Software Sob Medida">Software Sob Medida</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Valor Estimado (R$)</label>
                    <input 
                      type="number" 
                      className="form-input" 
                      placeholder="2500"
                      value={newLead.value}
                      onChange={(e) => setNewLead({...newLead, value: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    Cadastrar Lead
                  </button>
                </form>
              </div>

              {/* Leads Table */}
              <div className="glass-card" style={{ overflowX: "auto" }}>
                <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Leads em Acompanhamento</h4>
                
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Produto</th>
                      <th>Valor</th>
                      <th>Estágio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((l) => (
                      <tr key={l.id}>
                        <td>
                          <strong style={{ display: "block", color: "#FFF" }}>{l.name}</strong>
                          <span style={{ fontSize: "0.75rem", color: "var(--clr-text-muted)" }}>{l.company} • {l.phone}</span>
                        </td>
                        <td style={{ color: "var(--clr-accent-cyan)", fontWeight: 600 }}>{l.service}</td>
                        <td style={{ fontWeight: 700, color: "var(--clr-accent-gold)" }}>R$ {l.value.toLocaleString('pt-BR')}</td>
                        <td>
                          <select 
                            className="form-select" 
                            style={{ padding: "0.3rem 0.6rem", fontSize: "0.75rem" }}
                            value={l.status}
                            onChange={(e) => updateLeadStatus(l.id, e.target.value)}
                          >
                            <option value="novo">Novo Lead</option>
                            <option value="negociacao">Em Negociação</option>
                            <option value="proposta">Proposta Enviada</option>
                            <option value="fechado">Contrato Fechado 🎉</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: Gerador de Propostas Rápidas */}
        {activeTab === "proposta" && (
          <div>
            <div className="admin-grid-2">
              
              <div className="glass-card">
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1.25rem" }}>
                  📝 Gerador de Propostas Comerciais Express
                </h3>

                <div className="form-group">
                  <label className="form-label">Nome do Cliente / Razão Social</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={propData.clientName}
                    onChange={(e) => setPropData({...propData, clientName: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">CNPJ ou CPF do Cliente</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={propData.cnpj}
                    onChange={(e) => setPropData({...propData, cnpj: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Nome do Serviço / Produto</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={propData.serviceName}
                    onChange={(e) => setPropData({...propData, serviceName: e.target.value})}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label">Valor Setup (R$)</label>
                    <input 
                      type="text" 
                      className="form-input"
                      value={propData.setupPrice}
                      onChange={(e) => setPropData({...propData, setupPrice: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mensalidade (R$)</label>
                    <input 
                      type="text" 
                      className="form-input"
                      value={propData.monthlyPrice}
                      onChange={(e) => setPropData({...propData, monthlyPrice: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Vigência (Meses)</label>
                    <input 
                      type="text" 
                      className="form-input"
                      value={propData.termMonths}
                      onChange={(e) => setPropData({...propData, termMonths: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Detalhes &amp; Garantias Adicionais</label>
                  <textarea 
                    rows={3} 
                    className="form-textarea"
                    value={propData.details}
                    onChange={(e) => setPropData({...propData, details: e.target.value})}
                  ></textarea>
                </div>
              </div>

              {/* Proposal Preview Box */}
              <div className="glass-card">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <h4 style={{ fontSize: "1.1rem" }}>Visualização da Proposta</h4>
                  <button 
                    className="btn btn-gold btn-sm"
                    onClick={() => navigator.clipboard.writeText(generatedProposalText)}
                  >
                    📋 Copiar Texto
                  </button>
                </div>

                <pre className="proposal-box">
                  {generatedProposalText}
                </pre>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: Domain Ecosystem Health */}
        {activeTab === "domains" && (
          <div>
            <div className="glass-card" style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>🌐 Monitor &amp; Links Rápidos do Ecossistema CrownTech</h3>
              <p style={{ color: "var(--clr-text-muted)", fontSize: "0.9rem" }}>
                Status de operabilidade e navegação direta para todos os 6 sites proprietários:
              </p>
            </div>

            <div className="admin-grid-3">
              
              <div className="strategy-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <strong>Toma A Lista</strong>
                  <span className="badge badge-live">Online</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", marginBottom: "1rem" }}>
                  Plataforma de eventos e listas de convidados VIP.
                </p>
                <a href="https://tomaalista.com.br/" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ width: "100%" }}>
                  Abrir tomaalista.com.br
                </a>
              </div>

              <div className="strategy-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <strong>MyCartão</strong>
                  <span className="badge badge-live">Online</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", marginBottom: "1rem" }}>
                  Cartão de visitas digital e perfil comercial NFC.
                </p>
                <a href="https://www.mycartao.com.br/app" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ width: "100%" }}>
                  Abrir mycartao.com.br
                </a>
              </div>

              <div className="strategy-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <strong>MyProjectUp</strong>
                  <span className="badge badge-gold">Enterprise</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", marginBottom: "1rem" }}>
                  Gestão corporativa de projetos e acompanhamento de horas.
                </p>
                <a href="https://www.myprojectup.com.br/" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ width: "100%" }}>
                  Abrir myprojectup.com.br
                </a>
              </div>

              <div className="strategy-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <strong>ConformaGov</strong>
                  <span className="badge badge-primary">GovTech</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", marginBottom: "1rem" }}>
                  Compliance público e gestão de conformidade legal.
                </p>
                <a href="https://www.conformagov.com.br/" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ width: "100%" }}>
                  Abrir conformagov.com.br
                </a>
              </div>

              <div className="strategy-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <strong>OrganizeUp</strong>
                  <span className="badge badge-live">Online</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", marginBottom: "1rem" }}>
                  Gestão financeira e inteligência operacional PME.
                </p>
                <a href="https://organizeup.com.br/" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ width: "100%" }}>
                  Abrir organizeup.com.br
                </a>
              </div>

              <div className="strategy-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <strong>Menuri</strong>
                  <span className="badge badge-live">Online</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--clr-text-muted)", marginBottom: "1rem" }}>
                  Cardápio digital e gestão de pedidos para restaurantes.
                </p>
                <a href="https://www.menuri.com.br/" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ width: "100%" }}>
                  Abrir menuri.com.br
                </a>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}
