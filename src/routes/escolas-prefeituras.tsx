import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { CheckCircle2, Building2, FileCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/escolas-prefeituras")({
  head: () => ({
    meta: [
      { title: "Para Escolas e Prefeituras — Instituto CriarAtivaMente" },
      { name: "description", content: "Como implementar soluções educacionais com aderência à BNCC em redes públicas. Convênios, editais e parcerias." },
      { property: "og:title", content: "Para Escolas e Prefeituras — Instituto CriarAtivaMente" },
      { property: "og:description", content: "Modelo de contratação, benefícios e adequação à BNCC para redes públicas." },
    ],
  }),
  component: Page,
});

const beneficios = [
  "Aderência total à BNCC",
  "Implementação assistida",
  "Formação contínua de professores",
  "Indicadores e relatórios mensais",
  "Plataforma acessível e responsiva",
  "Modelos por convênio, edital ou parceria",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Para escolas e prefeituras"
        title={<>Soluções para <span className="gradient-text">redes públicas</span> e privadas</>}
        description="Implementação assistida, formação docente e tecnologia educacional com modelo de contratação flexível."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <Building2 className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Como implementar</h3>
            <p className="mt-2 text-sm text-muted-foreground">Diagnóstico, co-criação, formação e operação assistida com a equipe da rede.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <FileCheck className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Adequação à BNCC</h3>
            <p className="mt-2 text-sm text-muted-foreground">Trilhas, conteúdos e métricas alinhados às competências e habilidades da BNCC.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <Handshake className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Modelos de contratação</h3>
            <p className="mt-2 text-sm text-muted-foreground">Editais, convênios, termos de fomento e parcerias institucionais.</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Benefícios para sua rede</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <li key={b} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Fale com nosso time institucional</h2>
          <p className="mt-3 text-muted-foreground">Conte sobre sua rede e entraremos em contato em até 2 dias úteis.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Mensagem enviada! Entraremos em contato em breve."); }}
            className="mt-8 grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="Nome completo" className="bg-background" />
              <Input required placeholder="Cargo / Função" className="bg-background" />
              <Input required placeholder="Município / Instituição" className="bg-background" />
              <Input required type="email" placeholder="E-mail institucional" className="bg-background" />
            </div>
            <Textarea required placeholder="Conte sobre sua rede e necessidades" rows={5} className="bg-background" />
            <Button type="submit" size="lg" className="gradient-hero text-primary-foreground border-0">Enviar mensagem</Button>
          </form>
        </div>
      </section>
    </>
  );
}
