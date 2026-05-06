import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — EducaImpacto" },
      { name: "description", content: "Organização da sociedade civil dedicada a soluções educacionais inovadoras, inclusivas e baseadas em evidências." },
      { property: "og:title", content: "Quem Somos — EducaImpacto" },
      { property: "og:description", content: "Missão, visão, valores e história de uma iniciativa pela educação que transforma." },
    ],
  }),
  component: Page,
});

const valores = [
  { icon: Users, title: "Equidade educacional" },
  { icon: Lightbulb, title: "Inovação pedagógica" },
  { icon: Shield, title: "Transparência" },
  { icon: Target, title: "Impacto mensurável" },
  { icon: Heart, title: "Inclusão" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title={<>Educação que <span className="gradient-text">transforma</span> realidades</>}
        description="Somos uma organização da sociedade civil que combina tecnologia, gamificação e metodologias ativas para melhorar a aprendizagem e a permanência escolar."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Missão</h2>
            <p className="mt-3 text-muted-foreground">Promover o acesso à educação de qualidade por meio de soluções inovadoras, inclusivas e baseadas em evidências.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Eye className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Visão</h2>
            <p className="mt-3 text-muted-foreground">Ser referência nacional em inovação educacional com impacto social escalável.</p>
          </div>
        </div>
      </section>
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Nossos valores</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {valores.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card hover-lift">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Quer fazer parte dessa história?</h2>
          <p className="mt-4 text-muted-foreground">Conheça as formas de apoiar nossa iniciativa.</p>
          <Button asChild className="mt-8 gradient-hero text-primary-foreground border-0" size="lg">
            <Link to="/contato">Apoiar agora</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
