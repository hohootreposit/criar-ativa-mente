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
      { title: "EducaImpacto — Educação que transforma realidades" },
      { name: "description", content: "Educação acessível, inovadora e baseada em evidências. Soluções gamificadas, conteúdos multimodais e formação docente para a educação básica." },
      { property: "og:title", content: "EducaImpacto — Educação que transforma realidades" },
      { property: "og:description", content: "Tecnologia, pedagogia e impacto social a serviço da educação básica brasileira." },
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
