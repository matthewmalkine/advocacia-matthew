"use client";

import { useEffect, useState } from "react";

const testimonials = [
  ["Excelente conhecimento jurídico. Recebemos orientações claras e uma solução eficiente para o nosso caso.", "Binford Ltd."],
  ["Uma equipe profissional e confiável, que conduziu cada detalhe com precisão, cuidado e transparência.", "Abstergo Ltd."],
  ["A abordagem estratégica e a atenção aos detalhes fizeram uma diferença decisiva no resultado.", "Acme Co."],
  ["Serviço excepcional. A estratégia adotada trouxe segurança e mudou completamente a condução do nosso caso.", "Biffco Enterprises"],
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section" aria-roledescription="carrossel" aria-label="Depoimentos de clientes">
      <div className="section-top">
        <p className="kicker light"><span>●</span> Depoimentos</p>
        <p className="testimonial-count">{String(active + 1).padStart(2, "0")} — {String(testimonials.length).padStart(2, "0")}</p>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-heading"><h2>Clientes <span>satisfeitos.</span></h2></div>
        <div className="testimonial-carousel-column">
          <div className="testimonial-stage" aria-live="polite">
            {testimonials.map(([quote, company], index) => (
              <article className={index === active ? "is-active" : ""} aria-hidden={index !== active} key={company}>
                <span className="quote-mark">“</span>
                <p>{quote}</p>
                <div><span>{String(index + 1).padStart(2, "0")}</span><strong>{company}</strong></div>
              </article>
            ))}
          </div>
          <div className="testimonial-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Depoimento anterior">←</button>
            <div>{testimonials.map(([, company], index) => <button type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Exibir depoimento de ${company}`} key={company} />)}</div>
            <button type="button" onClick={() => move(1)} aria-label="Próximo depoimento">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
