import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FULL_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "FAQ Quick Pro — Perguntas frequentes sobre IPTV";
const DESCRIPTION =
  "Tire suas dúvidas sobre Quick Pro: dispositivos, qualidade 4K, formas de pagamento, teste grátis, suporte e muito mais.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/faq" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FULL_FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "FAQ" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="FAQ Quick Pro"
          title={<>Perguntas <span className="gradient-text">frequentes</span></>}
          description="Reunimos aqui as dúvidas mais comuns de clientes novos e antigos. Não achou a sua? O WhatsApp resolve."
        />
        <div className="mt-14">
          <FaqAccordion items={FULL_FAQ} />
        </div>
        <div className="mt-14 text-center">
          <WhatsAppButton keyword="Dúvidas Quick Pro" label="Falar com o time Quick Pro" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}
