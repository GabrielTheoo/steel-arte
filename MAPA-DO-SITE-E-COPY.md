# STEEL ARTE — Mapa do Site & Copy Mestre

> Documento-guia do projeto. Toda a copy abaixo está **auditada e profissionalizada** a partir do briefing original e da apresentação institucional (PDF). Construção será feita seção por seção a partir deste mapa.

---

## 0. Fundação da marca

| Item | Definição |
|---|---|
| **Nome** | Steel Arte |
| **Domínio / e-mail** | steelarte.com.br · contato@steelarte.com.br |
| **Redes** | Instagram @SteelArte · Facebook.com/SteelArte |
| **Assinatura de método** | Projeto · Desenvolvimento · Instalação |
| **Materiais técnicos** | Aço galvanizado com pintura eletrostática · Aço corten · Corte a laser de alta precisão |
| **Posicionamento** | Arte metálica sob medida para arquitetura de alto padrão — não uma serralheria, mas um ateliê de design |

### Conceito de posicionamento (a escolher)
- **Opção A —** *"Arte Metálica Italiana para Arquitetura Contemporânea"*
- **Opção B —** *"Design Italiano. Precisão Brasileira."* ← mais memorável, vira tagline curta
- **Opção C —** *"O metal como linguagem arquitetônica."*

### Auditoria do briefing (pontos a confirmar)
1. **A narrativa "25 anos na Itália"** aparece só no briefing, não no PDF. É o ativo emocional mais forte do site — **precisa ser confirmada e detalhada** (cidade/região da Itália, ano de retorno ao Brasil, ano de fundação da Steel Arte).
2. Os **números soltos** ao lado das categorias no briefing (Painéis "8", Portões "4", Guarda-Corpos "7") foram interpretados como *quantidade de projetos de referência disponíveis por categoria* — não serão exibidos como números crus. Confirmar significado.
3. **Não exibir nada que soe "serralheria"** — vocabulário todo voltado a arquitetura, design e exclusividade.
4. Fotos: nem todo o acervo é portfólio. As pastas curadas (FACHADAS, DIVISÓRIAS, OBJETOS, PERGOLADOS) são prioridade; JOSEMAR/DASA/RSR exigem seleção fina.

---

## 1. Arquitetura do site (sitemap)

```
/                         HOME (rolagem rica, prévia de todas as seções)
/historia                 Nossa História — Da Itália para o Brasil
/produtos                 Produtos — visão geral (índice das 8 categorias)
  /produtos/paineis-artisticos
  /produtos/divisorias-decorativas
  /produtos/brises-de-seguranca
  /produtos/portoes-exclusivos
  /produtos/portas-arquitetonicas
  /produtos/guarda-corpos
  /produtos/pergolados
  /produtos/objetos-de-decoracao
/processo                 Como trabalhamos — 5 etapas
/galeria                  Galeria de Projetos (filtrável por tipologia)
/arquitetos               Para Arquitetos — área de parceria profissional
/contato                  Contato + Solicitação de orçamento
```

**Navegação principal:** Início · História · Produtos ▾ · Galeria · Arquitetos · Contato
**Ações fixas:** Botão "Solicitar orçamento" + WhatsApp flutuante
**Rodapé:** logo, navegação, contato, redes, assinatura "Projeto · Desenvolvimento · Instalação"

*Diferenciais* e *Processo* aparecem como seções na Home e podem ter página própria.

---

## 2. Direção de design

**Aesthetic:** Luxo editorial / ateliê de arquitetura. Minimalista, fotografia grande, pouco texto, muito respiro. O visitante deve sentir que navega no portfólio de um estúdio de design — não num site comercial.

### Paleta (papéis definidos)
| Papel | Cor | Hex aprox. |
|---|---|---|
| Dominante (60%) | Preto fosco / quase-preto | `#0E0E0C` |
| Claro (seções) | Off-white / gesso | `#F2EFEA` |
| Secundária (30%) | Grafite | `#3A3A37` |
| Acento (10%) | Corten oxidado | `#9C5B3B` |
| Acento luminoso | Dourado envelhecido | `#B2935E` |

### Tipografia (máx. 2 famílias)
- **Títulos —** serifa de alto contraste, editorial italiana: **Cormorant Garamond** (elegante, "casa de design").
- **Rótulos / navegação / corpo —** geométrica inspirada em Futura, "Bauhaus italiana": **Jost** (caixa-alta com tracking amplo nos rótulos).
- Escala tipográfica 1.333 (Perfect Fourth). Hero em 96–140px. Rótulos 11–13px uppercase, letter-spacing 0.2em.

### Atmosfera & movimento
- Textura sutil de grão sobre fundos escuros; brilho radial quente (dourado/corten) atrás de imagens-chave.
- Réguas/hairlines finas, assimetria, sobreposição de imagem e tipografia.
- Reveals no scroll (300–500ms, ease-out), parallax leve no hero, hover tátil em cards/imagens.
- Respeitar `prefers-reduced-motion`. Mobile-first, WCAG AA, sem scroll horizontal.

---

## 3. COPY MESTRE — seção por seção

### 3.1 HOME

**Hero (imagem full-screen + texto na frente)**
- Imagem recomendada: `FACHADAS/d90b36e5-…jpg` — fachada perfurada com luz dourada atravessando (puro luxo, casa com a paleta).
- Rótulo (eyebrow): `ATELIÊ DE ARTE METÁLICA`
- **Headline:** Arte, Arquitetura e Exclusividade em Metal.
- **Subheadline:** Painéis metálicos artísticos, desenvolvidos sob medida para projetos residenciais e corporativos de alto padrão. Inspirados pela arquitetura italiana e produzidos com corte a laser de alta precisão.
- **CTAs:** [ Conheça nossos projetos ] · [ Solicitar orçamento ]
- Scroll cue discreto.

**Faixa de credibilidade (logo abaixo do hero)**
> Projeto · Desenvolvimento · Instalação — do conceito arquitetônico à peça instalada.

**Bloco "A marca" (prévia da História)**
- Rótulo: `NOSSA HISTÓRIA`
- Título: Da Itália para o Brasil: design que atravessa fronteiras.
- Texto curto: Mais de duas décadas imerso na arquitetura italiana deram origem a um olhar único sobre o metal — onde cada painel é tratado como obra, e cada projeto, como assinatura. *(ajustar conforme confirmação dos 25 anos)*
- Link: [ Conheça nossa trajetória → ]

**Prévia de Produtos (grid editorial assimétrico das 8 categorias)**
- Rótulo: `O QUE FAZEMOS`
- Título: Soluções em metal que se tornam arquitetura.
- Cards: Painéis Artísticos · Divisórias Decorativas · Brises de Segurança · Portões Exclusivos · Portas Arquitetônicas · Guarda-Corpos · Pergolados · Objetos de Decoração.
- Link: [ Ver todos os produtos → ]

**Prévia do Processo (5 etapas em timeline horizontal)**
- Rótulo: `COMO TRABALHAMOS`
- Título: Da sua ideia à instalação — com precisão de ateliê.

**Diferenciais (lista com selo)**
- Rótulo: `POR QUE STEEL ARTE`
- 8 itens (ver 3.7).

**Galeria (teaser)**
- Rótulo: `PROJETOS`
- Título: Onde nossos painéis encontram a arquitetura.
- Mosaico de 6–8 imagens fortes → [ Ver galeria completa → ]

**CTA final (faixa escura com brilho corten)**
- Título: Podemos deixar sua obra ainda mais incrível? *(herdado do PDF — refinar)*
- Texto: Conte seu projeto e desenvolvemos uma solução exclusiva em metal.
- CTAs: [ Solicitar orçamento ] · [ Falar no WhatsApp ]

---

### 3.2 NOSSA HISTÓRIA

- Rótulo: `NOSSA HISTÓRIA`
- **Título:** Da Itália para o Brasil: design que atravessa fronteiras.
- **Lead:** Uma trajetória construída entre dois países e um único material: o metal, elevado à categoria de arte.

**Narrativa (a confirmar/expandir com o cliente):**
- 25 anos vivendo na Itália — imerso na arquitetura histórica e contemporânea.
- O contato diário com fachadas, palazzi e o design italiano formou um repertório estético singular.
- O retorno ao Brasil trouxe a vontade de traduzir essa linguagem para projetos brasileiros de alto padrão.
- A fundação da Steel Arte: unir a sensibilidade do design italiano à precisão da tecnologia de corte a laser.

> Frase de impacto: *"Trouxemos da Itália não um catálogo, mas um olhar."*

- Galeria de apoio: referências arquitetônicas italianas + bastidores.
- CTA: [ Conheça nossos produtos → ]

---

### 3.3 PRODUTOS (visão geral)

- Rótulo: `PRODUTOS`
- **Título:** Cada projeto, uma peça única.
- **Lead:** Oito linhas de criação em metal, todas desenvolvidas sob medida — do conceito ao acabamento premium.
- Índice visual das 8 categorias (card grande com imagem + nome + 1 linha + "Ver linha →").

#### Páginas de categoria

**1. Painéis Artísticos**
- Tagline: O metal como superfície de arte.
- Texto: Painéis decorativos com padrões exclusivos, recortados a laser, que transformam superfícies em peças autorais.
- Aplicações: Fachadas · Halls de entrada · Áreas gourmet · Ambientes corporativos · Hotéis.

**2. Divisórias Decorativas**
- Tagline: Separar ambientes com elegância.
- Texto: Divisórias que delimitam espaços sem fechá-los — luz, sombra e privacidade em equilíbrio.
- Tipos: Internas · Externas · Residenciais · Corporativas.

**3. Brises de Segurança**
- Tagline: Design aliado à proteção.
- Texto: Brises que unem estética e função — controlam a luz e protegem sem abrir mão do desenho.
- Atributos: Controle solar · Privacidade · Segurança · Ventilação.

**4. Portões Exclusivos**
- Tagline: A primeira impressão da sua arquitetura.
- Texto: Portões personalizados, projetados como parte da identidade da fachada.

**5. Portas Arquitetônicas**
- Tagline: Portas que se tornam destaque.
- Texto: Portas autorais que deixam de ser passagem e viram protagonista do projeto.

**6. Guarda-Corpos**
- Tagline: Segurança com assinatura.
- Texto: Guarda-corpos que protegem e desenham o espaço — em aço, ferro e alumínio.
- Aplicações: Escadas · Sacadas · Mezaninos.

**7. Pergolados**
- Tagline: Sombreamento com design contemporâneo.
- Texto: Pergolados que filtram a luz e criam atmosfera — proteção, luxo e conforto. *(eco do PDF)*

**8. Objetos de Decoração**
- Tagline: Arte metálica em escala íntima.
- Texto: Peças exclusivas que levam a assinatura Steel Arte para dentro do ambiente.
- Itens: Quadros metálicos · Painéis decorativos · Peças exclusivas.

---

### 3.4 PROCESSO

- Rótulo: `COMO TRABALHAMOS`
- **Título:** Como transformamos sua ideia em realidade.
- **Lead:** Um método de ateliê, em cinco etapas, do conceito arquitetônico à peça instalada.

1. **Briefing** — Entendemos o projeto arquitetônico, o ambiente e a intenção de design.
2. **Desenvolvimento** — Criamos desenhos e padrões exclusivos para o seu projeto.
3. **Aprovação** — Apresentamos a peça em 3D antes de qualquer corte.
4. **Produção** — Corte a laser de alta precisão, com acabamentos premium.
5. **Instalação** — Equipe especializada finaliza a peça na obra.

---

### 3.5 GALERIA DE PROJETOS

- Rótulo: `PROJETOS REALIZADOS`
- **Título:** Onde a Steel Arte encontra a arquitetura.
- **Lead:** Projetos residenciais e corporativos onde nossos painéis se tornaram parte da obra.
- **Filtros:** Todos · Residencial · Corporativo · Fachadas · Áreas Gourmet · Condomínios · Interiores.
- Grid masonry com lightbox. Cada projeto: imagem, tipologia, e (quando houver) cidade/ano.

---

### 3.6 PARA ARQUITETOS

- Rótulo: `PARCERIA PROFISSIONAL`
- **Título:** Parcerias para profissionais que valorizam exclusividade.
- **Lead:** Trabalhamos lado a lado com escritórios de arquitetura para transformar conceito em peça executável.
- **Benefícios:**
  - Desenvolvimento sob medida a partir do seu conceito.
  - Compatibilização com o projeto arquitetônico.
  - Suporte técnico em todas as etapas.
  - Memorial descritivo completo.
  - Acompanhamento da instalação em obra.
- CTA: [ Falar com nossa equipe técnica ]

---

### 3.7 DIFERENCIAIS

- Rótulo: `POR QUE STEEL ARTE`
- **Título:** O que separa uma peça Steel Arte de uma peça comum.
1. Design inspirado na arquitetura italiana
2. Projetos exclusivos
3. Produção personalizada
4. Corte a laser de alta precisão
5. Instalação especializada
6. Atendimento consultivo
7. Acabamentos premium
8. Soluções para residências e empreendimentos de alto padrão

---

### 3.8 CONTATO

- Rótulo: `VAMOS CONVERSAR`
- **Título:** Conte seu projeto.
- **Lead:** Envie as informações abaixo e desenvolvemos uma solução exclusiva em metal para o seu espaço.
- **Formulário:** Nome* · Empresa · Cidade* · Tipo de projeto (select: Residencial / Corporativo / Arquiteto-Escritório / Outro) · Mensagem · Upload de imagem ou projeto (opcional).
- **WhatsApp destacado** + e-mail contato@steelarte.com.br + redes.
- Confirmação inline após envio; estados de erro por campo.

---

## 4. Estratégia de imagens (acervo → site)

| Seção | Pasta de origem | Observação |
|---|---|---|
| Hero | FACHADAS (perfurada c/ luz) | candidata principal já identificada |
| Painéis Artísticos | FACHADAS, DIVISÓRIAS | corten orgânico, padrões |
| Divisórias | DIVISÓRIAS | padrão de árvores (sombra) é destaque |
| Pergolados / Gourmet | PERGOLADOS | painel damasco + forno de pizza |
| Objetos | OBJETOS DECORATIVOS | — |
| Guarda-Corpos | GUARDA CORPO FERRO | qualidade mista — curar |
| Galeria | todas + JOSEMAR/DASA/RSR | curadoria fina; descartar fotos cruas/obras |

**Pendências de mídia:** otimizar para WebP/AVIF, renomear com slugs semânticos, descartar fotos de baixa qualidade e vídeos .MOV (ou converter para clipes curtos), confirmar direitos de uso.

---

## 5. Pendências antes de construir
1. Definir conceito/tagline (A, B ou C).
2. Confirmar a narrativa "25 anos na Itália" (datas, local, ano de fundação).
3. Definir stack técnico.
4. Definir idioma(s) — só PT-BR ou PT + EN/IT (o posicionamento italiano abre espaço p/ versão internacional).
5. Confirmar a imagem do hero.
