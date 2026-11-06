"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const whatsappMessage = `Olá, meu nome é ${name}, estou contatando para tratar do assunto ${topic}. ${message}.`;
    const whatsappUrl = `https://wa.me/5541999584252?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} onChange={() => setSent(false)}>
      <div className="contact-form-row">
        <label>
          <span>Nome</span>
          <input name="name" type="text" autoComplete="name" placeholder="Seu nome" required />
        </label>
        <label>
          <span>Assunto</span>
          <input name="topic" type="text" placeholder="Assunto a conversar" required />
        </label>
      </div>
      <label>
        <span>Como podemos ajudar?</span>
        <textarea name="message" rows={5} placeholder="Conte brevemente o que você precisa" required />
      </label>
      <button type="submit">Enviar <span aria-hidden="true">↗</span></button>
      <p className="contact-form-status" aria-live="polite">
        {sent ? "Mensagem preparada. Continue o envio pelo WhatsApp." : "Seus dados serão usados apenas para este atendimento."}
      </p>
    </form>
  );
}
