import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="Quick Pro — universo cinematográfico premium com filmes, séries e canais em 4K"
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/75 via-background/55 to-background" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/60 via-transparent to-background/60" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-black/15" aria-hidden="true" />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <span className="size-2 rounded-full bg-whatsapp animate-pulse" aria-hidden="true" />
          Servidores online — teste liberado agora
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">Quick Pro: Reprodutor Profissional de IPTV em Ultra HD 4K</h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Canais ao vivo, filmes, séries e futebol em qualidade máxima, direto na sua tela. Ativação em minutos, atendimento no WhatsApp e planos a partir de <strong className="text-foreground">R$35</strong>.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <WhatsAppButton keyword="Teste Grátis Quick Pro" label="Fazer Teste Grátis" variant="whatsapp" size="lg" />
          <WhatsAppButton keyword="Assinatura Quick Pro" label="Assinar Agora" variant="primary" size="lg" />
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1" aria-label="Avaliação 4,9 de 5 estrelas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-gold text-gold" aria-hidden="true" />
            ))}
            <span className="ml-2 font-semibold text-foreground">4,9/5</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Mais de <strong className="text-foreground">7.400 clientes</strong> satisfeitos usando Quick Pro
          </p>
        </div>
      </div>
    </section>
  );
}
