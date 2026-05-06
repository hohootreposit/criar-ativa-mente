import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { FileText, Video, Newspaper } from "lucide-react";

export const Route = createFileRoute("/conteudos")({
  head: () => ({
    meta: [
      { title: "Conteúdos — EducaImpacto" },
      { name: "description", content: "Artigos, materiais educacionais e estudos sobre inovação pedagógica e impacto social." },
      { property: "og:title", content: "Conteúdos — EducaImpacto" },
      { property: "og:description", content: "Conhecimento aberto sobre educação inovadora e baseada em evidências." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: FileText, tag: "Artigo", title: "Como gamificação aumenta o engajamento na educação básica" },
  { icon: Newspaper, tag: "Estudo", title: "Evidências sobre formação docente continuada" },
  { icon: Video, tag: "Vídeo", title: "BNCC na prática: trilhas para o Fundamental II" },
  { icon: FileText, tag: "Guia", title: "Implementando metodologias ativas em redes públicas" },
  { icon: Newspaper, tag: "Pesquisa", title: "Indicadores de aprendizagem em larga escala" },
  { icon: Video, tag: "Webinar", title: "Tecnologia educacional acessível e equitativa" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title={<>Conhecimento aberto sobre <span className="gradient-text">educação inovadora</span></>}
        description="Artigos, estudos, vídeos e materiais práticos para gestores, professores e parceiros."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {items.map((c) => (
            <article key={c.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <span className="mt-6 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.tag}</span>
              <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Em breve disponível na biblioteca aberta da EducaImpacto.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
