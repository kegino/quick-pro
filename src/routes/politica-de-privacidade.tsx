import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Política de Privacidade — Quick Pro";
const DESCRIPTION = "Política de Privacidade do Quick Pro: como tratamos seus dados pessoais, conforme a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/politica-de-privacidade" }),
  component: PoliticaPage,
});

function PoliticaPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]} />
      </div>
      <article className="container-page pb-20 prose-content mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: 12 de outubro de 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Informações que coletamos</h2>
            <p className="mt-2">Coletamos somente o dado indispensável para entregar o serviço: nome, contato no WhatsApp, e-mail (quando informado) e a confirmação de pagamento gerada pelo gateway — cartões nunca ficam armazenados em nossos servidores.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Uso das informações</h2>
            <p className="mt-2">Seus dados servem apenas para ativação, renovação, suporte técnico e avisos sobre o funcionamento do Quick Pro. Não comercializamos nem repassamos informações a terceiros para publicidade.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Cookies</h2>
            <p className="mt-2">Empregamos cookies estritamente necessários ao funcionamento da página e, de forma agregada, métricas anônimas de audiência.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Seus direitos (LGPD)</h2>
            <p className="mt-2">Nos termos da LGPD, você pode pedir acesso, correção ou anonimização/exclusão de dados a qualquer momento — basta solicitar pelo canal de atendimento no WhatsApp.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Contato</h2>
            <p className="mt-2">Em caso de dúvidas sobre este documento, fale com a nossa equipe pelo WhatsApp +55 45 99906-4377.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
