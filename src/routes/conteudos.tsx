import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { BookOpen, Lightbulb, Baby, Library, Smile, Cpu, Accessibility, GraduationCap, Landmark } from "lucide-react";

export const Route = createFileRoute("/conteudos")({
  head: () => ({
    meta: [
      { title: "Conteúdos — Instituto Criar Ativa Mente" },
      { name: "description", content: "Conhecimento, inovação e inspiração para educadores, estudantes e famílias." },
      { property: "og:title", content: "Conteúdos — Instituto Criar Ativa Mente" },
      { property: "og:description", content: "Conteúdos sobre educação, inovação pedagógica, leitura, socioemocional, tecnologia, inclusão, formação docente, cultura e cidadania." },
    ],
  }),
  component: Page,
});

const temas = [
  { icon: BookOpen, tag: "Educação e aprendizagem", title: "Educação e aprendizagem" },
  { icon: Lightbulb, tag: "Inovação pedagógica", title: "Inovação pedagógica" },
  { icon: Baby, tag: "Desenvolvimento", title: "Desenvolvimento infantil e juvenil" },
  { icon: Library, tag: "Leitura", title: "Leitura e alfabetização" },
  { icon: Smile, tag: "Socioemocional", title: "Educação socioemocional" },
  { icon: Cpu, tag: "Tecnologia", title: "Tecnologia educacional" },
  { icon: Accessibility, tag: "Inclusão", title: "Inclusão" },
  { icon: GraduationCap, tag: "Formação", title: "Formação docente" },
  { icon: Landmark, tag: "Cultura", title: "Cultura e cidadania" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title={<>Conhecimento, inovação e <span className="gradient-text">inspiração</span></>}
        description="Neste espaço compartilhamos conteúdos para educadores, estudantes e famílias. Acreditamos na disseminação do conhecimento como ferramenta de transformação social."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {temas.map((c) => (
            <article key={c.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <span className="mt-6 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.tag}</span>
              <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Em breve, novos conteúdos disponíveis nesta área.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
