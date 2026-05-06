import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Building2, School, Briefcase, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/parcerias")({
  head: () => ({
    meta: [
      { title: "Parcerias — EducaImpacto" },
      { name: "description", content: "Governo, escolas, empresas e instituições que escalam impacto educacional conosco." },
      { property: "og:title", content: "Parcerias — EducaImpacto" },
      { property: "og:description", content: "Tipos de parceria e como sua organização pode somar conosco." },
    ],
  }),
  component: Page,
});

const tipos = [
  { icon: Landmark, title: "Governo", text: "Convênios e termos de fomento com municípios e estados." },
  { icon: School, title: "Escolas", text: "Implementação direta em redes públicas e privadas." },
  { icon: Briefcase, title: "Empresas", text: "Investimento social privado e parcerias estratégicas." },
  { icon: Building2, title: "Instituições", text: "Fundações, universidades e organizações da sociedade civil." },
];

const partners = ["Ministério da Educação", "UNESCO Brasil", "Instituto Lumen", "Fundação Saber", "RedePública+", "EdTech Hub", "Aliança pela Infância", "Fundo Equidade"];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Parcerias"
        title={<>Construímos <span className="gradient-text">juntos</span></>}
        description="Acreditamos que o impacto em escala só é possível com colaboração entre setores."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {tipos.map((t) => (
            <div key={t.title} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground"><t.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Quem caminha conosco</h2>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {partners.map((p) => (
              <div key={p} className="grid h-24 place-items-center bg-card px-4 text-center font-display text-sm font-semibold text-muted-foreground">{p}</div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gradient-hero text-primary-foreground border-0">
              <Link to="/contato">Seja um parceiro</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
