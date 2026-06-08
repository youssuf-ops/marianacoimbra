import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Reclamações | Mariana Coimbra Nails",
  description: "Livro de Reclamações Online — Mariana Coimbra Nails",
};

export default function Reclamacoes() {
  return (
    <div style={{ backgroundColor: "#FFF8F6", minHeight: "100vh", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Link href="/" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#C9A08A", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>
          ← Voltar
        </Link>
        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1A1A1A", marginBottom: "0.5rem" }}>
          Reclamações
        </h1>
        <p style={{ fontSize: "0.8rem", color: "rgba(26,26,26,0.45)", marginBottom: "3rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          Livro de Reclamações Online
        </p>

        {/* Card principal */}
        <div style={{ backgroundColor: "white", border: "1px solid rgba(201,160,138,0.2)", borderRadius: "1.5rem", padding: "2.5rem", marginBottom: "2.5rem", boxShadow: "0 4px 32px rgba(26,26,26,0.05)" }}>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(26,26,26,0.72)", marginBottom: "2rem" }}>
            Nos termos do Decreto-Lei n.º 74/2017, de 21 de junho, e demais legislação aplicável, disponibilizamos o acesso ao Livro de Reclamações Electrónico através do portal oficial do Governo Português.
          </p>
          <a
            href="https://www.livroreclamacoes.pt"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", backgroundColor: "#1A1A1A", color: "white", borderRadius: "999px", padding: "1rem 2rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", textDecoration: "none" }}
          >
            <ExternalLink size={16} />
            Aceder ao Livro de Reclamações
          </a>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "#1A1A1A", marginBottom: "0.75rem" }}>Contacto Directo</h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(26,26,26,0.72)" }}>
            Antes de formalizar uma reclamação, pode contactar-nos directamente para tentarmos resolver a situação de forma rápida e eficaz:
          </p>
          <div style={{ marginTop: "1rem", padding: "1.25rem 1.5rem", backgroundColor: "rgba(242,212,208,0.3)", borderRadius: "1rem", border: "1px solid rgba(201,160,138,0.2)" }}>
            <p style={{ fontSize: "0.85rem", color: "rgba(26,26,26,0.72)", lineHeight: 1.8 }}>
              📧 Email: <strong>[EMAIL]</strong><br />
              📱 WhatsApp: <strong>[TELEFONE]</strong><br />
              📍 Castelo Branco, Portugal
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "#1A1A1A", marginBottom: "0.75rem" }}>Resolução Alternativa de Litígios</h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(26,26,26,0.72)" }}>
            Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios (RAL). Para mais informações, consulte o portal{" "}
            <a href="https://www.consumidor.gov.pt" target="_blank" rel="noreferrer" style={{ color: "#C9A08A" }}>consumidor.gov.pt</a>.
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,160,138,0.2)", paddingTop: "2rem", marginTop: "2rem" }}>
          <Link href="/" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#C9A08A", textDecoration: "none" }}>
            ← Voltar ao website
          </Link>
        </div>
      </div>
    </div>
  );
}
