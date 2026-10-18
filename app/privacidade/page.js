import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { openGraphBase } from "../_lib/seo";

const DESCRIPTION = "Como a CROWN TECH LTDA trata dados pessoais neste site (LGPD).";

export const metadata = {
  title: "Política de Privacidade",
  description: DESCRIPTION,
  alternates: { canonical: "/privacidade" },
  openGraph: {
    ...openGraphBase,
    title: "Política de Privacidade | CrownTech",
    description: DESCRIPTION,
    url: "/privacidade",
  },
};

export default function Privacidade() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="wrap prose">
        <h1>Política de Privacidade</h1>
        <p className="muted">Última atualização: 13 de outubro de 2026</p>

        <h2>Quem somos</h2>
        <p>
          Este site é da <strong>CROWN TECH LTDA</strong>, CNPJ 65.586.793/0001-18, com sede em Maricá/RJ.
          Contato e assuntos de privacidade:{" "}
          <a href="mailto:contato@crowntech.com.br">contato@crowntech.com.br</a>.
        </p>

        <h2>Que dados este site trata</h2>
        <ul>
          <li>
            <strong>Formulário de contato:</strong> o site não armazena nem envia os dados digitados. O botão
            apenas abre o seu aplicativo de e-mail com a mensagem pronta; só recebemos o que você decidir
            enviar.
          </li>
          <li>
            <strong>E-mails recebidos:</strong> usamos nome, e-mail, telefone e a mensagem somente para
            responder ao seu pedido e preparar propostas (LGPD, art. 7º, V — procedimentos preliminares a
            contrato).
          </li>
          <li>
            <strong>Registros de acesso:</strong> o servidor registra endereço IP, data e hora das visitas por
            segurança e por exigência do Marco Civil da Internet (art. 15), guardados por 6 meses.
          </li>
        </ul>
        <p>Não usamos cookies de rastreamento nem vendemos dados.</p>

        <h2>Seus direitos</h2>
        <p>
          Você pode pedir confirmação, acesso, correção ou exclusão dos seus dados (LGPD, art. 18) pelo e-mail{" "}
          <a href="mailto:contato@crowntech.com.br">contato@crowntech.com.br</a>. Respondemos em até 15 dias.
        </p>

        <h2>Produtos</h2>
        <p>
          Cada produto CrownTech (por exemplo, o jogo{" "}
          <a href="https://imperio.crowntech.com.br">Império de Bolso</a>) tem a sua própria política de
          privacidade, publicada no site do produto.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
