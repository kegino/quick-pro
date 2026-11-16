import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";

const TITLE = "Termos de Uso — Quick Pro";
const DESCRIPTION = "Termos de Uso do serviço Quick Pro: condições de contratação, uso do serviço e responsabilidades.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => pageMeta({ title: TITLE, description: DESCRIPTION, path: "/termos-de-uso" }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="pt-24">
      <div className="container-page py-14">
        <Breadcrumb items={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]} />
      </div>
      <article className="container-page pb-20 mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Termos de Uso</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: 12 de outubro de 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Aceitação</h2>
            <p className="mt-2">Ao contratar qualquer plano do Quick Pro, você declara ter lido e concordado com estas condições e com a Política de Privacidade do site.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Descrição do serviço</h2>
            <p className="mt-2">O serviço consiste no fornecimento de lista de acesso a canais e conteúdos por streaming, com vigência limitada ao período do plano escolhido na contratação.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Uso responsável</h2>
            <p className="mt-2">As credenciais são pessoais e intransferíveis. O usuário se compromete a utilizar o acesso de forma individual e conforme a legislação aplicável.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Pagamento e renovação</h2>
            <p className="mt-2">A liberação do acesso ocorre após a confirmação do pagamento pelo gateway. A renovação não é automática: depende de uma nova contratação ao fim do ciclo vigente.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Suporte</h2>
            <p className="mt-2">O atendimento técnico é prestado pelo WhatsApp, em horário estendido, incluindo fins de semana e feriados.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">6. Alterações</h2>
            <p className="mt-2">Estes termos podem ser revisados periodicamente. Qualquer alteração passa a valer a partir da publicação nesta mesma página.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
