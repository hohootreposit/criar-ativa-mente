import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Building2, School, Briefcase, Landmark, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/parcerias")({
  head: () => ({
    meta: [
      { title: "Parcerias — Instituto CriarAtivaMente" },
      { name: "description", content: "Construímos parcerias com instituições públicas, escolas, empresas, universidades, organizações sociais e profissionais comprometidos com a educação." },
      { property: "og:title", content: "Parcerias — Instituto CriarAtivaMente" },
      { property: "og:description", content: "Transformações relevantes acontecem de forma colaborativa." },
    ],
  }),
  component: Page,
});

const tipos = [
  { icon: Landmark, title: "Instituições públicas", text: "Atuação conjunta com órgãos públicos para ampliar o alcance da educação." },
  { icon: School, title: "Escolas", text: "Implementação direta em redes públicas e privadas." },
  { icon: Briefcase, title: "Empresas", text: "Parcerias estratégicas e investimento social privado." },
  { icon: GraduationCap, title: "Universidades", text: "Pesquisa, extensão e produção de conhecimento." },
  { icon: Building2, title: "Organizações sociais", text: "Articulação com a sociedade civil e iniciativas comunitárias." },
  { icon: Users, title: "Profissionais", text: "Colaboradores comprometidos com a educação e o desenvolvimento humano." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Parcerias"
        title={<>Transformações <span className="gradient-text">colaborativas</span></>}
        description="Acreditamos na força da colaboração para ampliar oportunidades, desenvolver soluções inovadoras e gerar impacto social sustentável."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
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
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Vamos construir juntos?</h2>
          <p className="mt-4 text-muted-foreground">Se sua instituição deseja desenvolver projetos conosco, entre em contato.</p>
          <Button asChild size="lg" className="mt-8 gradient-hero text-primary-foreground border-0">
            <Link to="/contato">Seja um parceiro</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
