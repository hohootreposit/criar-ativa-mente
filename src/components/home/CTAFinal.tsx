import { Link } from "@tanstack/react-router";
import { Heart, Handshake, Users, ArrowRight } from "lucide-react";

const options = [
  { icon: Handshake, title: "Parceria institucional", text: "Desenvolva projetos com escolas, redes públicas, instituições e comunidades.", to: "/parcerias" },
  { icon: Heart, title: "Apoie esta causa", text: "Apoie iniciativas educacionais e sociais que transformam futuros.", to: "/contato" },
  { icon: Users, title: "Conheça os projetos", text: "Fale com nosso time para conhecer nossas soluções e programas.", to: "/contato" },
];

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
      <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-blob" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            Vamos juntos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Faça parte desta <span className="gradient-text">transformação</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Entre em contato para conhecer nossos projetos, desenvolver parcerias institucionais ou apoiar iniciativas educacionais e sociais.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {options.map((o) => (
            <Link
              key={o.title}
              to={o.to}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <o.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Começar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
