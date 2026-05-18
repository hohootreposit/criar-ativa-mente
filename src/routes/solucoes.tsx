import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import { Coins, BookOpen, GraduationCap, HeartHandshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções e Programas — Instituto Criar Ativa Mente" },
      { name: "description", content: "Programas educacionais e sociais integrados: educação financeira, leitura, formação docente, socioemocional e inclusão." },
      { property: "og:title", content: "Soluções e Programas — Instituto Criar Ativa Mente" },
      { property: "og:description", content: "Soluções adaptáveis às necessidades de cada território, rede de ensino ou instituição." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Coins, title: "Educação Financeira e Empreendedora", text: "Projetos voltados ao desenvolvimento da autonomia, planejamento financeiro, protagonismo juvenil e cultura empreendedora." },
  { icon: BookOpen, title: "Leitura e Desenvolvimento Cognitivo", text: "Coleções, revistas e programas de incentivo à leitura com abordagens lúdicas, acessíveis e multiformato." },
  { icon: GraduationCap, title: "Formação Docente", text: "Capacitações, oficinas e trilhas formativas voltadas para metodologias ativas, tecnologia educacional, inclusão e inovação pedagógica." },
  { icon: HeartHandshake, title: "Projetos Socioemocionais", text: "Programas sobre emoções, convivência, cidadania, respeito às diferenças, bullying e cultura de paz." },
  { icon: Users, title: "Inclusão e Impacto Social", text: "Ações voltadas para desenvolvimento comunitário, acessibilidade, fortalecimento de vínculos e inclusão social." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Soluções / Programas"
        title={<>Programas <span className="gradient-text">integrados</span> e adaptáveis</>}
        description="Desenvolvemos programas educacionais e sociais adaptáveis às necessidades de cada território, rede de ensino ou instituição."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-7 shadow-card hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-soft">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border gradient-soft p-10 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Quer levar nossos programas para sua rede?</h2>
          <p className="mt-3 text-muted-foreground">Conheça o modelo de implementação para escolas e prefeituras.</p>
          <Button asChild className="mt-6 gradient-hero text-primary-foreground border-0" size="lg">
            <Link to="/escolas-prefeituras">Falar com nosso time</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
