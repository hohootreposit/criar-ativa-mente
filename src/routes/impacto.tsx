import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/impacto")({
  head: () => ({
    meta: [
      { title: "Impacto — Instituto CriarAtivaMente" },
      { name: "description", content: "Impacto educacional e social: aprendizado, oportunidades e transformação nas comunidades atendidas." },
      { property: "og:title", content: "Impacto — Instituto CriarAtivaMente" },
      { property: "og:description", content: "Resultados concretos, participação ativa e construção coletiva em cada projeto." },
    ],
  }),
  component: Page,
});

const contribuicoes = [
  "Melhoria do desempenho escolar",
  "Fortalecimento das competências socioemocionais",
  "Ampliação do acesso à leitura e à cultura",
  "Formação continuada de educadores",
  "Desenvolvimento da autonomia e do protagonismo juvenil",
  "Inclusão educacional e social",
  "Engajamento de famílias e comunidades",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Impacto"
        title={<>Aprendizado, oportunidades e <span className="gradient-text">transformação</span></>}
        description="Nosso trabalho gera impacto educacional e social por meio de ações que fortalecem o aprendizado, ampliam oportunidades e promovem transformação nas comunidades atendidas."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Buscamos contribuir para:</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {contribuicoes.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-base text-muted-foreground">
            Cada projeto é desenvolvido com foco em resultados concretos, participação ativa e construção coletiva.
          </p>
        </div>
      </section>
    </>
  );
}
