import Image from "next/image";
import ContactForm from "./contact-form";
import MotionEffects from "./motion-effects";
import TestimonialCarousel from "./testimonial-carousel";

const pillars = [
  { number: "01", title: "Justiça", text: "Comprometidos com decisões justas e resultados confiáveis.", image: "/assets/lawcase/57bTNKjv9qxZyS3y3Um9B5nCRFg.png" },
  { number: "02", title: "Integridade", text: "Atuação orientada por honestidade, transparência e ética.", image: "/assets/lawcase/Tnk4Lg3kRpPqwokv6Gm3XFbK8lg.png" },
  { number: "03", title: "Resultados", text: "Estratégia, experiência e determinação em cada etapa.", image: "/assets/lawcase/TqS3UseOtZCu5QAnynTXnZIP60.png" },
];

const services = [
  { number: "1/", title: "Direito Tributário", text: "Orientação sobre tributos, planejamento e conformidade para proteger pessoas e empresas e tornar decisões financeiras mais seguras.", image: "/assets/lawcase/vzTxyib8zsujRxdOR62McXyhxhg.jpg" },
  { number: "2/", title: "Direito de Família", text: "Acompanhamento cuidadoso em divórcio, guarda, sucessões, adoção e outros temas que envolvem relações familiares.", image: "/assets/lawcase/HA37E48AB0E8Pdno3Rgfn3NpA.jpg" },
  { number: "3/", title: "Direito Imobiliário", text: "Assessoria em compra, venda, locação, regularização e disputas relativas a imóveis, com segurança em cada negociação.", image: "/assets/lawcase/0GfHSok4FpwF794IxxL1j5cJOc.jpg" },
  { number: "4/", title: "Direito do Trabalho", text: "Soluções preventivas e contenciosas para relações de trabalho equilibradas, protegendo direitos e reduzindo riscos.", image: "/assets/lawcase/rlVzXYOqX40nNf1WB0T02RCvmL4.jpg" },
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

function Arrow() { return <span aria-hidden="true">↗</span>; }

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
        <a className="logo" href="#inicio" aria-label="Lawcase — início"><span className="logo-icon">L</span><span>LOGO</span></a>
        <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#blog">Blog</a></nav>
        <a className="nav-button" href="#contato">Fale conosco <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <Image className="hero-image" src="/assets/lawcase/t6khcfc7c4GsuUlYG7bfTPKye18.png" alt="Interior de um escritório de advocacia" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="kicker light">Escritório de advocacia · São Paulo</p>
          <h1><span className="hero-line"><span>Defendendo a justiça,</span></span><span className="hero-line"><span>entregando <em>resultados</em></span></span></h1>
          <div className="hero-footer"><p>Soluções jurídicas estratégicas, atendimento próximo e compromisso com o que realmente importa para você.</p><a className="primary-button" href="#contato">Fale conosco <Arrow /></a></div>
        </div>
      </section>

      <section className="about section about-reveal" id="sobre">
        <div className="section-top"><p className="kicker"><span>●</span> Sobre nós</p><a className="line-link" href="#contato">Fale conosco <Arrow /></a></div>
        <div className="about-heading"><h2>Dedicados à justiça,<br />movidos pela <span>integridade.</span></h2><p>Na Lawcase, oferecemos soluções jurídicas especializadas e adequadas às suas necessidades. Nossa equipe experiente permanece ao seu lado em cada etapa, sempre com foco em justiça, integridade e resultados.</p></div>
        <div className="pillars">{pillars.map((item) => <article key={item.title}><Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /><div className="card-shade" /><span className="card-number">{item.number}</span><div className="card-copy"><span className="card-icon"><PillarIcon number={item.number} /></span><h3>{item.title}</h3><p>{item.text}</p></div><span className="card-arrow">↗</span></article>)}</div>
      </section>

      <section className="why section">
        <div className="why-grid">
          <div><p className="kicker light"><span>●</span> Por que escolher a Advocacia</p><h2>Experiência jurídica com soluções <span>personalizadas.</span></h2></div>
          <div className="why-copy"><p>Oferecemos uma gama completa de serviços jurídicos, com uma abordagem clara e cuidadosa para atender pessoas e empresas.</p><a className="primary-button peach" href="#contato">Fale conosco <Arrow /></a></div>
        </div>
        <div className="stats"><div><strong>10<span>+</span></strong><p>Anos de experiência jurídica</p></div><div><strong>35<span>+</span></strong><p>Clientes atendidos</p></div><div><strong>18<span>+</span></strong><p>Reconhecimentos recebidos</p></div></div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-top"><p className="kicker"><span>●</span> Nossos serviços</p></div>
        <h2 className="section-title">Conheça nossas<br /><span>áreas de atuação</span></h2>
        <div className="service-list">{services.map((item) => <article key={item.number}><span className="service-number">{item.number}</span><div className="service-image"><Image src={item.image} alt="" fill sizes="180px" /></div><h3>{item.title}</h3><p>{item.text}</p><a href="#contato" aria-label={`Saiba mais sobre ${item.title}`}>↗</a></article>)}</div>
      </section>

      <section className="professional section" id="profissional">
        <div className="professional-main">
          <div className="professional-copy">
            <p className="kicker"><span>01 /</span> Sobre mim</p>
            <h2>Dr. Rafael <span>Almeida.</span></h2>
            <div className="professional-rule" />
            <p>Advogado com 5 anos de experiência atuando nas áreas de Direito Civil e Direito de Família.</p>
            <p>Possui experiência em demandas relacionadas a divórcios, guarda de filhos, pensão alimentícia, inventários, partilhas de bens, contratos e responsabilidade civil.</p>
            <p>atuação é pautada pela ética, transparência e comprometimento, oferecendo soluções jurídicas estratégicas e personalizadas, com foco na proteção dos direitos e interesses de seus clientes.</p>
            <strong>Advogado civilista e de família</strong>
          </div>

          <div className="professional-portrait">
            <Image
              src="/assets/lawcase/rafael-almeida.png"
              alt="Retrato profissional do advogado Rafael Almeida"
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
          <details open><summary>Que tipos de casos vocês atendem?<span>＋</span></summary><p>Atuamos em direito tributário, família, imobiliário, trabalhista e consultoria empresarial, tanto de forma preventiva quanto contenciosa.</p></details>
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
          <div className="cta-copy"><p className="kicker light"><span>●</span> Entre em contato</p><h2>Nossa equipe está pronta<br />para responder às suas <span>perguntas.</span></h2></div>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="footer-main"><div className="footer-intro"><a className="logo" href="#inicio"><span className="logo-icon">L</span><span>LOGO</span></a><h2>Conhecimento jurídico e soluções personalizadas.</h2></div><div className="footer-column"><span>Navegação</span><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a><a href="#blog">Blog</a></div><div className="footer-column"><span>Social</span><a href="#contato">LinkedIn ↗</a><a href="#contato">Instagram ↗</a><a href="#contato">X ↗</a></div></div>
        <div className="footer-bottom"><span>© 2026 Advocacia Template</span><span>Termos e condições</span><span>São Paulo · Brasil</span></div>
      </footer>
    </main>
  );
}
