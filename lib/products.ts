export type Subtype = { name: string; desc: string; img: string };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  headerImage: string;
  intro: string[];
  applications: string[];
  gallery: string[];
  subtypes?: Subtype[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "paineis-artisticos",
    name: "Painéis Artísticos",
    tagline: "O metal como superfície de arte.",
    headerImage: "/images/pa-main.jpg",
    intro: [
      "Painéis decorativos com padrões exclusivos, recortados a laser, que transformam superfícies inteiras em peças autorais. Cada desenho é criado para um único projeto — da fachada que define a identidade da casa ao painel que assina um hall corporativo.",
      "Trabalhamos com aço corten, aço galvanizado com pintura eletrostática e acabamentos premium, garantindo durabilidade e presença estética em qualquer ambiente.",
    ],
    applications: ["Fachadas", "Halls de entrada", "Áreas gourmet", "Ambientes corporativos", "Hotéis"],
    gallery: ["/images/paineis-2.jpg", "/images/paineis-3.jpg"],
  },
  {
    slug: "divisorias-decorativas",
    name: "Divisórias Decorativas",
    tagline: "Separar ambientes com elegância.",
    headerImage: "/images/prod-divisorias.jpg",
    intro: [
      "Divisórias que delimitam espaços sem fechá-los — equilibrando luz, sombra e privacidade. Ideais para criar ambientes dentro de ambientes, com a leveza de um desenho vazado.",
      "Disponíveis em versões internas e externas, residenciais e corporativas, sempre com padrão exclusivo.",
    ],
    applications: ["Internas", "Externas", "Residenciais", "Corporativas"],
    gallery: [
      "/images/divisoria-arvores.jpg",
      "/images/gal-1.jpg",
      "/images/gal-6.jpg",
      "/images/div-2.jpg",
      "/images/div-3.jpg",
    ],
  },
  {
    slug: "brise",
    name: "Brise",
    tagline: "Controle de luz e proteção com desenho.",
    headerImage: "/images/brise-seg-1.jpg",
    intro: [
      "Brises que filtram a luz, ampliam a privacidade e qualificam a fachada — unindo desempenho e desenho. Da requalificação de fachadas existentes à proteção sob medida, tratamos o brise como elemento de composição arquitetônica.",
      "Oferecemos duas linhas, para necessidades distintas: o Brise Retrofit, para renovar fachadas existentes, e o Brise de Segurança, que alia proteção e estética.",
    ],
    applications: ["Controle solar", "Privacidade", "Segurança", "Ventilação", "Retrofit de fachada"],
    subtypes: [
      {
        name: "Brise Retrofit",
        desc: "Requalificação de fachadas existentes — painéis aplicados sobre a estrutura atual, renovando a estética e o desempenho do edifício sem obra pesada.",
        img: "/images/brise-retrofit.jpg",
      },
      {
        name: "Brise de Segurança",
        desc: "Brises que unem proteção e desenho — controlam a luz, ampliam a privacidade e reforçam a segurança da fachada.",
        img: "/images/brise-seg.jpg",
      },
    ],
    gallery: [
      "/images/brise-retrofit-2.jpg",
      "/images/brise-personalizado.jpg",
      "/images/brises-correr.jpg",
      "/images/brise-seg-2.jpg",
    ],
  },
  {
    slug: "portoes-exclusivos",
    name: "Portões Exclusivos",
    tagline: "A primeira impressão da arquitetura.",
    headerImage: "/images/prt-portoes.jpg",
    intro: [
      "Portões personalizados, projetados como parte da identidade da fachada. Mais que um acesso, um elemento de composição que anuncia o padrão da obra.",
      "Desenvolvidos sob medida, em diálogo com o projeto arquitetônico.",
    ],
    applications: ["Residencial", "Corporativo", "Personalizado"],
    gallery: ["/images/prt-portoes-2.jpg", "/images/prt-portoes-3.jpg", "/images/prod-portoes.jpg"],
  },
  {
    slug: "portas-arquitetonicas",
    name: "Portas Arquitetônicas",
    tagline: "Portas que se tornam destaque.",
    headerImage: "/images/prt-portas.jpg",
    intro: [
      "Portas autorais que deixam de ser passagem e se tornam protagonistas. Pivotantes, de entrada ou internas — sempre tratadas como peça de design.",
      "O recorte a laser permite padrões impossíveis na serralheria convencional.",
    ],
    applications: ["Entrada", "Pivotantes", "Autorais"],
    gallery: [],
  },
  {
    slug: "guarda-corpos",
    name: "Guarda-Corpos",
    tagline: "Segurança com assinatura.",
    headerImage: "/images/gcn-1.jpg",
    intro: [
      "Guarda-corpos que protegem e desenham o espaço, em aço, ferro e alumínio. Linhas que conversam com a arquitetura, sem o aspecto industrial da serralheria comum.",
      "Para escadas, sacadas e mezaninos, com a precisão e o acabamento de um ateliê.",
    ],
    applications: ["Escadas", "Sacadas", "Mezaninos"],
    gallery: ["/images/gcn-2.jpg", "/images/gcn-3.jpg", "/images/gcn-4.jpg"],
  },
  {
    slug: "pergolados",
    name: "Pergolados",
    tagline: "Sombreamento com design contemporâneo.",
    headerImage: "/images/perg-main.jpg",
    intro: [
      "Pergolados que filtram a luz e criam atmosfera — proteção, luxo e conforto para áreas externas. O recorte projeta sombras que mudam ao longo do dia, transformando o ambiente.",
      "Ideais para áreas de piscina, lounges e espaços gourmet.",
    ],
    applications: ["Controle de luz", "Áreas externas", "Lounge", "Piscina"],
    gallery: [
      "/images/perg-1b.jpg",
      "/images/gal-2.jpg",
      "/images/gal-3.jpg",
      "/images/gal-7.jpg",
      "/images/perg-2.jpg",
    ],
  },
  {
    slug: "objetos-de-decoracao",
    name: "Objetos de Decoração",
    tagline: "Arte metálica em escala íntima.",
    headerImage: "/images/obj-main.jpg",
    intro: [
      "Peças exclusivas que levam a assinatura Steel Arte para dentro do ambiente. Quadros metálicos, painéis decorativos e objetos autorais que dialogam com a arquitetura de interiores.",
      "Cada peça é única, criada para um espaço específico.",
    ],
    applications: ["Quadros metálicos", "Painéis decorativos", "Peças exclusivas"],
    gallery: [
      "/images/deco-1.jpg",
      "/images/deco-2.jpg",
      "/images/deco-3.jpg",
      "/images/deco-4.jpg",
      "/images/deco-5.jpg",
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductNav(slug: string) {
  const i = PRODUCTS.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const prev = PRODUCTS[(i - 1 + PRODUCTS.length) % PRODUCTS.length];
  const next = PRODUCTS[(i + 1) % PRODUCTS.length];
  return { prev, next };
}
