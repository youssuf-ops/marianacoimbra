"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  MessageCircle,
  Sparkles,
  Gem,
  GraduationCap,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/351000000000";
const INSTAGRAM_PESSOAL = "https://instagram.com/marianacoimbranails";
const INSTAGRAM_REVENDA = "https://instagram.com/revendahitnails_castelobranco";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICOS = [
  {
    title: "Unhas de Gel",
    desc: "Acabamento impecável e duradouro. Ideal para quem quer mãos sempre cuidadas, com brilho natural e resistência a longo prazo.",
    badge: null,
  },
  {
    title: "Acrílico e Acrigel",
    desc: "Combinação perfeita entre resistência e elegância. Perfeito para alongamentos e formas personalizadas com grande durabilidade.",
    badge: null,
  },
  {
    title: "Formações Online",
    desc: "Aprende a dominar técnicas profissionais no conforto de casa. Formação disponível para todos os níveis.",
    badge: "Wet on Wet — 35€",
  },
];

// 12 fotos divididas em 2 grupos de 6
const GALERIA_A = [
  { src: "/images/g1.jpg", ratio: "3/4" },
  { src: "/images/g2.jpg", ratio: "4/3" },
  { src: "/images/g3.jpg", ratio: "3/4" },
  { src: "/images/g4.jpg", ratio: "4/3" },
  { src: "/images/g5.jpg", ratio: "3/4" },
  { src: "/images/g6.jpg", ratio: "4/3" },
];

const GALERIA_B = [
  { src: "/images/g7.jpg", ratio: "4/3" },
  { src: "/images/g8.jpg", ratio: "3/4" },
  { src: "/images/g9.jpg", ratio: "4/3" },
  { src: "/images/g10.jpg", ratio: "3/4" },
  { src: "/images/g11.jpg", ratio: "4/3" },
  { src: "/images/g12.jpg", ratio: "3/4" },
];

const TAGS = [
  "Hit Nails Reseller",
  "+5 anos experiência",
  "Formadora",
  "Castelo Branco",
];

const ICONS: Record<string, React.ReactNode> = {
  "Unhas de Gel": <Sparkles size={22} />,
  "Acrílico e Acrigel": <Gem size={22} />,
  "Formações Online": <GraduationCap size={22} />,
};

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [galeriaAtiva, setGaleriaAtiva] = useState<"A" | "B">("A");
  const [galeriaVisible, setGaleriaVisible] = useState(true);

  // Nav scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Rotação automática da galeria (30s)
  const trocarGaleria = useCallback(() => {
    setGaleriaVisible(false);
    setTimeout(() => {
      setGaleriaAtiva((prev) => (prev === "A" ? "B" : "A"));
      setGaleriaVisible(true);
    }, 600);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(trocarGaleria, 30000);
    };

    const eventos = [
      "mousemove",
      "mousedown",
      "keypress",
      "touchstart",
      "scroll",
      "click",
    ];
    eventos.forEach((e) =>
      window.addEventListener(e, resetTimer, { passive: true }),
    );

    timer = setTimeout(trocarGaleria, 30000);

    return () => {
      clearTimeout(timer);
      eventos.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [trocarGaleria]);

  const galeriaActual = galeriaAtiva === "A" ? GALERIA_A : GALERIA_B;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    // Nota: Adicione aqui a lógica real de envio (API route) se necessário
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F6" }}>
      {/* NAV */}
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(255,248,246,0.96)"
            : "rgba(0,0,0,0.25)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 32px rgba(26,26,26,0.08)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#hero"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: scrolled ? "#1A1A1A" : "white",
              fontSize: "1.25rem",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Mariana Coimbra{" "}
            <em
              style={{
                color: scrolled ? "#C9A08A" : "rgba(255,255,255,0.8)",
                fontWeight: 400,
              }}
            >
              Nails
            </em>
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-widest transition-all hover:opacity-100"
                style={{
                  color: scrolled ? "#1A1A1A" : "white",
                  opacity: 0.85,
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-6 py-2.5 text-xs uppercase tracking-widest text-white transition-all hover:opacity-80"
              style={{
                backgroundColor: scrolled ? "#1A1A1A" : "rgba(255,255,255,0.2)",
                border: scrolled ? "none" : "1px solid rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
            >
              Marcar
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#1A1A1A" : "white",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div
            style={{
              backgroundColor: "#FFF8F6",
              borderTop: "1px solid #F2D4D0",
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-xs uppercase tracking-widest"
                style={{ color: "#1A1A1A", textDecoration: "none" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="block px-6 py-4 text-xs uppercase tracking-widest"
              style={{ color: "#C9A08A", textDecoration: "none" }}
            >
              Marcar Agora →
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#f9ede8" }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Mariana Coimbra Nails — produtos de manicure"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          data-reveal
          className="absolute left-0 right-0 mx-auto flex w-fit"
          style={{
            top: "5rem",
            zIndex: 20,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "999px",
            padding: "0.5rem 1.25rem",
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          <Sparkles size={12} style={{ color: "#F2D4D0" }} />
          Castelo Branco · Portugal
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h1
            data-reveal
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              lineHeight: 1.05,
              color: "white",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              animationDelay: "100ms",
            }}
          >
            Unhas que{" "}
            <em
              style={{ fontStyle: "italic", color: "#F2D4D0", fontWeight: 400 }}
            >
              falam
            </em>
            <br />
            por{" "}
            <em
              style={{ fontStyle: "italic", color: "#F2D4D0", fontWeight: 400 }}
            >
              ti.
            </em>
          </h1>
          <p
            data-reveal
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              animationDelay: "200ms",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
            }}
          >
            Gel · Acrílico · Acrigel — manicure de assinatura em Castelo Branco,
            criada com mãos de artista.
          </p>
          <div
            data-reveal
            className="flex flex-wrap items-center justify-center gap-6"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-white transition-all hover:bg-[#C9A08A]"
              style={{
                backgroundColor: "#1A1A1A",
                textDecoration: "none",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              <MessageCircle size={16} />
              Marcar Agora
            </a>
            <a
              href="#galeria"
              className="transition-opacity hover:opacity-100"
              style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Ver Galeria
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.5)" }} />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="py-24 md:py-32"
        style={{ backgroundColor: "#FFF8F6" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span
              data-reveal
              className="text-xs uppercase tracking-widest"
              style={{ color: "#C9A08A", letterSpacing: "0.35em" }}
            >
              O que faço
            </span>
            <h2
              data-reveal
              className="mt-3"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#1A1A1A",
                animationDelay: "100ms",
              }}
            >
              Serviços
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICOS.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgba(201,160,138,0.15)",
                  boxShadow: "0 4px 32px rgba(26,26,26,0.05)",
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#F2D4D0", color: "#C9A08A" }}
                >
                  {ICONS[s.title]}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.2rem",
                    color: "#1A1A1A",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(26,26,26,0.65)" }}
                >
                  {s.desc}
                </p>
                {s.badge && (
                  <span
                    className="mt-4 inline-block rounded-full px-4 py-1.5 text-xs uppercase tracking-widest"
                    style={{ backgroundColor: "#F2D4D0", color: "#C9A08A" }}
                  >
                    {s.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section
        id="galeria"
        className="py-24 md:py-32"
        style={{ backgroundColor: "#fdf0eb" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span
              data-reveal
              className="text-xs uppercase tracking-widest"
              style={{ color: "#C9A08A", letterSpacing: "0.35em" }}
            >
              Trabalhos
            </span>
            <h2
              data-reveal
              className="mt-3"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#1A1A1A",
                animationDelay: "100ms",
              }}
            >
              Galeria
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div
                style={{
                  width: "2rem",
                  height: "3px",
                  borderRadius: "999px",
                  backgroundColor:
                    galeriaAtiva === "A" ? "#C9A08A" : "rgba(201,160,138,0.3)",
                  transition: "background 0.4s",
                }}
              />
              <div
                style={{
                  width: "2rem",
                  height: "3px",
                  borderRadius: "999px",
                  backgroundColor:
                    galeriaAtiva === "B" ? "#C9A08A" : "rgba(201,160,138,0.3)",
                  transition: "background 0.4s",
                }}
              />
            </div>
          </div>
          <div
            className="columns-2 gap-4 md:columns-3"
            style={{
              opacity: galeriaVisible ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            {galeriaActual.map((g, i) => (
              <div
                key={`${galeriaAtiva}-${i}`}
                className="relative mb-4 overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                style={{ aspectRatio: g.ratio }}
              >
                <Image
                  src={g.src}
                  alt={`Trabalho ${i + 1} — Mariana Coimbra Nails`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setGaleriaVisible(false);
                setTimeout(() => {
                  setGaleriaAtiva("A");
                  setGaleriaVisible(true);
                }, 400);
              }}
              className="rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all"
              style={{
                backgroundColor:
                  galeriaAtiva === "A" ? "#C9A08A" : "transparent",
                color: galeriaAtiva === "A" ? "white" : "#C9A08A",
                border: "1px solid #C9A08A",
              }}
            >
              Parte 1
            </button>
            <button
              onClick={() => {
                setGaleriaVisible(false);
                setTimeout(() => {
                  setGaleriaAtiva("B");
                  setGaleriaVisible(true);
                }, 400);
              }}
              className="rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-all"
              style={{
                backgroundColor:
                  galeriaAtiva === "B" ? "#C9A08A" : "transparent",
                color: galeriaAtiva === "B" ? "white" : "#C9A08A",
                border: "1px solid #C9A08A",
              }}
            >
              Parte 2
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="py-24 md:py-32"
        style={{ backgroundColor: "#FFF8F6" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div data-reveal className="relative mx-auto w-full max-w-md">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl"
                style={{ boxShadow: "24px 24px 0 #F2D4D0" }}
              >
                <Image
                  src="/images/about.jpg"
                  alt="Mariana Coimbra — Nail Artist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-5 right-0 flex items-center gap-2 rounded-full px-5 py-3 md:-right-6"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 8px 32px rgba(26,26,26,0.1)",
                  border: "1px solid #F2D4D0",
                }}
              >
                <InstagramIcon size={14} />
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#1A1A1A" }}
                >
                  1327 seguidores
                </span>
              </div>
            </div>
            <div>
              <span
                data-reveal
                className="text-xs uppercase tracking-widest"
                style={{ color: "#C9A08A", letterSpacing: "0.35em" }}
              >
                Sobre mim
              </span>
              <h2
                data-reveal
                className="mt-3"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#1A1A1A",
                  animationDelay: "100ms",
                }}
              >
                Mariana Coimbra
              </h2>
              <div
                data-reveal
                className="mt-6 space-y-4 text-sm leading-relaxed"
                style={{ color: "rgba(26,26,26,0.7)", animationDelay: "200ms" }}
              >
                <p>
                  Nail artist em Castelo Branco com paixão por criar manicures
                  elegantes, duradouras e cheias de personalidade. Trabalho com
                  gel, acrílico e acrigel, sempre com produtos de confiança.
                </p>
                <p>
                  Sou também{" "}
                  <strong style={{ color: "#1A1A1A" }}>
                    revendedora oficial Hit Nails
                  </strong>{" "}
                  em Castelo Branco, e dou formações online para quem quer
                  dominar técnicas como o Wet on Wet.
                </p>
              </div>
              <div
                data-reveal
                className="mt-8 flex flex-wrap gap-2"
                style={{ animationDelay: "300ms" }}
              >
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-2 text-xs uppercase tracking-widest"
                    style={{
                      border: "1px solid rgba(201,160,138,0.35)",
                      backgroundColor: "rgba(242,212,208,0.3)",
                      color: "rgba(26,26,26,0.7)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO - com mapa corrigido e responsivo */}
      <section
        id="contacto"
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 25%, rgba(201,160,138,0.15), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span
                data-reveal
                className="text-xs uppercase tracking-widest"
                style={{ color: "#C9A08A", letterSpacing: "0.35em" }}
              >
                Contacto
              </span>
              <h2
                data-reveal
                className="mt-3 text-white"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  animationDelay: "100ms",
                }}
              >
                Vamos marcar
                <br />a tua sessão.
              </h2>
              <p
                data-reveal
                className="mt-5 max-w-sm text-sm leading-relaxed"
                style={{
                  color: "rgba(255,248,246,0.55)",
                  animationDelay: "200ms",
                }}
              >
                Resposta rápida via WhatsApp. Para qualquer dúvida, envia
                mensagem — falo contigo o mais breve possível.
              </p>
              <div
                data-reveal
                className="mt-8 flex flex-col gap-3"
                style={{ animationDelay: "300ms" }}
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full px-7 py-3.5 text-xs uppercase tracking-widest text-white transition-all hover:scale-105"
                  style={{
                    backgroundColor: "#25D366",
                    boxShadow: "0 8px 24px rgba(37,211,102,0.25)",
                    textDecoration: "none",
                  }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_PESSOAL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full px-7 py-3.5 text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    border: "1px solid rgba(201,160,138,0.35)",
                    color: "#F2D4D0",
                    textDecoration: "none",
                  }}
                >
                  <InstagramIcon size={16} />
                  @marianacoimbranails
                </a>
                <a
                  href={INSTAGRAM_REVENDA}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full px-7 py-3.5 text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    border: "1px solid rgba(201,160,138,0.35)",
                    color: "#F2D4D0",
                    textDecoration: "none",
                  }}
                >
                  <InstagramIcon size={16} />
                  @revendahitnails_castelobranco
                </a>
              </div>

              {/* Mapa corrigido - totalmente responsivo */}
              <div
                data-reveal
                className="mt-8 overflow-hidden rounded-2xl"
                style={{ animationDelay: "400ms" }}
              >
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.178564742084!2d-7.499022684368678!3d39.82273297942422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3b2e8d9a6b4b4b%3A0x8e2b8a9f0c1d2e3f!2sRua%20Diogo%20da%20Fonseca%2C%206%2C%206000-184%20Castelo%20Branco!5e0!3m2!1spt!2spt!4v1712345678901!5m2!1spt!2spt"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      display: "block",
                      filter: "grayscale(20%) contrast(1.05)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mariana Coimbra Nails — Rua Diogo da Fonseca 6, Castelo Branco"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Rua+Diogo+da+Fonseca+6,+6000-184+Castelo+Branco"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    color: "#F2D4D0",
                    textDecoration: "none",
                    letterSpacing: "0.15em",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Rua Diogo da Fonseca, 6 · Castelo Branco
                </a>
              </div>
            </div>

            <div data-reveal style={{ animationDelay: "150ms" }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="nome"
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,248,246,0.4)" }}
                  >
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    required
                    placeholder="O teu nome"
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 focus-visible:ring-[#C9A08A]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,248,246,0.4)" }}
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="o.teu@email.com"
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 focus-visible:ring-[#C9A08A]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="telefone"
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,248,246,0.4)" }}
                  >
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    placeholder="+351 000 000 000"
                    className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 focus-visible:ring-[#C9A08A]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="mensagem"
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,248,246,0.4)" }}
                  >
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    placeholder="Como posso ajudar?"
                    className="resize-none rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 focus-visible:ring-[#C9A08A]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full py-3 text-xs uppercase tracking-widest text-white hover:opacity-90"
                  style={{ backgroundColor: "#C9A08A" }}
                >
                  {sent ? "Enviado ✓" : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 text-center text-xs uppercase tracking-widest"
        style={{ backgroundColor: "#FFF8F6", color: "rgba(26,26,26,0.4)" }}
      >
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
          {[
            { label: "Política de Privacidade", href: "/privacidade" },
            { label: "Termos e Condições", href: "/termos" },
            { label: "Reclamações", href: "/reclamacoes" },
            { label: "Elogios", href: "/elogios" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "rgba(26,26,26,0.4)", textDecoration: "none" }}
              className="transition-colors hover:text-[#C9A08A]"
            >
              {l.label}
            </a>
          ))}
        </div>
        © {new Date().getFullYear()} Mariana Coimbra Nails · Castelo Branco
        <span className="mx-3" style={{ color: "#C9A08A" }}>
          ·
        </span>
        Website por{" "}
        <a
          href="https://albiclick.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#C9A08A", textDecoration: "none" }}
        >
          Albiclick
        </a>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar via WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:scale-110 md:bottom-8 md:right-8"
        style={{
          backgroundColor: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.4)",
          textDecoration: "none",
        }}
      >
        <MessageCircle size={22} />
        <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-[#25D366] opacity-30" />
      </a>
    </div>
  );
}
