import { CheckCircle2 } from "lucide-react";

const items = [
  "Melhoria do desempenho escolar",
  "Fortalecimento das competências socioemocionais",
  "Ampliação do acesso à leitura e à cultura",
  "Formação continuada de educadores",
  "Desenvolvimento da autonomia e do protagonismo juvenil",
  "Inclusão educacional e social",
  "Engajamento de famílias e comunidades",
];

export function Impacto() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 gradient-hero" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_60%)] opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            Impacto
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Aprendizado, oportunidades e transformação
          </h2>
          <p className="mt-4 text-base opacity-90 sm:text-lg">
            Nosso trabalho gera impacto educacional e social fortalecendo o aprendizado e promovendo transformação nas comunidades atendidas.
          </p>
        </div>
        <ul className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-sm sm:text-base">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
