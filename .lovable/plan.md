
# Site Institucional — EducaImpacto (placeholder)

Construção de site institucional moderno com foco em conversão (parceiros, gestores, apoiadores). Nesta etapa: **Home completa e impactante** + **estrutura de rotas** para as demais páginas (cada uma com hero + placeholder e SEO próprio, prontas para popular depois).

## Identidade visual

- **Paleta**: roxo/lilás como primária, base preto/branco, gradientes sutis lilás→violeta. Tokens semânticos definidos em `src/styles.css` (oklch).
  - `--primary` lilás vibrante, `--primary-glow` lilás claro
  - `--gradient-hero`, `--gradient-soft`, `--shadow-elegant`
- **Tipografia**: Inter (texto) + Space Grotesk (títulos) via Google Fonts. Hierarquia forte (display 5xl–7xl).
- **Animações**: fade-in, scale-in, float, contadores; scroll suave; hover-lift nos cards.
- **Componentes**: shadcn (Button com variante `hero` e `outline-glow`, Card, Badge).

## Arquitetura de rotas (TanStack Start)

Cada arquivo abaixo terá seu próprio `head()` com title/description/og.

```
src/routes/
  __root.tsx          (atualizar: Header + Footer compartilhados)
  index.tsx           (Home completa)
  quem-somos.tsx
  solucoes.tsx
  impacto.tsx
  metodologia.tsx
  escolas-prefeituras.tsx
  conteudos.tsx
  transparencia.tsx
  parcerias.tsx
  contato.tsx         (Apoie/Contato)
```

Páginas internas nesta entrega: hero próprio + 1-2 seções placeholder + CTA, design coerente com a Home, prontas para expansão.

## Componentes compartilhados

```
src/components/
  layout/
    Header.tsx        (nav sticky, mobile sheet menu, CTA "Apoie")
    Footer.tsx        (links rápidos, redes, contato, newsletter)
  home/
    Hero.tsx          (headline, 3 CTAs, cards flutuantes com indicadores, blob gradiente)
    Problema.tsx      (3 cards com estatísticas + ícones)
    Solucao.tsx       (4 cards: trilhas gamificadas, conteúdos, formação, plataformas)
    Impacto.tsx       (3 contadores animados, fundo gradiente)
    QuemSomosPreview.tsx  (missão/visão/valores resumido + link)
    Metodologia.tsx   (fluxo em etapas)
    Parceiros.tsx     (carrossel de logos placeholder)
    CTAFinal.tsx      (apoie/parceria/voluntariado)
  ui/
    SectionHeading.tsx
    StatCounter.tsx   (intersection observer + animação)
    FeatureCard.tsx
    PageHero.tsx      (hero reutilizável para páginas internas)
```

## Home — seções (ordem)

1. **Hero**: headline grande, subheadline, 3 botões (Programas / Parceiro / Apoie), ilustração SVG abstrata + cards flutuantes ("87% engajamento", "+1.200 escolas", etc.), badge "ONG educacional".
2. **O Problema**: 3 cards com estatísticas (baixa aprendizagem, desmotivação, acesso limitado) + ícones Lucide.
3. **A Solução**: 4 cards (trilhas gamificadas, conteúdos multimodais, formação docente, plataformas) com hover-lift.
4. **Impacto**: 3 contadores animados sobre gradiente lilás (alunos, escolas, professores).
5. **Quem Somos (preview)**: missão + valores em chips, CTA "Conheça nossa história".
6. **Metodologia (preview)**: 4 etapas em fluxo horizontal/vertical responsivo.
7. **Parceiros**: grade de logos placeholder (texto estilizado).
8. **CTA Final**: 3 cards (Doação, Parceria, Voluntariado) + fundo impactante.

## Detalhes técnicos

- Apenas frontend, sem Lovable Cloud (formulários visuais sem persistência — botão de submit mostra toast de sucesso via sonner).
- Imagens: sem geração de IA — uso de SVGs abstratos (blobs/gradientes) e ícones Lucide.
- Acessibilidade: contraste AA, aria-labels, semântica (header/main/footer/section/h1 único por rota), foco visível.
- SEO: head() único por rota, h1 único, meta description <160, og:title/description.
- Responsivo: mobile-first, menu hamburguer (Sheet) abaixo de md.
- Performance: lazy-mount de seções via CSS animations; sem bibliotecas extras pesadas.

## Fora do escopo desta etapa

- Conteúdo real (textos institucionais, números reais, logos reais) — usar placeholders coerentes.
- Backend / formulários persistentes.
- Geração de imagens com IA.
- Build-out completo de cada página interna (ficam como hero + placeholder estruturado).
