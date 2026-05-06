import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border gradient-soft">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-blob" aria-hidden />
      <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl animate-blob" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
