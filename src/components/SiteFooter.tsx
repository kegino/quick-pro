import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/5 bg-background">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <img src="/logo-main.webp" alt="" width={36} height={36} loading="lazy" className="size-9" />
            <span>Quick Pro</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Quick Pro entrega mais de 30.000 canais, filmes e séries em 4K, futebol ao vivo sem travar e suporte humano todos os dias pelo WhatsApp.
          </p>
          <div className="mt-6">
            <WhatsAppButton keyword="Quick Pro" label="Falar no WhatsApp" size="sm" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/planos" className="hover:text-foreground">Planos Quick Pro</Link></li>
            <li><Link to="/beneficios" className="hover:text-foreground">Benefícios</Link></li>
            <li><Link to="/como-funciona" className="hover:text-foreground">Como Funciona</Link></li>
            <li><Link to="/teste" className="hover:text-foreground">Teste Grátis</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog IPTV</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">Perguntas Frequentes</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
            <li><Link to="/politica-de-privacidade" className="hover:text-foreground">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-foreground">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page py-6 text-center text-xs text-muted-foreground">
          © {year} Quick Pro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
