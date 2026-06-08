"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

export default function Elogios() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ backgroundColor: "#FFF8F6", minHeight: "100vh", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Link href="/" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#C9A08A", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>
          ← Voltar
        </Link>
        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1A1A1A", marginBottom: "0.5rem" }}>
          Partilha a tua experiência
        </h1>
        <p style={{ fontSize: "0.9rem", color: "rgba(26,26,26,0.6)", marginBottom: "3rem", lineHeight: 1.7 }}>
          A tua opinião é muito importante. Partilha como foi a tua experiência com a Mariana Coimbra Nails.
        </p>

        {sent ? (
          <div style={{ backgroundColor: "white", border: "1px solid rgba(201,160,138,0.2)", borderRadius: "1.5rem", padding: "3rem", textAlign: "center", boxShadow: "0 4px 32px rgba(26,26,26,0.05)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💅</div>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", color: "#1A1A1A", marginBottom: "0.75rem" }}>Obrigada pelo elogio!</h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(26,26,26,0.6)", marginBottom: "2rem" }}>A tua opinião foi recebida com muito carinho.</p>
            <Link href="/" style={{ display: "inline-block", backgroundColor: "#C9A08A", color: "white", borderRadius: "999px", padding: "0.85rem 2rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", textDecoration: "none" }}>
              Voltar ao website
            </Link>
          </div>
        ) : (
          <div style={{ backgroundColor: "white", border: "1px solid rgba(201,160,138,0.2)", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 4px 32px rgba(26,26,26,0.05)" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Avaliação por estrelas */}
              <div>
                <Label className="text-xs uppercase tracking-widest" style={{ color: "rgba(26,26,26,0.5)", letterSpacing: "0.2em", display: "block", marginBottom: "0.75rem" }}>
                  Avaliação
                </Label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem" }}
                    >
                      <Star
                        size={28}
                        fill={(hover || rating) >= star ? "#C9A08A" : "none"}
                        stroke={(hover || rating) >= star ? "#C9A08A" : "rgba(26,26,26,0.25)"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="nome" className="text-xs uppercase tracking-widest" style={{ color: "rgba(26,26,26,0.5)", letterSpacing: "0.2em" }}>Nome</Label>
                <Input id="nome" name="nome" required placeholder="O teu nome" className="rounded-xl focus-visible:ring-[#C9A08A]" style={{ borderColor: "rgba(201,160,138,0.3)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="email" className="text-xs uppercase tracking-widest" style={{ color: "rgba(26,26,26,0.5)", letterSpacing: "0.2em" }}>Email</Label>
                <Input id="email" name="email" type="email" required placeholder="o.teu@email.com" className="rounded-xl focus-visible:ring-[#C9A08A]" style={{ borderColor: "rgba(201,160,138,0.3)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="servico" className="text-xs uppercase tracking-widest" style={{ color: "rgba(26,26,26,0.5)", letterSpacing: "0.2em" }}>Serviço realizado</Label>
                <Input id="servico" name="servico" placeholder="ex: Unhas de Gel, Formação Online..." className="rounded-xl focus-visible:ring-[#C9A08A]" style={{ borderColor: "rgba(201,160,138,0.3)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="mensagem" className="text-xs uppercase tracking-widest" style={{ color: "rgba(26,26,26,0.5)", letterSpacing: "0.2em" }}>A tua experiência</Label>
                <Textarea id="mensagem" name="mensagem" required rows={4} placeholder="Conta-nos como foi..." className="resize-none rounded-xl focus-visible:ring-[#C9A08A]" style={{ borderColor: "rgba(201,160,138,0.3)" }} />
              </div>

              <Button type="submit" className="w-full rounded-full py-3 text-xs uppercase tracking-widest text-white hover:opacity-90" style={{ backgroundColor: "#C9A08A" }}>
                Enviar Elogio
              </Button>
            </form>
          </div>
        )}

        <div style={{ borderTop: "1px solid rgba(201,160,138,0.2)", paddingTop: "2rem", marginTop: "2rem" }}>
          <Link href="/" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#C9A08A", textDecoration: "none" }}>
            ← Voltar ao website
          </Link>
        </div>
      </div>
    </div>
  );
}
