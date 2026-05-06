import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { FileText, Download, ShieldCheck, Scale, Users } from "lucide-react";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — EducaImpacto" },
      { name: "description", content: "Estatuto, relatórios de atividades, prestação de contas e parceiros. Compromisso com a transparência institucional." },
      { property: "og:title", content: "Transparência — EducaImpacto" },
      { property: "og:description", content: "Documentos institucionais, relatórios e prestação de contas." },
    ],
  }),
  component: Page,
});

const docs = [
  { icon: Scale, title: "Estatuto Social", desc: "Documento jurídico fundador da organização." },
  { icon: FileText, title: "Relatório de Atividades 2024", desc: "Resultados, programas e parcerias do último ano." },
  { icon: ShieldCheck, title: "Prestação de Contas 2024", desc: "Demonstrações financeiras auditadas." },
  { icon: Users, title: "Lista de Parceiros", desc: "Organizações que apoiam nossas iniciativas." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        title={<>Compromisso com a <span className="gradient-text">prestação de contas</span></>}
        description="Acreditamos que confiança se constrói com clareza. Nossos documentos institucionais estão disponíveis publicamente."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {docs.map((d) => (
            <a key={d.title} href="#" className="flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
              <Download className="h-5 w-5 shrink-0 text-muted-foreground" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
