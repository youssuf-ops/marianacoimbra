import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | Mariana Coimbra Nails",
  description: "Política de Privacidade e tratamento de dados pessoais — Mariana Coimbra Nails",
};

export default function Privacidade() {
  return (
    <div style={{ backgroundColor: "#FFF8F6", minHeight: "100vh", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <Link href="/" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#C9A08A", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>
          ← Voltar
        </Link>
        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1A1A1A", marginBottom: "0.5rem" }}>
          Política de Privacidade
        </h1>
        <p style={{ fontSize: "0.8rem", color: "rgba(26,26,26,0.45)", marginBottom: "3rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          Última actualização: Junho 2026
        </p>

        {[
          {
            titulo: "1. Responsável pelo Tratamento",
            texto: `Nome: [NOME COMPLETO DA MARIANA]\nNIF: [NIF]\nMorada: [MORADA COMPLETA], Castelo Branco, Portugal\nEmail: [EMAIL]\nTelefone: [TELEFONE]`,
          },
          {
            titulo: "2. Dados Recolhidos",
            texto: `Através do formulário de contacto do website, recolhemos os seguintes dados pessoais:\n- Nome\n- Email\n- Telefone\n- Mensagem\n\nEstes dados são recolhidos apenas quando o utilizador os submete voluntariamente.`,
          },
          {
            titulo: "3. Finalidade do Tratamento",
            texto: `Os dados recolhidos são utilizados exclusivamente para:\n- Responder a pedidos de contacto e marcações\n- Gestão da relação com clientes\n\nNão utilizamos os seus dados para fins de marketing sem consentimento explícito.`,
          },
          {
            titulo: "4. Base Legal",
            texto: `O tratamento dos dados baseia-se no consentimento do titular (Art. 6.º, n.º 1, al. a) do RGPD), prestado através do preenchimento e submissão do formulário de contacto.`,
          },
          {
            titulo: "5. Conservação dos Dados",
            texto: `Os dados pessoais são conservados pelo período estritamente necessário para o cumprimento das finalidades para as quais foram recolhidos, não excedendo 2 anos, salvo obrigação legal em contrário.`,
          },
          {
            titulo: "6. Partilha de Dados",
            texto: `Os seus dados pessoais não são partilhados, vendidos ou cedidos a terceiros, excepto quando exigido por lei ou por autoridade competente.`,
          },
          {
            titulo: "7. Direitos do Titular",
            texto: `Nos termos do RGPD, tem direito a:\n- Acesso aos seus dados pessoais\n- Rectificação de dados incorrectos\n- Eliminação dos seus dados ("direito ao esquecimento")\n- Limitação do tratamento\n- Portabilidade dos dados\n- Oposição ao tratamento\n\nPara exercer estes direitos, contacte-nos através do email: [EMAIL]`,
          },
          {
            titulo: "8. Segurança",
            texto: `Adoptamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda ou destruição.`,
          },
          {
            titulo: "9. Cookies",
            texto: `Este website não utiliza cookies de rastreamento ou publicidade. Podem ser utilizados cookies estritamente necessários para o funcionamento do website.`,
          },
          {
            titulo: "10. Contacto e Reclamações",
            texto: `Para qualquer questão relativa ao tratamento dos seus dados, contacte-nos através de [EMAIL].\n\nTem também o direito de apresentar reclamação à Comissão Nacional de Protecção de Dados (CNPD) em www.cnpd.pt.`,
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
