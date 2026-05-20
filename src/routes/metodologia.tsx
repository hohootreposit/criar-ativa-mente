import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Users, Layers, Compass, HeartHandshake, Accessibility } from "lucide-react";

export const Route = createFileRoute("/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia — Instituto CriarAtivaMente" },
      { name: "description", content: "Inovação pedagógica, aprendizagem ativa e desenvolvimento humano: protagonismo, interdisciplinaridade, projetos, inclusão e socioemocional." },
      { property: "og:title", content: "Metodologia — Instituto CriarAtivaMente" },
      { property: "og:description", content: "Aprendizagem significativa, participativa e conectada à realidade dos estudantes." },
    ],
  }),
  component: Page,
});

const pilares = [
  { icon: Users, title: "Protagonismo do estudante", text: "O estudante no centro do processo de aprendizagem." },
  { icon: Layers, title: "Interdisciplinaridade", text: "Conexões entre áreas do conhecimento para aprendizagens mais significativas." },
  { icon: Compass, title: "Aprendizagem baseada em projetos", text: "Práticas conectadas à realidade dos estudantes e do território." },
  { icon: Accessibility, title: "Inclusão e acessibilidade", text: "Soluções pensadas para que todos possam aprender." },
  { icon: HeartHandshake, title: "Desenvolvimento socioemocional", text: "Emoções, convivência e cidadania integradas ao currículo." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Metodologia"
        title={<>Inovação pedagógica e <span className="gradient-text">desenvolvimento humano</span></>}
        description="Nossa metodologia combina inovação pedagógica, aprendizagem ativa e desenvolvimento humano."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Trabalhamos com abordagens que valorizam:</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pilares.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground"><p.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-muted-foreground sm:text-lg">
            As propostas são construídas para tornar o processo de aprendizagem mais significativo, participativo e conectado à realidade dos estudantes.
          </p>
        </div>
      </section>
    </>
  );
}
