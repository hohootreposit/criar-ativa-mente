import { SectionHeading } from "@/components/ui/SectionHeading";
import { Landmark, School, Briefcase, GraduationCap, Building2, Users } from "lucide-react";

const partners = [
  { icon: Landmark, label: "Instituições públicas" },
  { icon: School, label: "Escolas" },
  { icon: Briefcase, label: "Empresas" },
  { icon: GraduationCap, label: "Universidades" },
  { icon: Building2, label: "Organizações sociais" },
  { icon: Users, label: "Profissionais" },
];

export function Parceiros() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Parcerias"
          title="Transformações relevantes acontecem de forma colaborativa"
          description="Construímos parcerias com instituições públicas, escolas, empresas, universidades, organizações sociais e profissionais comprometidos com a educação e o desenvolvimento humano."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:bg-secondary">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-sm font-semibold">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
