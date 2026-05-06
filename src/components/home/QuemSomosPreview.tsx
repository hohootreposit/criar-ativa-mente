import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const blocks = [
  { icon: Target, title: "Missão", text: "Promover o acesso à educação de qualidade por meio de soluções inovadoras, inclusivas e baseadas em evidências." },
  { icon: Eye, title: "Visão", text: "Ser referência nacional em inovação educacional com impacto social escalável." },
  { icon: Heart, title: "Valores", text: "Equidade · Inovação pedagógica · Transparência · Impacto mensurável · Inclusão." },
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
            Uma organização da sociedade civil dedicada à <span className="gradient-text">educação que transforma</span>.
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Combinamos tecnologia, gamificação e metodologias ativas para melhorar a aprendizagem e a permanência escolar de estudantes da educação básica.
          </p>
          <Button asChild className="mt-8 gradient-hero text-primary-foreground border-0">
            <Link to="/quem-somos">Conheça nossa história <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
