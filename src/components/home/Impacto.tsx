import { CheckCircle2, Sparkles } from "lucide-react";

const items = [
  { title: "Desempenho escolar", desc: "Melhoria mensurável nos resultados de aprendizagem." },
  { title: "Competências socioemocionais", desc: "Fortalecimento de habilidades para a vida." },
  { title: "Leitura e cultura", desc: "Ampliação do acesso a livros e experiências culturais." },
  { title: "Formação de educadores", desc: "Capacitação continuada com prática reflexiva." },
  { title: "Protagonismo juvenil", desc: "Desenvolvimento da autonomia e do pensamento crítico." },
  { title: "Inclusão", desc: "Educação que acolhe e respeita a diversidade." },
  { title: "Famílias e comunidades", desc: "Engajamento ativo no processo educativo." },
  { title: "Inovação pedagógica", desc: "Metodologias ativas conectadas ao século XXI." },
];

export function Impacto() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Impacto
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Aprendizado, oportunidades e <span className="gradient-text">transformação</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Nosso trabalho gera impacto educacional e social, fortalecendo o aprendizado e promovendo transformação nas comunidades atendidas.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li
              key={it.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
