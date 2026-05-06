import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Gamepad2, BookOpen, GraduationCap, MonitorSmartphone, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções e Programas — EducaImpacto" },
      { name: "description", content: "Trilhas gamificadas, conteúdos multimodais, formação docente e plataformas para monitoramento de aprendizagem." },
      { property: "og:title", content: "Soluções e Programas — EducaImpacto" },
      { property: "og:description", content: "Programas educacionais que integram tecnologia, pedagogia e impacto social." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Gamepad2, title: "Trilhas gamificadas", text: "Jornadas com desafios, missões e recompensas alinhadas à BNCC." },
  { icon: BookOpen, title: "Conteúdos multimodais", text: "Materiais impressos e digitais que ampliam o acesso." },
  { icon: GraduationCap, title: "Formação docente", text: "Trilhas formativas, mentorias e comunidades de prática." },
  { icon: MonitorSmartphone, title: "Plataformas interativas", text: "Tecnologia educacional acessível e engajadora." },
  { icon: BarChart3, title: "Monitoramento de aprendizagem", text: "Dashboards com indicadores claros e acionáveis." },
  { icon: Sparkles, title: "Engajamento do aluno", text: "Estratégias para motivação, pertencimento e protagonismo." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title={<>Programas que integram <span className="gradient-text">tecnologia e pedagogia</span></>}
        description="Soluções desenhadas com escolas e validadas em campo, prontas para escalar em redes públicas e privadas."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-soft">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border gradient-soft p-10 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Quer levar nossos programas para sua rede?</h2>
          <p className="mt-3 text-muted-foreground">Conheça o modelo de implementação para escolas e prefeituras.</p>
          <Button asChild className="mt-6 gradient-hero text-primary-foreground border-0" size="lg">
            <Link to="/escolas-prefeituras">Falar com nosso time</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
