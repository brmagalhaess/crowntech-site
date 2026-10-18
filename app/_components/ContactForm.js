"use client";

import { useState } from "react";

// O site não guarda nem envia dados: o formulário só monta a mensagem e abre o e-mail
// (ou o WhatsApp, se configurado) do próprio visitante, que decide enviar.
// Sem JavaScript, o próprio <form action="mailto:..."> abre o e-mail com os campos.

function buildMessage(fd) {
  const lines = [
    "Olá, CrownTech!",
    "",
    `Assunto: ${fd.get("assunto")}`,
    `Nome: ${fd.get("nome")}`,
    `E-mail: ${fd.get("email")}`,
  ];
  const phone = String(fd.get("telefone") || "").trim();
  if (phone) lines.push(`Telefone: ${phone}`);
  lines.push("", String(fd.get("mensagem") || "").trim());
  return lines.join("\n");
}

export default function ContactForm({ email, whatsapp, topics }) {
  const [opened, setOpened] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const subject = `Contato pelo site: ${fd.get("assunto")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      buildMessage(fd)
    )}`;
    setOpened("email");
  }

  function handleWhatsApp(event) {
    const form = event.currentTarget.form;
    if (!form.reportValidity()) return;
    const text = encodeURIComponent(buildMessage(new FormData(form)));
    window.open(`https://wa.me/${whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setOpened("whatsapp");
  }

  return (
    <form
      className="contact-form"
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
    >
      <h3 className="form-title">Escreva para a gente</h3>

      <div className="field">
        <label htmlFor="cf-nome">Nome</label>
        <input id="cf-nome" name="nome" type="text" autoComplete="name" required />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-email">E-mail</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="cf-telefone">
            Telefone <span className="optional">(opcional)</span>
          </label>
          <input id="cf-telefone" name="telefone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-assunto">Assunto</label>
        <select id="cf-assunto" name="assunto" defaultValue={topics[0]}>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-mensagem">Mensagem</label>
        <textarea
          id="cf-mensagem"
          name="mensagem"
          rows={4}
          required
          placeholder="Conte em poucas linhas o que você precisa."
        />
      </div>

      <p className="form-note">
        Este site não armazena o que você digita: o botão abre o seu aplicativo de e-mail com a mensagem
        pronta para {email}, e você decide se envia. Veja a <a href="/privacidade">Política de Privacidade</a>.
      </p>

      <div className="form-actions">
        <button type="submit" className="button button-primary">
          Abrir no meu e-mail
        </button>
        {whatsapp ? (
          <button type="button" className="button button-ghost" onClick={handleWhatsApp}>
            Enviar pelo WhatsApp
          </button>
        ) : null}
      </div>

      <p className="form-status" role="status">
        {opened === "email" ? (
          <>
            Abrimos o seu e-mail com a mensagem. Se ele não abriu, escreva direto para{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </>
        ) : opened === "whatsapp" ? (
          "Abrimos o WhatsApp em outra aba com a mensagem pronta."
        ) : null}
      </p>
    </form>
  );
}
