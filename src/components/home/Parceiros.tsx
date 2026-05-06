import { SectionHeading } from "@/components/ui/SectionHeading";

const partners = [
  "Ministério da Educação",
  "UNESCO Brasil",
  "Instituto Lumen",
  "Fundação Saber",
  "RedePública+",
  "EdTech Hub",
  "Aliança pela Infância",
  "Fundo Equidade",
];

export function Parceiros() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Parceiros"
          title="Construímos juntos"
          description="Governo, escolas, empresas e instituições que acreditam na educação como motor de transformação."
        />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <div key={p} className="grid h-24 place-items-center bg-card px-4 text-center font-display text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
