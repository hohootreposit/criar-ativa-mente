import { Lightbulb, Puzzle, BarChart3, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { icon: Lightbulb, title: "Diagnóstico", text: "Mapeamos o contexto, evidências e necessidades de cada rede." },
  { icon: Puzzle, title: "Co-criação", text: "Desenhamos soluções com escolas, professores e estudantes." },
  { icon: Rocket, title: "Implementação", text: "Aplicamos com formação, suporte e tecnologia integrada." },
  { icon: BarChart3, title: "Monitoramento", text: "Avaliamos resultados de aprendizagem e iteramos com base em dados." },
];

export function Metodologia() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Metodologia"
          title="Aprendizagem ativa, gamificada e baseada em evidências"
          description="Um fluxo iterativo que coloca o estudante no centro e fortalece o protagonismo docente."
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-card hover-lift">
              <div className="relative mx-auto grid h-12 w-12 place-items-center rounded-full gradient-hero text-primary-foreground shadow-soft">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">Etapa 0{i + 1}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
