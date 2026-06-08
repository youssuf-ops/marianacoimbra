import Link from "next/link";

export const metadata = {
  title: "Termos e Condições | Mariana Coimbra Nails",
  description: "Termos e Condições de utilização — Mariana Coimbra Nails",
};

export default function Termos() {
  return (
    <div style={{ backgroundColor: "#FFF8F6", minHeight: "100vh", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Link href="/" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#C9A08A", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>
          ← Voltar
        </Link>
        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1A1A1A", marginBottom: "0.5rem" }}>
          Termos e Condições
        </h1>
        <p style={{ fontSize: "0.8rem", color: "rgba(26,26,26,0.45)", marginBottom: "3rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          Última actualização: Junho 2026
        </p>

        {[
          {
            titulo: "1. Identificação",
            texto: `Nome: [NOME COMPLETO DA MARIANA]\nNIF: [NIF]\nMorada: [MORADA COMPLETA], Castelo Branco, Portugal\nEmail: [EMAIL]\nTelefone: [TELEFONE]`,
          },
          {
            titulo: "2. Objecto",
            texto: `Os presentes Termos e Condições regulam a utilização do website marianacoimbranails.pt e a prestação dos serviços de manicure, tratamentos de unhas e formações online oferecidos por Mariana Coimbra.`,
          },
          {
            titulo: "3. Serviços",
            texto: `Os serviços disponíveis incluem:\n- Unhas de Gel\n- Acrílico e Acrigel\n- Formações Online (ex: Wet on Wet — 35€)\n- Revenda de produtos Hit Nails\n\nOs preços indicados estão sujeitos a alteração sem aviso prévio. O preço final será confirmado aquando da marcação.`,
          },
          {
            titulo: "4. Marcações",
            texto: `As marcações são efectuadas através do WhatsApp ou formulário de contacto disponível no website. A confirmação da marcação é feita mediante resposta da prestadora de serviços.\n\nEm caso de impossibilidade de comparência, solicita-se o aviso com pelo menos 24 horas de antecedência.`,
          },
          {
            titulo: "5. Pagamentos",
            texto: `O pagamento é efectuado no momento da prestação do serviço, salvo acordo prévio em contrário. São aceites os métodos de pagamento indicados no acto da marcação.`,
          },
          {
            titulo: "6. Formações Online",
            texto: `O acesso às formações online é disponibilizado após confirmação de pagamento. O conteúdo das formações é de uso exclusivamente pessoal e não pode ser reproduzido, partilhado ou comercializado sem autorização expressa.`,
          },
          {
            titulo: "7. Propriedade Intelectual",
            texto: `Todo o conteúdo deste website — incluindo textos, imagens, logótipos e design — é propriedade de Mariana Coimbra e está protegido por direitos de autor. A reprodução sem autorização é proibida.`,
          },
          {
            titulo: "8. Limitação de Responsabilidade",
            texto: `A prestadora de serviços não se responsabiliza por resultados que variem em função das características individuais de cada cliente, nomeadamente estado das unhas, pele ou condições de saúde não comunicadas previamente.`,
          },
          {
            titulo: "9. Lei Aplicável",
            texto: `Os presentes Termos e Condições são regidos pela lei portuguesa. Para resolução de litígios, é competente o tribunal da comarca de Castelo Branco, sem prejuízo do recurso a meios alternativos de resolução de conflitos.`,
          },
          {
            titulo: "10. Alterações",
            texto: `A prestadora reserva-se o direito de alterar os presentes Termos e Condições a qualquer momento. As alterações produzem efeitos a partir da data de publicação no website.`,
          },
        ].map((s) => (
          <div key={s.titulo} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "#1A1A1A", marginBottom: "0.75rem" }}>{s.titulo}</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(26,26,26,0.72)", whiteSpace: "pre-line" }}>{s.texto}</p>
          </div>
        ))}

        <div style={{ borderTop: "1px solid rgba(201,160,138,0.2)", paddingTop: "2rem", marginTop: "2rem" }}>
          <Link href="/" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#C9A08A", textDecoration: "none" }}>
            ← Voltar ao website
          </Link>
        </div>
      </div>
    </div>
  );
}
