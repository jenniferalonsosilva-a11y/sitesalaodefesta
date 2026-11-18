# Design System — Espaço D'Liras

Tokens extraídos diretamente do PDF **"Espaço D'Liras"** (Canva, 6 páginas, 1440×810).
Este documento serve de referência para manter a identidade visual do site.

---

## 1. Paleta

| Token | Hex | Uso no PDF | Uso no site |
|---|---|---|---|
| `--azul` | `#004AAD` | Título "Espaço D'Liras", pílulas de seção, caixa de horários | Títulos, pílulas, botões, barra de horários, rodapé |
| `--azul-escuro` | `#003A87` | — | Hover dos botões azuis |
| `--azul-claro` | `#E8F0FB` | — | Fundo dos ícones da estrutura |
| `--creme` | `#FFF3E3` | Painéis de conteúdo de todas as páginas | Painéis, seções de fundo, hero |
| `--dourado` | `#C49A6C` | Molduras em "L" no canto superior direito | Molduras, selo "Novidades", detalhes |
| `--marrom` | `#8B5E3C` | Segunda moldura do canto | Texto de apoio, moldura secundária |
| `--vermelho` | `#FF3131` | Avisos de pagamento / remarcação | Ícone do aviso e destaques (contraste não textual) |
| `--vermelho-txt` | `#D32020` | O mesmo vermelho, em texto | Aviso "Remarcação…" (5,2:1 sobre branco) |
| `--zap` | `#0F8246` | Verde do WhatsApp | Botões de WhatsApp (4,9:1 sobre branco) |
| `--zap-escuro` | `#0B6738` | — | Hover dos botões de WhatsApp |
| `--preto` | `#141414` | Corpo dos títulos serifados | Títulos |
| `--branco` | `#FFFFFF` | Fundo dos slides, cartões | Fundo e cartões |

---

## 2. Tipografia

| Papel | Fonte | Onde aparece no PDF |
|---|---|---|
| Logo / display | **Playfair Display**, itálico, peso 900 | "Espaço D'Liras" na capa |
| Títulos de seção | **Playfair Display**, peso 700 | "O espaço oferece:", "Horários:", "Novidades:", "Redes sociais" |
| Assinatura manuscrita | **Great Vibes** | "Espaço para festas" sob o logo |
| Texto e UI | **Mulish** 400/600/700/800 | Listas, valores, endereço, "2026:" |

Escala usada no site:

```
--serif  : "Playfair Display", Georgia, serif
--sans   : "Mulish", "Segoe UI", Helvetica, Arial, sans-serif
--script : "Great Vibes", cursive

h1  clamp(2.7rem → 5.4rem)   itálico 900, azul
h2  clamp(2.0rem → 3.35rem)  peso 700
h3  clamp(1.4rem → 2.0rem)
p   1rem (base 17px)
```

---

## 3. Formas e elementos

- **Pílula de seção**: fundo `#004AAD`, texto branco, `border-radius: 999px`,
  padding `.35em 1.5em` — reproduz as etiquetas "Informações:", "Valores:", "Localização:".
- **Painel de conteúdo**: fundo `#FFF3E3`, `border-radius: 34px`, sombra suave.
- **Moldura em "L"**: dois ângulos sobrepostos (`border-top` + `border-right`),
  dourado por fora e marrom por dentro, no canto superior direito do painel.
- **Fotos**: `border-radius: 18px`, sombra `0 12px 30px rgba(0,0,0,.12)`,
  legenda em gradiente escuro na base.
- **Cartão de preço**: branco com borda `2px` azul; o destaque vira bloco azul
  cheio com etiqueta dourada "Mais procurado".
- **Aviso vermelho**: texto `#D32020` em negrito (o `#FF3131` original fica no ícone),
  sempre acompanhado de ícone.

---

## 4. Layout

- Largura máxima do conteúdo: **1180px**, margem lateral mínima de 24px.
- Respiro entre seções: `clamp(3.5rem, 8vw, 6.5rem)`.
- Grade de estrutura: `repeat(auto-fit, minmax(230px, 1fr))`.
- Galerias: 2 colunas (estrutura), 3 colunas (localização), mosaico 2×2 (novidades).
- Breakpoints: **1285px** (moldura dourada entra para dentro do painel),
  **980px** (seções em coluna única), **860px** (menu hambúrguer), **560px** (tudo em 1 coluna).

---

## 5. Ícones e imagens

- Ícones: SVG inline, traço `1.8`, cantos arredondados — sem bibliotecas externas.
- Todas as fotos foram extraídas do próprio PDF (`assets/`) para manter a identidade.
- Animação de entrada: opacidade + deslocamento de 28px, respeitando
  `prefers-reduced-motion`.

---

## 6. Conteúdo (mantido 100% do PDF)

- **Estrutura**: piscina, churrasqueira, wi-fi, fogão industrial, 2 freezer
  (1 freezer e 1 cooler), 10 jogos de mesa, som, televisão, gás (taxa R$ 20).
- **Horários**: domingo a quinta 10:00–21:00 · sexta e sábado 10:00–22:00.
- **Novidades**: 2º andar com sala de jogos.
- **Valores 2026**: segunda a quinta R$ 350,00 · sexta, sábado e domingo R$ 500.
- **Pagamento**: sinal de R$ 100, restante até uma semana antes do evento,
  sinal não devolvido em caso de desistência, cartão parcelado com acréscimo
  (consultar taxas), remarcação com no mínimo 30 dias de antecedência.
- **Localização**: Vila Nossa Senhora da Conceição n°2 — Antiga rua G, Bangu 4,
  próximo ao Polo Cultural do Jardim Bangu · `espacodliras.mapps.localizacao.goo.gl`
- **Contato**: WhatsApp 21 99396-6782 (`wa.me/espacodliras`) · Instagram `@espacodliras`

---

## 7. Ajustes de acessibilidade

O PDF foi a referência visual, mas três cores foram calibradas para passar no
WCAG AA mantendo o mesmo caráter cromático:

| Uso | No PDF | No site | Motivo |
|---|---|---|---|
| Texto do aviso de remarcação | `#FF3131` | `#D32020` | 3,66:1 → 5,2:1 sobre branco |
| Botões de WhatsApp | verde vivo | `#0F8246` | 3,09:1 → 4,9:1 com texto branco |
| Selos dourados | texto branco | texto `#2A1C0E` | 2,56:1 → 6,4:1 |

Auditoria Lighthouse na página final: **acessibilidade 100 · boas práticas 100 · SEO 100**.
