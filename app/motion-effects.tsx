"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section-top",
  ".about-heading",
  ".section-title",
  ".faq-title",
  ".pillars article",
  ".service-list article",
  ".steps article",
  ".faq details",
  ".post-grid article",
  ".footer-main > *",
].join(",");

export default function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    document.documentElement.classList.add("motion-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors)).filter(
      (element) => !element.closest(".about") && !element.closest(".testimonials"),
    );

    const aboutText = Array.from(
      document.querySelectorAll<HTMLElement>(".about .section-top, .about .about-heading"),
    );
    const aboutCards = Array.from(document.querySelectorAll<HTMLElement>(".about .pillars article"));

    const aboutTextObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-about-visible");
          aboutTextObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    const aboutCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-panel-visible");
          aboutCardObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    aboutText.forEach((element) => aboutTextObserver.observe(element));
    aboutCards.forEach((element) => aboutCardObserver.observe(element));

    const contactForm = document.querySelector<HTMLElement>(".contact-form");
    const contactFormObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-form-visible");
          contactFormObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    if (contactForm) contactFormObserver.observe(contactForm);

    const aboutFallback = window.setTimeout(() => {
      aboutText.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) element.classList.add("is-about-visible");
      });
      aboutCards.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) element.classList.add("is-panel-visible");
      });
      if (contactForm) {
        const rect = contactForm.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) contactForm.classList.add("is-form-visible");
      }
    }, 800);

    elements.forEach((element) => {
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((child) => child.matches(revealSelectors))
        : [];
      const index = Math.max(0, siblings.indexOf(element));
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 120, 360)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    const counters = Array.from(document.querySelectorAll<HTMLElement>(".stats strong"));
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const target = Number.parseInt(element.textContent || "0", 10);
          const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
          const startedAt = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / 1300, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            if (textNode) textNode.textContent = String(Math.round(target * eased));
            if (progress < 1) window.requestAnimationFrame(tick);
          };
          window.requestAnimationFrame(tick);
          counterObserver.unobserve(element);
        });
      },
      { threshold: 0.6 },
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const hero = document.querySelector<HTMLElement>(".hero");
      const cta = document.querySelector<HTMLElement>(".cta");
      const header = document.querySelector<HTMLElement>(".header");
      if (header) header.classList.toggle("is-scrolled", scrollY > 50);
      if (hero) hero.style.setProperty("--hero-parallax", `${Math.min(scrollY * 0.12, 90)}px`);
      if (cta) {
        const rect = cta.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * 0.045;
        cta.style.setProperty("--cta-parallax", `${Math.max(-25, Math.min(offset, 55))}px`);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      aboutTextObserver.disconnect();
      aboutCardObserver.disconnect();
      contactFormObserver.disconnect();
      counterObserver.disconnect();
      window.clearTimeout(aboutFallback);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
