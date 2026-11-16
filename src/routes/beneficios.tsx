import { createFileRoute } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Wifi, MonitorPlay, Globe, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Benefícios do Quick Pro — Qualidade 4K sem travar";
const DESCRIPTION =
  "Descubra os benefícios de assinar Quick Pro: 4K sem travamentos, 30.000+ canais, filmes, séries, futebol, compatibilidade total e suporte humano.";

const BENEFITS = [
  { icon: Zap, t: "Zero travamento", d: "Servidores H265 com CDN própria no Brasil — imagem fluida mesmo no 4K." },
  { icon: Tv, t: "30.000+ canais ao vivo", d: "Grade nacional e internacional renovada diariamente, do noticiário ao esporte." },
  { icon: Film, t: "Catálogo VOD gigante", d: "Filmes e séries em lançamento, com opções dubladas e legendadas." },
  { icon: Trophy, t: "Todos os esportes", d: "Futebol, UFC, F1, NBA, tênis e pay-per-view em canais dedicados." },
  { icon: MonitorPlay, t: "Compatibilidade total", d: "Roda em Smart TV, Android, iOS, Fire Stick, TV Box, MAG, PC e navegador." },
  { icon: Globe, t: "M3U, HLS, MPEGTS, RTMP", d: "Funciona com os principais protocolos e players disponíveis no mercado." },
  { icon: Wifi, t: "Estável mesmo em pico", d: "Capacidade dimensionada para clássicos e finais de campeonato." },
  { icon: ShieldCheck, t: "Ativação segura", d: "Pagamento por Pix, cartão ou boleto em gateway protegido, liberação imediata." },
  { icon: Headphones, t: "Suporte humano", d: "Pessoas de verdade respondendo no WhatsApp — nunca robôs." },
];

export const Route = createFileRoute("/beneficios")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/beneficios" }),
  component: BeneficiosPage,
});

function BeneficiosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Benefícios" }]} />
      </div>
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow="Benefícios Quick Pro"
          title={<>Tudo que faz do Quick Pro a <span className="gradient-text">melhor escolha</span></>}
          description="Mais do que uma lista de canais: infraestrutura, catálogo e atendimento pensados para quem assiste todos os dias."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, t, d }) => (
            <article key={t} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-primary/30">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" aria-hidden="true" />
          <div className="relative">
            <Sparkles className="mx-auto size-8 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold">Sinta a diferença Quick Pro na prática</h2>
            <p className="mt-3 text-muted-foreground">Teste sem custo e sem cadastro — a liberação acontece pelo WhatsApp em minutos.</p>
            <div className="mt-6"><WhatsAppButton keyword="Teste Quick Pro" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
