"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
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
          <span>Telefone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" required />
        </label>
      </div>
      <label>
        <span>Como podemos ajudar?</span>
        <textarea name="message" rows={5} placeholder="Conte brevemente o que você precisa" required />
      </label>
      <button type="submit">Enviar <span aria-hidden="true">↗</span></button>
      <p className="contact-form-status" aria-live="polite">
        {sent ? "Mensagem preparada com sucesso. Em breve entraremos em contato." : "Seus dados serão usados apenas para este atendimento."}
      </p>
    </form>
  );
}
