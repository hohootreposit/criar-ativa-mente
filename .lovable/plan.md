## Adicionar imagem como favicon e logo

**Imagem**: `Ativo_1.png` — árvore com livros coloridos (educação/crescimento). Combina perfeitamente com a temática.

### Passos

1. **Copiar a imagem** para dois locais:
   - `public/favicon.png` — usado como favicon (substitui o atual)
   - `src/assets/logo.png` — usado como logo importável nos componentes

2. **Atualizar favicon** em `src/routes/__root.tsx`:
   - Adicionar `{ rel: "icon", type: "image/png", href: "/favicon.png" }` no array `links` do `head()`

3. **Atualizar logo no Header** (`src/components/layout/Header.tsx`):
   - Importar `logo from "@/assets/logo.png"`
   - Substituir o quadrado gradiente com ícone `Sparkles` por `<img src={logo} alt="EducaImpacto" className="h-9 w-9 object-contain" />`
   - Manter o texto "EducaImpacto" ao lado

4. **Atualizar logo no Footer** (`src/components/layout/Footer.tsx`):
   - Mesma substituição do ícone Sparkles pela imagem importada

### Fora do escopo
- Alterações de paleta de cores (a imagem é multicolorida mas mantemos o tema lilás como identidade visual)
- Geração de variantes (favicon.ico, apple-touch-icon) — apenas PNG é suficiente
