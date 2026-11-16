import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TITLE = "Teste Quick Pro Grátis — Solicite pelo WhatsApp";
const DESCRIPTION =
  "Solicite agora seu teste grátis do Quick Pro e experimente 30.000+ canais, filmes e futebol em 4K sem travar. Ativação em minutos, sem cartão.";

const INCLUDES = [
  "Liberação do acesso em poucos minutos",
  "Mais de 30.000 canais ao vivo em 4K",
  "Filmes e séries com dublagem e legenda",
  "Esportes ao vivo, incluindo pay-per-view",
  "Funciona em Smart TV, Android, iPhone e TV Box",
  "Atendimento humano no WhatsApp",
];

export const Route = createFileRoute("/teste")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/teste" }),
  component: TestePage,
});

function TestePage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Teste Grátis" }]} />
      </div>
      <section className="container-page pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Teste Quick Pro"
              title={<>Experimente o Quick Pro <span className="gradient-text">sem pagar nada</span></>}
              description="Veja com os próprios olhos por que milhares de assinantes migraram para o Quick Pro. Zero custo, zero compromisso."
              center={false}
            />
            <ul className="mt-8 space-y-3">
              {INCLUDES.map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton keyword="Teste Grátis Quick Pro" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" />
              <WhatsAppButton keyword="Assinatura Quick Pro" label="Assinar Agora" variant="primary" size="lg" />
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Como funciona o teste</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">3 passos e você já está assistindo</h2>
              <ol className="mt-6 space-y-4 text-sm">
                <li><strong className="text-foreground">1.</strong> Toque em "Solicitar Teste Grátis" para abrir o WhatsApp com a mensagem pronta.</li>
                <li><strong className="text-foreground">2.</strong> Em seguida você recebe os dados de acesso e o link do aplicativo indicado.</li>
                <li><strong className="text-foreground">3.</strong> Instale, importe a lista e aproveite o Quick Pro em 4K na hora.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
