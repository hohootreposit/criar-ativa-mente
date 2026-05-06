import { Gamepad2, BookOpen, GraduationCap, MonitorSmartphone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  { icon: Gamepad2, title: "Trilhas educacionais gamificadas", text: "Jornadas de aprendizagem com desafios, missões e recompensas alinhadas à BNCC." },
  { icon: BookOpen, title: "Conteúdos impressos e digitais", text: "Materiais multimodais que ampliam o acesso e respeitam diferentes contextos." },
  { icon: GraduationCap, title: "Formação docente continuada", text: "Trilhas formativas e mentorias para professores e gestores escolares." },
  { icon: MonitorSmartphone, title: "Plataformas interativas", text: "Tecnologia educacional acessível com monitoramento de aprendizagem em tempo real." },
];

export function Solucao() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A Solução"
          title={<>Integramos <span className="gradient-text">tecnologia, pedagogia e impacto social</span></>}
          description="Soluções desenhadas com escolas, professores e estudantes — testadas em campo e validadas por evidências."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-soft">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/solucoes" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            Ver todos os programas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
