import { StatCounter } from "@/components/ui/StatCounter";

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
            Transformando vidas em todo o Brasil
          </h2>
          <p className="mt-4 text-base opacity-90 sm:text-lg">
            Resultados construídos junto a redes públicas, parceiros e comunidades educadoras.
          </p>
        </div>
        <div className="mt-14 grid gap-12 sm:grid-cols-3">
          <StatCounter end={350000} label="Alunos atendidos" />
          <StatCounter end={1200} label="Escolas impactadas" />
          <StatCounter end={8500} label="Professores formados" />
        </div>
      </div>
    </section>
  );
}
