import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { StatCounter } from "@/components/ui/StatCounter";
import { Quote, MapPin } from "lucide-react";

export const Route = createFileRoute("/impacto")({
  head: () => ({
    meta: [
      { title: "Impacto — EducaImpacto" },
      { name: "description", content: "Indicadores educacionais, resultados qualitativos e estudos de caso de iniciativas em todo o Brasil." },
      { property: "og:title", content: "Impacto — EducaImpacto" },
      { property: "og:description", content: "Resultados mensuráveis em aprendizagem, engajamento e formação docente." },
    ],
  }),
  component: Page,
});

const cases = [
  { local: "Rede Municipal — Recife/PE", text: "Aumento de 28% na proficiência em leitura após 12 meses de implementação." },
  { local: "Rede Estadual — Goiás/GO", text: "Redução de 19% na evasão escolar com trilhas gamificadas no ensino fundamental." },
  { local: "Consórcio de Escolas — Vale do Ribeira/SP", text: "92% dos professores relataram melhoria no engajamento dos estudantes." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Impacto"
        title={<>Resultados <span className="gradient-text">mensuráveis</span> em todo o Brasil</>}
        description="Acompanhamos indicadores quantitativos e qualitativos para garantir que cada estudante avance."
      />
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 text-primary-foreground sm:grid-cols-3 sm:px-6 lg:px-8">
          <StatCounter end={350000} label="Alunos atendidos" />
          <StatCounter end={1200} label="Escolas impactadas" />
          <StatCounter end={8500} label="Professores formados" />
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Estudos de caso</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <div key={c.local} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-4 text-foreground">{c.text}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {c.local}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
