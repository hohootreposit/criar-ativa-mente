import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Lightbulb, Puzzle, Rocket, BarChart3, Gamepad2, BookOpen } from "lucide-react";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia — EducaImpacto" },
      { name: "description", content: "Metodologias ativas, gamificação e aprendizagem baseada em evidências aplicadas à educação básica." },
      { property: "og:title", content: "Metodologia — EducaImpacto" },
      { property: "og:description", content: "Como projetamos e implementamos soluções educacionais com impacto." },
    ],
  }),
  component: Page,
});

const steps = [
  { icon: Lightbulb, title: "Diagnóstico", text: "Mapeamos contexto, evidências e necessidades de cada rede." },
  { icon: Puzzle, title: "Co-criação", text: "Desenhamos soluções com escolas, professores e estudantes." },
  { icon: Rocket, title: "Implementação", text: "Aplicamos com formação, suporte e tecnologia integrada." },
  { icon: BarChart3, title: "Monitoramento", text: "Avaliamos resultados e iteramos com base em dados." },
];

const pilares = [
  { icon: Gamepad2, title: "Gamificação", text: "Engajamento, autonomia e progresso visível." },
  { icon: BookOpen, title: "Aprendizagem ativa", text: "Estudante no centro, professor mediador." },
  { icon: BarChart3, title: "Evidências", text: "Decisões baseadas em dados e literatura científica." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Metodologia"
        title={<>Aprendizagem <span className="gradient-text">ativa</span> e baseada em evidências</>}
        description="Um fluxo iterativo que coloca o estudante no centro e fortalece o protagonismo docente."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground"><s.icon className="h-5 w-5" /></div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">Etapa 0{i + 1}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Pilares</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pilares.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
                <p.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
