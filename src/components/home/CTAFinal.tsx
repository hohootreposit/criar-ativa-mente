import { Link } from "@tanstack/react-router";
import { Heart, Handshake, Users, ArrowRight } from "lucide-react";

const options = [
  { icon: Heart, title: "Doação", text: "Contribuições pontuais ou recorrentes que sustentam programas educacionais.", to: "/contato" },
  { icon: Handshake, title: "Parceria institucional", text: "Empresas, fundações e governos que escalam impacto educacional conosco.", to: "/parcerias" },
  { icon: Users, title: "Voluntariado", text: "Doe tempo e talento em mentorias, conteúdos e projetos com escolas.", to: "/contato" },
];

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 gradient-hero" aria-hidden />
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-blob" aria-hidden />
      <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-blob" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Junte-se a nós para transformar a educação brasileira
          </h2>
          <p className="mt-4 text-base opacity-90 sm:text-lg">
            Há muitas formas de fazer parte. Escolha a que mais combina com você ou sua organização.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {options.map((o) => (
            <Link
              key={o.title}
              to={o.to}
              className="group rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/15"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/20">
                <o.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm opacity-90">{o.text}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                Começar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
