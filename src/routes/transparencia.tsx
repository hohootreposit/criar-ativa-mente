import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { ShieldCheck, FileText, Scale, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Instituto CriarAtivaMente" },
      { name: "description", content: "Compromisso com ética, responsabilidade e gestão transparente. Documentos institucionais e prestação de contas." },
      { property: "og:title", content: "Transparência — Instituto CriarAtivaMente" },
      { property: "og:description", content: "Responsabilidade institucional e respeito às boas práticas de governança." },
    ],
  }),
  component: Page,
});

const pilares = [
  { icon: Scale, title: "Ética", text: "Respeito às boas práticas de governança em toda a nossa atuação." },
  { icon: ShieldCheck, title: "Responsabilidade", text: "Responsabilidade institucional e compromisso social em cada projeto." },
  { icon: FileText, title: "Prestação de contas", text: "Disponibilizamos informações, documentos, relatórios e materiais institucionais." },
  { icon: HeartHandshake, title: "Confiança", text: "Relações baseadas em confiança, integridade e impacto positivo." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title={<>Compromisso com a <span className="gradient-text">gestão transparente</span></>}
        description="O Instituto CriarAtivaMente atua com responsabilidade institucional, compromisso social e respeito às boas práticas de governança."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-base text-muted-foreground">
            Nesta seção disponibilizamos informações institucionais, documentos, relatórios e materiais relacionados à transparência e à prestação de contas. Nosso compromisso é fortalecer relações baseadas em confiança, integridade e impacto positivo.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pilares.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
