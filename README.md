# Steel Arte

Site institucional da **Steel Arte** — ateliê de arte metálica que desenvolve painéis, divisórias, brises, portões, portas, guarda-corpos, pergolados e objetos decorativos sob medida, com corte a laser de alta precisão, para arquitetura de alto padrão.

> **Arte. Metal. Arquitetura.**

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Fontes: Cormorant Garamond (títulos) + Jost (rótulos/UI)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

- `app/` — rotas (App Router) e estilos globais
- `components/` — seções e elementos da Home (Hero, Produtos, Processo, Diferenciais, Galeria, etc.)
- `lib/site.ts` — constantes de marca e contato
- `public/images/` — imagens otimizadas usadas no site
- `MAPA-DO-SITE-E-COPY.md` — mapa do site e copy mestre (documento-guia)
- `scripts/` — utilitários (geração de logo, contact sheets, screenshots via CDP)

## Pendências de conteúdo

- Número de WhatsApp em `lib/site.ts` é placeholder — substituir pelo real.
- Páginas internas (História, Produtos, Galeria, Arquitetos, Contato) ainda não construídas — exibem a tela "Em breve".
