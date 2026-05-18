import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Heart, Handshake, Users, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato / Apoie — Instituto Criar Ativa Mente" },
      { name: "description", content: "Faça parte desta transformação. Entre em contato para conhecer projetos, desenvolver parcerias ou apoiar iniciativas educacionais e sociais." },
      { property: "og:title", content: "Contato / Apoie — Instituto Criar Ativa Mente" },
      { property: "og:description", content: "Educar também é transformar futuros." },
    ],
  }),
  component: Page,
});

const opcoes = [
  { icon: Heart, key: "apoio", title: "Apoio institucional", text: "Apoie iniciativas educacionais e sociais." },
  { icon: Handshake, key: "parceria", title: "Parceria", text: "Desenvolva projetos conosco." },
  { icon: Users, key: "contato", title: "Conheça os projetos", text: "Saiba mais sobre nossa atuação." },
];

function Page() {
  const [tipo, setTipo] = useState<string>("apoio");
  return (
    <>
      <PageHero
        eyebrow="Contato / Apoie"
        title={<>Faça parte desta <span className="gradient-text">transformação</span></>}
        description="O apoio de parceiros, instituições e colaboradores fortalece ações que impactam estudantes, educadores e comunidades. Educar também é transformar futuros."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {opcoes.map((o) => (
              <button
                key={o.key}
                type="button"
                onClick={() => setTipo(o.key)}
                className={`rounded-2xl border p-6 text-left transition-all ${tipo === o.key ? "border-primary bg-primary/5 shadow-soft" : "border-border bg-card hover:border-primary/40"}`}
              >
                <div className={`grid h-11 w-11 place-items-center rounded-xl ${tipo === o.key ? "gradient-hero text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                  <o.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.text}</p>
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Recebemos sua mensagem. Em breve entraremos em contato!"); }}
            className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-8 shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="Nome completo" />
              <Input required type="email" placeholder="E-mail" />
              <Input placeholder="Telefone (opcional)" />
              <Input placeholder="Organização (se aplicável)" />
            </div>
            <Textarea required rows={5} placeholder="Como você gostaria de apoiar?" />
            <Button type="submit" size="lg" className="gradient-hero text-primary-foreground border-0">Enviar</Button>
          </form>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary" /><div><div className="font-semibold">E-mail</div><div className="text-sm text-muted-foreground">contato@institutocriarativamente.org.br</div></div></div>
            <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary" /><div><div className="font-semibold">Telefone</div><div className="text-sm text-muted-foreground">(XX) XXXX-XXXX</div></div></div>
            <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary" /><div><div className="font-semibold">Apoie</div><div className="text-sm text-muted-foreground">Educar também é transformar futuros.</div></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
