// Conteúdo institucional do site. Tudo aqui precisa ser verdadeiro e verificável:
// nada de números inventados, depoimentos, logos de clientes ou promessas que não existem
// (o site já foi sinalizado pelo Google por padrões enganosos — ver commit 3d4ab70).
// As descrições dos produtos seguem o que cada site de produto diz sobre si mesmo.

export const SITE_URL = "https://www.crowntech.com.br";

export const COMPANY = {
  name: "CrownTech",
  legalName: "CROWN TECH LTDA",
  cnpj: "65.586.793/0001-18",
  city: "Maricá",
  state: "RJ",
  email: "contato@crowntech.com.br",
};

// WhatsApp só aparece se houver número real configurado no build
// (NEXT_PUBLIC_WHATSAPP_NUMBER, só dígitos com DDI: 55DDDNUMERO).
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");

export const SITE_DESCRIPTION =
  "Empresa de tecnologia de Maricá/RJ: produtos digitais próprios, como CrownTech Marketing, Menuri e Toma a Lista!, e software, redes e infraestrutura de TI sob medida.";

// status: "live" (disponível), "launch" (lançamento), "dev" (em desenvolvimento)
export const FEATURED_PRODUCT = {
  id: "marketing",
  name: "CrownTech Marketing",
  category: "Redes sociais para pequenos negócios",
  status: "launch",
  statusLabel: "Lançamento",
  url: "https://marketing.crowntech.com.br",
  domain: "marketing.crowntech.com.br",
  summary:
    "Automação de redes sociais para pequenos negócios. A plataforma cria imagens e vídeos com inteligência artificial a partir da sua marca, agenda os posts no Facebook, no Instagram e no TikTok e manda a prévia de cada um para o seu Telegram antes do horário.",
  points: [
    "Facebook e Instagram: vete o post ou publique na hora, direto pelo Telegram.",
    "TikTok: o vídeo vai para os rascunhos do seu app e você publica com um toque.",
    "Também monta posts com as suas fotos e vídeos, com legendas sugeridas.",
  ],
  price: "Planos a partir de R$ 79/mês",
  note: "Sem fidelidade. Primeiras vagas com configuração feita pela nossa equipe, combinadas por contato.",
  // Versão curta para o cartão na grade de produtos (o texto completo fica no destaque).
  cardSummary:
    "Cria imagens e vídeos com IA, agenda posts no Facebook, no Instagram e no TikTok e manda a prévia de cada um para o seu Telegram.",
  cardPoints: ["Planos a partir de R$ 79/mês", "Primeiras vagas por contato"],
};

export const PRODUCTS = [
  {
    id: "menuri",
    name: "Menuri",
    category: "Cardápio digital",
    status: "dev",
    statusLabel: "Em desenvolvimento",
    url: "https://www.menuri.com.br/",
    domain: "menuri.com.br",
    summary:
      "Cardápio digital com link próprio do restaurante. O cliente monta o pedido e ele chega pronto no WhatsApp e no painel, sem comissão por pedido.",
    points: ["Pagamento no Pix ou na entrega", "Sem app e sem cadastro obrigatório para o cliente"],
  },
  {
    id: "tomaalista",
    name: "Toma a Lista!",
    category: "Churrascos e eventos",
    status: "live",
    statusLabel: "Disponível",
    url: "https://tomaalista.com.br/",
    domain: "tomaalista.com.br",
    summary:
      "Listas colaborativas para churrasco, festa e evento: cada convidado marca o que vai levar e nenhum item se repete. O link vai pelo WhatsApp e ninguém precisa instalar nada.",
    points: ["Templates prontos de churrasco e festa", "R$ 2,50 por lista, sem mensalidade"],
  },
  {
    id: "mycartao",
    name: "MyCartão",
    category: "Cartão de visita digital",
    status: "live",
    statusLabel: "Disponível",
    url: "https://www.mycartao.com.br/",
    domain: "mycartao.com.br",
    summary:
      "Cartão de presença digital: um link com foto, contatos, portfólio e QR Code. Você atualiza uma vez e ele fica certo em todo lugar onde foi compartilhado.",
    points: ["Plano Free e plano Pro", "QR Code e salvar contato (vCard)"],
  },
  {
    id: "myprojectup",
    name: "MyProjectUp",
    category: "Gestão de projetos",
    status: "live",
    statusLabel: "Disponível",
    url: "https://www.myprojectup.com.br/",
    domain: "myprojectup.com.br",
    summary:
      "Gestão de projetos, tarefas e orçamentos: Kanban, calendário e controle de horas, com workspaces para times.",
    points: ["Conta grátis para começar", "API para integrar com outros sistemas"],
  },
  {
    id: "organizeup",
    name: "OrganizeUP",
    category: "Finanças pessoais",
    status: "live",
    statusLabel: "Disponível",
    url: "https://organizeup.com.br/",
    domain: "organizeup.com.br",
    summary:
      "Planejamento financeiro pessoal: rendas e dívidas, carteira de investimentos e dividendos, projeção de aposentadoria e plano compartilhado com a família.",
    points: ["Núcleo gratuito", "Módulos avulsos com 7 dias de teste"],
  },
  {
    id: "conformagov",
    name: "ConformaGov",
    category: "Setor público",
    status: "dev",
    statusLabel: "Em desenvolvimento",
    url: "https://www.conformagov.com.br/",
    domain: "conformagov.com.br",
    summary:
      "Conformidade de TI para órgãos públicos: transforma o questionário de governança do Tribunal de Contas em um fluxo guiado, com diagnóstico, plano de ação, minutas de normativos e evidências.",
    points: ["Lista de acesso antecipado aberta"],
  },
  {
    id: "imperio",
    name: "Império de Bolso",
    category: "Jogo para celular · CrownTech Games",
    status: "live",
    statusLabel: "Grátis no iPhone",
    url: "https://imperio.crowntech.com.br",
    domain: "imperio.crowntech.com.br",
    summary:
      "Jogo de construir negócios: comece com um carrinho de água na praia, contrate ajudantes e expanda o império por 8 mapas, da praia ao espaço.",
    points: ["App Store, com compras opcionais", "Google Play em breve"],
  },
];

export const ALL_PRODUCTS = [FEATURED_PRODUCT, ...PRODUCTS];

export const SERVICES = [
  {
    id: "software",
    icon: "code",
    title: "Software sob medida",
    text: "Sistemas web, APIs, aplicativos e integrações com bancos de dados e serviços em nuvem, feitos pela mesma equipe que constrói os nossos produtos.",
  },
  {
    id: "cftv",
    icon: "camera",
    title: "Câmeras IP e CFTV",
    text: "Projetos de segurança eletrônica com câmeras IP, detecção de movimento e gravação redundante.",
  },
  {
    id: "redes",
    icon: "network",
    title: "Cabeamento estruturado e redes",
    text: "Organização de racks, cabeamento Cat6 e fibra óptica, roteamento e certificação da rede física da empresa.",
  },
  {
    id: "wifi",
    icon: "wifi",
    title: "Wi-Fi para hotéis e pousadas",
    text: "Access points por quarto e por área comum, com gerenciamento centralizado e portal de acesso personalizado.",
  },
];

// Opções do formulário de contato (o assunto do e-mail).
export const CONTACT_TOPICS = [
  "CrownTech Marketing",
  "Software sob medida",
  "Câmeras IP e CFTV",
  "Cabeamento estruturado e redes",
  "Wi-Fi para hotéis e pousadas",
  "Um produto CrownTech (Menuri, Toma a Lista!, MyCartão…)",
  "Outro assunto",
];
