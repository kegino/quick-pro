import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Como funciona o Quick Pro — Ativação em minutos";
const DESCRIPTION =
  "Entenda como funciona o Quick Pro: escolha do plano, ativação via WhatsApp, instalação do app e uso em qualquer dispositivo. Simples e rápido.";

const STEPS = [
  { n: "01", t: "Escolha seu plano Quick Pro", d: "Quatro durações disponíveis — mensal, trimestral, semestral e anual — com o mesmo catálogo." },
  { n: "02", t: "Fale conosco no WhatsApp", d: "Realize o pagamento por Pix, cartão ou boleto e envie o comprovante ao atendimento." },
  { n: "03", t: "Receba seus dados de acesso", d: "Chega usuário, senha e link de instalação com tutorial ilustrado passo a passo." },
  { n: "04", t: "Instale o app compatível", d: "Escolha o player ideal para Smart TV, celular, Fire Stick, TV Box ou MAG." },
  { n: "05", t: "Ative sua lista", d: "Cole a URL M3U no aplicativo e a grade inteira carrega em segundos, pronta para 4K." },
  { n: "06", t: "Aproveite com suporte", d: "Dúvidas, ajustes e renovação: o time Quick Pro responde no WhatsApp todos os dias." },
];

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/como-funciona" }),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Como ativar o Quick Pro",
        step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })),
      }),
    }],
  }),
  component: ComoFunciona,
});

function ComoFunciona() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Como Funciona" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Como Funciona"
          title={<>Ativação <span className="gradient-text">simples e rápida</span></>}
          description="Do primeiro contato à tela cheia: seis passos diretos, sem cadastro complicado e com gente te ajudando."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="glass-card rounded-2xl p-7">
              <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
              <h2 className="mt-3 font-display text-xl font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <WhatsAppButton keyword="Ativação Quick Pro" label="Começar agora" variant="whatsapp" size="lg" />
        </div>
      </section>
    </div>
  );
}
