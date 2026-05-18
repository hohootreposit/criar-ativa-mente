import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const blocks = [
  { icon: Target, title: "Missão", text: "Promover transformação social e educacional por meio de experiências de aprendizagem inovadoras, inclusivas e humanizadas." },
  { icon: Eye, title: "Visão", text: "Ser referência nacional em soluções educacionais e projetos de impacto social voltados ao desenvolvimento humano e à inovação pedagógica." },
  { icon: Heart, title: "Valores", text: "Inclusão · Ética · Inovação · Compromisso social · Educação transformadora · Sustentabilidade · Valorização humana." },
];

export function QuemSomosPreview() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Quem Somos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Comprometidos com o <span className="gradient-text">desenvolvimento educacional, social e humano</span>.
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Atuamos com metodologias inovadoras, projetos interdisciplinares e soluções acessíveis para escolas públicas e privadas, secretarias de educação, organizações sociais e iniciativas comunitárias.
          </p>
          <Button asChild className="mt-8 gradient-hero text-primary-foreground border-0">
            <Link to="/quem-somos">Conheça o Instituto <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {blocks.map((b) => (
            <div key={b.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
