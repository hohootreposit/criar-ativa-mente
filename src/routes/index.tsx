import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Problema } from "@/components/home/Problema";
import { Solucao } from "@/components/home/Solucao";
import { Impacto } from "@/components/home/Impacto";
import { QuemSomosPreview } from "@/components/home/QuemSomosPreview";
import { Metodologia } from "@/components/home/Metodologia";
import { Parceiros } from "@/components/home/Parceiros";
import { CTAFinal } from "@/components/home/CTAFinal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto CriarAtivaMente — Educação, desenvolvimento humano e impacto social" },
      { name: "description", content: "Transformando educação, desenvolvimento humano e impacto social em experiências reais. Soluções para escolas, redes públicas, instituições e comunidades." },
      { property: "og:title", content: "Instituto CriarAtivaMente" },
      { property: "og:description", content: "Educação, cultura, tecnologia, leitura, empreendedorismo, saúde emocional e transformação social." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Problema />
      <Solucao />
      <Impacto />
      <QuemSomosPreview />
      <Metodologia />
      <Parceiros />
      <CTAFinal />
    </>
  );
}
