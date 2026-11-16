import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { canonicalUrl, pageMeta, SITE_URL } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { POSTS } from "@/content/posts";
import heroBg from "@/assets/hero-bg.jpg";

const TITLE = "Quick Pro — IPTV Premium sem travar com 30.000+ canais em 4K";
const DESCRIPTION =
  "Quick Pro: IPTV premium com 30.000+ canais, filmes, séries, futebol e esportes em 4K. Sem travamentos, ativação em minutos e suporte humano. Teste grátis pelo WhatsApp.";

const BENEFITS = [
  { icon: Zap, title: "Sem travamentos", desc: "Rede H265 com CDN dedicada mantém o sinal estável até nos jogos de maior audiência." },
  { icon: Tv, title: "30.000+ canais", desc: "Grade nacional e internacional atualizada todo dia, disponível em 4K, Full HD e HD." },
  { icon: Film, title: "Filmes e séries", desc: "Centenas de títulos em lançamento, dublado e legendado, renovados semanalmente." },
  { icon: Trophy, title: "Futebol e esportes", desc: "Brasileirão, Champions, UFC, F1 e todos os pay-per-view incluídos na assinatura." },
  { icon: ShieldCheck, title: "Ativação segura", desc: "Pix, cartão ou boleto via gateway protegido — acesso liberado em minutos." },
  { icon: Headphones, title: "Suporte humano", desc: "Time real no WhatsApp todos os dias para instalar, configurar e renovar." },
];

const STEPS = [
  { n: "01", title: "Escolha seu plano", desc: "Decida entre os planos mensal, trimestral, semestral ou anual do Quick Pro." },
  { n: "02", title: "Confirme no WhatsApp", desc: "Envie o comprovante pelo atendimento e receba a ativação quase imediata." },
  { n: "03", title: "Instale e aproveite", desc: "Adicione a lista no player do seu aparelho e comece a assistir em 4K." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      image: "/og-image.webp",
    }),
    links: [
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "preload", as: "image", href: heroBg, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Quick Pro — IPTV Premium",
            category: "Streaming IPTV",
            brand: { "@type": "Brand", name: "Quick Pro" },
            description: DESCRIPTION,
            image: `${SITE_URL}/og-image.webp`,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              reviewCount: "7412",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BRL",
              lowPrice: "35",
              highPrice: "280",
              offerCount: PLANS.length,
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
              offers: PLANS.map((p) => ({
                "@type": "Offer",
                name: `Quick Pro ${p.name}`,
                price: p.price.replace(/[^\d]/g, ""),
                priceCurrency: "BRL",
                url: `${SITE_URL}/planos`,
                availability: "https://schema.org/InStock",
              })),
            },
          }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Últimos artigos do blog Quick Pro",
          itemListElement: POSTS.slice(0, 6).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Por que Quick Pro"
            title={<>A experiência IPTV que <span className="gradient-text">você merece</span></>}
            description="Infraestrutura própria, catálogo completo e atendimento de verdade. Teste antes de acreditar."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Planos Quick Pro"
            title="Planos honestos, sem letras miúdas"
            description="O mesmo catálogo premium em todos os planos — a diferença é só a duração e quanto você economiza."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/planos" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              Ver detalhes completos dos planos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Ativação em 3 passos simples"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative glass-card rounded-2xl p-7">
                <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <div className="glass-card rounded-3xl overflow-hidden relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" aria-hidden="true" />
            <div className="relative">
              <Sparkles className="mx-auto size-8 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
                Comece agora com <span className="gradient-text">teste grátis</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Experimente o Quick Pro sem custo e confirme por você mesmo a imagem em 4K que não trava.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton keyword="Teste Grátis Quick Pro" label="Quero Testar Grátis" variant="whatsapp" size="lg" />
                <WhatsAppButton keyword="Assinatura Quick Pro" label="Assinar Agora" variant="primary" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-page">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Tudo o que você precisa saber sobre Quick Pro"
          />
          <div className="mt-14">
            <FaqAccordion items={HOME_FAQ} />
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Não encontrou sua dúvida?{" "}
              <Link to="/faq" className="text-primary hover:underline">Veja todas as perguntas</Link> ou{" "}
              <Link to="/contato" className="text-primary hover:underline">fale conosco</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
