import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/impacto", label: "Impacto" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/escolas-prefeituras", label: "Escolas e Prefeituras" },
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/transparencia", label: "Transparência" },
  { to: "/parcerias", label: "Parcerias" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2 font-display text-base font-bold">
          <img src={logo} alt="Instituto CriarAtivaMente" className="h-9 w-9 object-contain" />
          <span className="whitespace-nowrap">Instituto CriarAtivaMente</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-0.5 lg:flex">
          {navItems.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="default" className="hidden sm:inline-flex gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90">
            <Link to="/contato">Apoie</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((it) => (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {it.label}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-md gradient-hero px-3 py-3 text-center font-semibold text-primary-foreground"
                >
                  Apoie a iniciativa
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
