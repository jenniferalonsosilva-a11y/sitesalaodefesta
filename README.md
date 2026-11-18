# sitesalaodefesta

Site do **Espaço D'Liras** — espaço para festas em Bangu (Rio de Janeiro) —
construído em **HTML, CSS e JavaScript puros** (sem frameworks) a partir do
design system do PDF oficial do espaço.

> Espaço para festas · WhatsApp 21 99396-6782 · Instagram @espacodliras

## Estrutura

```
├── index.html          página única com todas as seções
├── css/styles.css      design system (cores, tipografia, formas, responsivo)
├── js/main.js          menu mobile, scroll spy, animações, botão flutuante
├── DESIGN-SYSTEM.md    documentação dos tokens visuais extraídos do PDF
└── assets/             12 fotos extraídas do próprio PDF
```

## Seções

| Seção | Conteúdo |
|---|---|
| Hero | Logo, foto da piscina e destaques |
| Estrutura | Os 10 itens do espaço + horários de funcionamento |
| Novidades | 2º andar com sala de jogos + galeria dos jogos |
| Valores | Tabela 2026, regras de pagamento e remarcação |
| Localização | Endereço, referência e mapa |
| Contato | WhatsApp, Instagram e fotos do local |

## Conteúdo (100% do PDF de origem)

- **Estrutura**: piscina, churrasqueira, wi-fi, fogão industrial, 2 freezer
  (1 freezer e 1 cooler), 10 jogos de mesa, som, televisão, gás (taxa R$ 20).
- **Horários**: domingo a quinta 10:00 às 21:00 · sexta e sábado 10:00 às 22:00.
- **Novidades**: 2º andar com sala de jogos.
- **Valores 2026**: segunda a quinta R$ 350,00 · sexta, sábado e domingo R$ 500.
- **Pagamento**: sinal de R$ 100, restante até uma semana antes do evento,
  sinal não devolvido em caso de desistência, cartão parcelado com acréscimo
  (consultar taxas), remarcação com no mínimo 30 dias de antecedência.
- **Localização**: Vila Nossa Senhora da Conceição n°2 — Antiga rua G, Bangu 4,
  próximo ao Polo Cultural do Jardim Bangu.
- **Contato**: WhatsApp 21 99396-6782 · Instagram @espacodliras.

## Design system

| Token | Hex | Uso |
|---|---|---|
| Azul | `#004AAD` | Títulos, pílulas de seção, rodapé |
| Creme | `#FFF3E3` | Painéis e seções de fundo |
| Dourado | `#C49A6C` | Molduras em "L" nos cantos e selos |
| Marrom | `#8B5E3C` | Detalhes e textos de apoio |
| Vermelho | `#FF3131` / `#D32020` | Avisos (ícone / texto) |

**Tipografia**: Playfair Display (títulos e logo) · Mulish (texto) · Great Vibes (assinatura).

Detalhes completos em [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md).

## Como rodar

```bash
python3 -m http.server 8137
# http://localhost:8137/
```

Ou basta abrir `index.html` no navegador.

## GitHub Pages

**Settings → Pages → Build and deployment → Source: Deploy from a branch**,
branch `main`, pasta `/ (root)` e salvar. O site fica em
`https://jenniferalonsosilva-a11y.github.io/sitesalaodefesta/`.

## Qualidade

Lighthouse: **acessibilidade 100 · boas práticas 100 · SEO 100**.
Responsivo (teste mobile a 390px) e sem erros no console.
