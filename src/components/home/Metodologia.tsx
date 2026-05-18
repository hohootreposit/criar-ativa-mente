import { Users, Layers, Compass, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { icon: Users, title: "Protagonismo", text: "O estudante no centro do processo de aprendizagem." },
  { icon: Layers, title: "Interdisciplinaridade", text: "Conexões entre áreas para aprendizagens mais significativas." },
  { icon: Compass, title: "Projetos", text: "Aprendizagem baseada em projetos conectados à realidade." },
  { icon: HeartHandshake, title: "Inclusão", text: "Acessibilidade e desenvolvimento socioemocional integrados." },
];

export function Metodologia() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Metodologia"
          title="Inovação pedagógica, aprendizagem ativa e desenvolvimento humano"
          description="Propostas construídas para tornar o aprendizado mais significativo, participativo e conectado à realidade dos estudantes."
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-card hover-lift">
              <div className="relative mx-auto grid h-12 w-12 place-items-center rounded-full gradient-hero text-primary-foreground shadow-soft">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">Pilar 0{i + 1}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
