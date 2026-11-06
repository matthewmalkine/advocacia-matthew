import Image from "next/image";
import ContactForm from "./contact-form";
import MotionEffects from "./motion-effects";
import TestimonialCarousel from "./testimonial-carousel";
import {ArrowUpRight} from "lucide-react";

const date = new Date().getFullYear();
const instagramUrl = "https://www.instagram.com/drvianna/"
const linkedinUrl = "https://www.linkedin.com/in/alvaro-vianna-93b3337b/"
const whatsappUrl = "https://wa.me/5541999584252"

const pillars = [
  { number: "01", title: "Justiça", text: "Comprometidos com decisões justas e resultados confiáveis.", image: "/assets/lawcase/qimono-gavel-249201_1920.jpg" },
  { number: "02", title: "Integridade", text: "Atuação orientada por honestidade, transparência e ética.", image: "/assets/lawcase/Tnk4Lg3kRpPqwokv6Gm3XFbK8lg.png" },
  { number: "03", title: "Resultados", text: "Estratégia, experiência e determinação em cada etapa.", image: "/assets/lawcase/TqS3UseOtZCu5QAnynTXnZIP60.png" },
];

const services = [
  { number: "1/", title: "Direito Civil", text: "Regularização das relações entre pessoas, incluindo contratos, propriedades, obrigações, indenizações e responsabilidade por danos.", image: "/assets/lawcase/vzTxyib8zsujRxdOR62McXyhxhg.jpg" },
  { number: "2/", title: "Direito de Família", text: "Acompanhamento cuidadoso em divórcio, guarda, sucessões, adoção e outros temas que envolvem relações familiares.", image: "/assets/lawcase/HA37E48AB0E8Pdno3Rgfn3NpA.jpg" },
  { number: "3/", title: "Direito Empresarial", text: "Cuida das atividades das empresas e dos empresários, abrangendo abertura de empresas, contratos comerciais, sociedades, recuperação judicial e falência.", image: "/assets/lawcase/rlVzXYOqX40nNf1WB0T02RCvmL4.jpg" },
  { number: "4/", title: "Direito das Sucessões", text: "Regulamenta a transferência de bens e direitos após a morte de uma pessoa, incluindo heranças, testamentos, inventários e partilha de bens.", image: "/assets/lawcase/0GfHSok4FpwF794IxxL1j5cJOc.jpg" },
  { number: "5/", title: "Direito Desportivo", text: " Atua na defesa dos interesses de todos os envolvidos no ecossistema do esporte (como atletas, clubes, empresários e federações)..", image: "/assets/lawcase/Reunião Jurídica num Escritório Moderno.png" },
];

const steps = [
  { number: "01", title: "Consulta", text: "Entendemos o contexto e oferecemos orientação jurídica para a sua necessidade.", image: "/assets/lawcase/quyhAnP8dna0T67J0JwFQMxzAQ.png" },
  { number: "02", title: "Estratégia e planejamento", text: "Criamos um plano jurídico sob medida para alcançar seus objetivos.", image: "/assets/lawcase/PLzRhcnk3Cy347b3xT8B78Mgnc.png" },
  { number: "03", title: "Execução", text: "Conduzimos a estratégia com precisão até a resolução do seu caso.", image: "/assets/lawcase/GTxuLbMKyj4VHIR2W7hIzhTBFTw.png" },
];

const posts = [
  { tag: "Negócios", date: "12 MAI 2026", title: "Como reduzir riscos jurídicos antes de assinar um contrato", image: "/assets/lawcase/FmBH1mh1N2oC25JeIJBfAe2ZPhE.jpg" },
  { tag: "Finanças", date: "28 ABR 2026", title: "O que considerar em uma reorganização societária", image: "/assets/lawcase/zi9l7tvMWofjPzhdHi0yrHjmkHQ.jpg" },
  { tag: "Tributação", date: "09 ABR 2026", title: "Planejamento tributário: prevenção, clareza e segurança", image: "/assets/lawcase/jiTLFEV4a4qaz2NNwdcRqyNjA.jpg" },
];

function PillarIcon({ number }: { number: string }) {
  if (number === "01") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.7 5.3 4 4m-6.2-1.8 4 4m-8.8 1.2 3.6 3.6m-5.8.2 3 3m1-8.8 5.2-5.2 4 4-5.2 5.2m-6 0 5-5 4 4-5 5m-7.5 5.8 4.5-4.5 3 3-4.5 4.5z" /></svg>;
  }
  if (number === "02") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 19 6v5.2c0 4.6-2.9 7.5-7 9.3-4.1-1.8-7-4.7-7-9.3V6l7-2.5Z" /><path d="m9 12 2 2 4-4" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></svg>;
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <header className="header">
        <a className="logo" href="#inicio" aria-label="Lawcase — início"><Image className="logo-image" src="/assets/lawcase/Logótipo de Advogado com Balança.png" alt="Lawcase" width={150} height={100} priority /></a>
        <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a></nav>
        <a className="nav-button" href="#contato">Fale conosco <ArrowUpRight /></a>
      </header>

      <section className="hero" id="inicio">
        <Image className="hero-image" src="/assets/lawcase/t6khcfc7c4GsuUlYG7bfTPKye18.png" alt="Interior de um escritório de advocacia" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="kicker light">Escritório de advocacia · Curitiba</p>
          <h1><span className="hero-line"><span>Defendendo a justiça,</span></span><span className="hero-line"><span>entregando <em>resultados</em></span></span></h1>
          <div className="hero-footer"><p>Soluções jurídicas estratégicas, atendimento próximo e compromisso com o que realmente importa para você.</p><a className="primary-button" href="#contato">Fale conosco <ArrowUpRight /></a></div>
        </div>
      </section>

      <section className="about section about-reveal" id="sobre">
        <div className="section-top"><p className="kicker"><span>●</span> Sobre nós</p><a className="line-link" href="#contato">Fale conosco <ArrowUpRight /></a></div>
        <div className="about-heading"><h2>Dedicados à justiça,<br />movidos pela <span>integridade.</span></h2><p>Na Lawcase, oferecemos soluções jurídicas especializadas e adequadas às suas necessidades. Nossa equipe experiente permanece ao seu lado em cada etapa, sempre com foco em justiça, integridade e resultados.</p></div>
        <div className="pillars">{pillars.map((item) => <article key={item.title}><Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /><div className="card-shade" /><span className="card-number">{item.number}</span><div className="card-copy"><span className="card-icon"><PillarIcon number={item.number} /></span><h3>{item.title}</h3><p>{item.text}</p></div><span className="card-ArrowUpRight">↗</span></article>)}</div>
      </section>

      <section className="why section">
        <div className="why-grid">
          <div><p className="kicker light"><span>●</span> Por que escolher a Advocacia</p><h2>Experiência jurídica com soluções <span>personalizadas.</span></h2></div>
          <div className="why-copy"><p>Oferecemos uma gama completa de serviços jurídicos, com uma abordagem clara e cuidadosa para atender pessoas e empresas.</p><a className="primary-button peach" href="#contato">Fale conosco <ArrowUpRight /></a></div>
        </div>
        <div className="stats"><div><strong>20<span>+</span></strong><p>Anos de experiência jurídica</p></div><div><strong>35<span>+</span></strong><p>Clientes atendidos</p></div><div><strong>18<span>+</span></strong><p>Reconhecimentos recebidos</p></div></div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-top"><p className="kicker"><span>●</span> Nossos serviços</p></div>
        <h2 className="section-title">Conheça nossas<br /><span>áreas de atuação</span></h2>
        <div className="service-list">{services.map((item) => <article key={item.number}><span className="service-number">{item.number}</span><div className="service-image"><Image src={item.image} alt="" fill sizes="180px" /></div><h3>{item.title}</h3><p>{item.text}</p><a href="#contato" aria-label={`Saiba mais sobre ${item.title}`}>↗</a></article>)}</div>
      </section>

      <section className="professional section" id="profissional">
        <div className="professional-main">
          <div className="professional-copy">
            <p className="kicker"> <span>●</span>Sobre mim</p>
            <h2>Dr. Álvaro <span>Vianna.</span></h2>
            <div className="professional-rule" />
            <p>Advogado com mais de 20 anos de experiência atuando nas áreas de Direito Civil, Família, Sucessões, Obrigações, Contratos e Direito Desportivo.</p>
            <p>Possui experiência em demandas relacionadas a divórcios, guarda de filhos, pensão alimentícia, inventários, partilhas de bens, contratos e responsabilidade civil.</p>
            <p>Com atuação pautada pela ética, transparência e comprometimento, oferecendo soluções jurídicas estratégicas e personalizadas, com foco na proteção dos direitos e interesses de seus clientes.</p>
            <strong></strong>
          </div>

          <div className="professional-portrait">
            <Image
              src="/assets/lawcase/Smiling Professional in Navy Suit.png"
              alt="Retrato profissional do advogado Álvaro Vianna"
              fill
              sizes="(max-width: 700px) calc(100vw - 40px), 48vw"
            />
          </div>
        </div>

        <div className="professional-credentials">
          <div><span>Formação</span><p>Bacharel em Direito na PUCPR</p></div>
          <div><span>Atuação</span><p>Civil e Família</p></div>
          <div><span>Registro</span><p>OAB/PR nº 45.678</p></div>
        </div>
      </section>

      <TestimonialCarousel />

      <section className="faq section">
        <div className="faq-title"><p className="kicker"><span>●</span> Perguntas frequentes</p><h2>Informação e<br /><span>clareza</span></h2></div>
        <div className="faq-list">
          <details open><summary>Que tipos de casos vocês atendem?<span>＋</span></summary><p>Atuamos em direito cilil, familiar, empresarial, sussetivo e desportivo.</p></details>
          <details><summary>Quanto tempo leva para resolver um caso?<span>＋</span></summary><p>O prazo depende da complexidade e do caminho escolhido. Após a análise inicial, apresentamos os cenários e as etapas prováveis com transparência.</p></details>
          <details><summary>Vocês ajudam a elaborar documentos jurídicos?<span>＋</span></summary><p>Sim. Elaboramos e revisamos contratos, notificações, acordos e outros documentos, sempre adequados aos objetivos e riscos envolvidos.</p></details>
          <details><summary>O que devo levar à primeira consulta?<span>＋</span></summary><p>Separe documentos, mensagens, contratos e uma breve cronologia dos fatos. Caso algo esteja faltando, orientaremos o que precisa ser reunido.</p></details>
          <details><summary>Atendem pessoas e empresas?<span>＋</span></summary><p>Sim. Nosso atendimento contempla clientes individuais, famílias, profissionais e empresas de diferentes portes.</p></details>
        </div>
      </section>

      <section className="cta" id="contato">
        <Image src="/assets/lawcase/HCPDxtAQXS7vgrwsd6svNhxA.png" alt="" fill sizes="100vw" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <div className="cta-copy"><p className="kicker light"><span>●</span> Entre em contato</p><h2>Estamos prontos<br />para te <span>atender.</span></h2><div className="cta-contact-info"><a href="mailto:contato@advocacia.com.br"><span>E-mail</span>alvarovianna@hotmail.com</a><address><span>Endereço</span>Rua Marechal Deodoro, 500, Centro, Curitiba PR, 80010-911, Brasil</address></div></div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="footer-main"><div className="footer-intro"><a className="logo" href="#inicio" aria-label="Lawcase — início"><Image className="logo-image" src="/assets/lawcase/Logótipo de Advogado com Balança.png" alt="Lawcase" width={150} height={100} /></a><h2>Conhecimento jurídico e soluções personalizadas.</h2></div><div className="footer-column"><span>Navegação</span><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a></div><div className="footer-column"><span>Social</span><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
        <div className="footer-bottom"><span>© {date} Advocacia Álvaro D. de C. Vianna Neto</span><span></span><span>Curitiba · Brasil</span></div>
      </footer>
      <a className="whatsapp-widget" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Fale conosco pelo WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.4Zm-8.4 18.1h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.2 6.4 6.6 2 12.1 2c2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.5 9.7-9.9 9.7Zm5.4-7.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.1-.6-1.5-.9-2-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.8 4.3 1.8.8 2.5.9 3.4.7.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.2-.1-.4-.2-.7-.3Z" /></svg>
      </a>
    </main>
  );
}
