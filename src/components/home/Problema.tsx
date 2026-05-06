import { AlertTriangle, BookX, Frown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: BookX, stat: "60%", title: "Baixa proficiência", text: "dos estudantes da educação básica não atingem nível adequado em leitura e matemática." },
  { icon: Frown, stat: "1 em 4", title: "Desmotivação escolar", text: "alunos relatam falta de interesse e propósito nas atividades de sala de aula." },
  { icon: AlertTriangle, stat: "70%", title: "Acesso limitado", text: "das redes públicas têm pouco acesso a metodologias inovadoras e formação continuada." },
];

export function Problema() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="O Problema"
          title="A educação brasileira enfrenta desafios urgentes"
          description="Milhões de estudantes ainda não têm acesso a oportunidades reais de aprender com qualidade, engajamento e propósito."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-8 shadow-card hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <it.icon className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-4xl font-bold gradient-text">{it.stat}</div>
              <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
