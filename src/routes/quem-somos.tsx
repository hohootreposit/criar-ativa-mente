import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Target, Eye, Heart, Users, Lightbulb, Shield, Leaf, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Instituto CriarAtivaMente" },
      { name: "description", content: "Organização comprometida com o desenvolvimento educacional, social e humano por meio de metodologias inovadoras e projetos interdisciplinares." },
      { property: "og:title", content: "Quem Somos — Instituto CriarAtivaMente" },
      { property: "og:description", content: "Missão, visão e valores do Instituto CriarAtivaMente." },
    ],
  }),
  component: Page,
});

const valores = [
  { icon: Users, title: "Inclusão" },
  { icon: Shield, title: "Ética" },
  { icon: Lightbulb, title: "Inovação" },
  { icon: Heart, title: "Compromisso social" },
  { icon: GraduationCap, title: "Educação transformadora" },
  { icon: Leaf, title: "Sustentabilidade" },
  { icon: Target, title: "Valorização humana" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title={<>Desenvolvimento educacional, social e <span className="gradient-text">humano</span></>}
        description="Atuamos com metodologias inovadoras, projetos interdisciplinares e soluções acessíveis, valorizando a aprendizagem ativa, a inclusão, a formação integral e a democratização do acesso ao conhecimento."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-center text-base text-muted-foreground">
            Desenvolvemos programas voltados para escolas públicas e privadas, secretarias de educação, organizações sociais e iniciativas comunitárias. Trabalhamos com propostas que fortalecem o pensamento crítico, a criatividade, a autonomia e o desenvolvimento integral dos estudantes, preparando-os para os desafios sociais, culturais e profissionais do futuro.
          </p>
        </div>
      </section>
      <section className="bg-background py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Missão</h2>
            <p className="mt-3 text-muted-foreground">Promover transformação social e educacional por meio de experiências de aprendizagem inovadoras, inclusivas e humanizadas.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <Eye className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Visão</h2>
            <p className="mt-3 text-muted-foreground">Ser referência nacional em soluções educacionais e projetos de impacto social voltados ao desenvolvimento humano e à inovação pedagógica.</p>
          </div>
        </div>
      </section>
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Nossos valores</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
