import { AlertTriangle, BookX, Frown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: BookX, stat: "Educação", title: "Aprendizagem ativa", text: "Valorizamos a aprendizagem ativa, a inclusão e a formação integral dos estudantes." },
  { icon: Frown, stat: "Acesso", title: "Democratização", text: "Promovemos a democratização do acesso ao conhecimento em escolas e comunidades." },
  { icon: AlertTriangle, stat: "Futuro", title: "Competências", text: "Preparamos estudantes para os desafios sociais, culturais e profissionais do futuro." },
];

export function Problema() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nosso compromisso"
          title="Educar é ampliar possibilidades"
          description="Acreditamos que educar é fortalecer vínculos e criar caminhos para um futuro mais humano, criativo e sustentável."
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
