import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <img src={logo} alt="Instituto Criar Ativa Mente" className="h-10 w-10 object-contain" />
            Instituto Criar Ativa Mente
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Transformando educação, desenvolvimento humano e impacto social em experiências reais.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Rede social" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Institucional</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/quem-somos" className="hover:text-foreground">Quem Somos</Link></li>
            <li><Link to="/metodologia" className="hover:text-foreground">Metodologia</Link></li>
            <li><Link to="/transparencia" className="hover:text-foreground">Transparência</Link></li>
            <li><Link to="/parcerias" className="hover:text-foreground">Parcerias</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Soluções</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/solucoes" className="hover:text-foreground">Programas</Link></li>
            <li><Link to="/impacto" className="hover:text-foreground">Impacto</Link></li>
            <li><Link to="/escolas-prefeituras" className="hover:text-foreground">Escolas e Prefeituras</Link></li>
            <li><Link to="/conteudos" className="hover:text-foreground">Conteúdos</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@institutocriarativamente.org.br</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (XX) XXXX-XXXX</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Brasil</li>
          </ul>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Inscrição recebida!"); }}
            className="mt-5 flex gap-2"
          >
            <Input type="email" required placeholder="Seu e-mail" className="bg-background" />
            <Button type="submit" className="gradient-hero text-primary-foreground border-0">OK</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} EducaImpacto. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00 · Organização da Sociedade Civil</p>
        </div>
      </div>
    </footer>
  );
}
