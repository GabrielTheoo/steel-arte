import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Produtos — Steel Arte",
  description:
    "Oito linhas de arte metálica sob medida: painéis artísticos, divisórias, brises, portões, portas, guarda-corpos, pergolados e objetos de decoração.",
};

type Category = {
  n: string;
  name: string;
  line: string;
  tags: string[];
  href: string;
  img: string;
};

const CATEGORIES: Category[] = [
  {
    n: "01",
    name: "Painéis Artísticos",
    line: "O metal como superfície de arte — padrões exclusivos recortados a laser que transformam superfícies em peças autorais.",
    tags: ["Fachadas", "Halls de entrada", "Áreas gourmet", "Corporativo", "Hotéis"],
    href: "/produtos/paineis-artisticos",
    img: "/images/pa-main.jpg",
  },
  {
    n: "02",
    name: "Divisórias Decorativas",
    line: "Delimitam espaços sem fechá-los — luz, sombra e privacidade em equilíbrio.",
    tags: ["Internas", "Externas", "Residenciais", "Corporativas"],
    href: "/produtos/divisorias-decorativas",
    img: "/images/prod-divisorias.jpg",
  },
  {
    n: "03",
    name: "Brise",
    line: "Controle de luz e proteção com desenho — nas linhas Retrofit e de Segurança.",
    tags: ["Controle solar", "Privacidade", "Segurança", "Retrofit de fachada"],
    href: "/produtos/brise",
    img: "/images/brise-seg-1.jpg",
  },
  {
    n: "04",
    name: "Portões Exclusivos",
    line: "A primeira impressão da arquitetura — projetados como parte da identidade da fachada.",
    tags: ["Residencial", "Corporativo", "Personalizado"],
    href: "/produtos/portoes-exclusivos",
    img: "/images/prt-portoes.jpg",
  },
  {
    n: "05",
    name: "Portas Arquitetônicas",
    line: "Portas que deixam de ser passagem e se tornam protagonista do projeto.",
    tags: ["Entrada", "Pivotantes", "Autorais"],
    href: "/produtos/portas-arquitetonicas",
    img: "/images/prt-portas.jpg",
  },
  {
    n: "06",
    name: "Guarda-Corpos",
    line: "Segurança com assinatura — protegem e desenham o espaço em aço, ferro e alumínio.",
    tags: ["Escadas", "Sacadas", "Mezaninos"],
    href: "/produtos/guarda-corpos",
    img: "/images/gcn-1.jpg",
  },
  {
    n: "07",
    name: "Pergolados",
    line: "Sombreamento com design contemporâneo — filtram a luz e criam atmosfera.",
    tags: ["Controle de luz", "Áreas externas", "Lounge", "Piscina"],
    href: "/produtos/pergolados",
    img: "/images/perg-main.jpg",
  },
  {
    n: "08",
    name: "Objetos de Decoração",
    line: "Arte metálica em escala íntima — peças exclusivas que levam a assinatura Steel Arte para dentro do ambiente.",
    tags: ["Quadros metálicos", "Painéis decorativos", "Peças exclusivas"],
    href: "/produtos/objetos-de-decoracao",
    img: "/images/obj-main.jpg",
  },
];

export default function ProdutosPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <PageHeader
          eyebrow="Produtos"
          title={
            <>
              Cada projeto, uma{" "}
              <span className="italic text-gold-soft">peça única</span>.
            </>
          }
          lead="Oito linhas de criação em metal, todas desenvolvidas sob medida — do conceito ao acabamento premium."
          image="/images/gal-5.jpg"
          imageAlt="Fachada em aço corten com recorte orgânico a laser"
        />

        <section className="bg-ink">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <ul>
              {CATEGORIES.map((c, i) => {
                const reversed = i % 2 === 1;
                return (
                  <li
                    key={c.href}
                    className="border-b border-paper/10 py-16 first:pt-20 last:border-b-0 md:py-24"
                  >
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                      <Reveal
                        className={`relative aspect-[5/4] overflow-hidden ${
                          reversed ? "md:order-2" : ""
                        }`}
                      >
                        <Link href={c.href} className="group block h-full w-full">
                          <Image
                            src={c.img}
                            alt={c.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </Link>
                      </Reveal>

                      <Reveal delay={0.1} className={reversed ? "md:order-1" : ""}>
                        <span className="font-display text-2xl font-light text-gold-soft/60">
                          {c.n}
                        </span>
                        <h2 className="mt-3 font-display text-[clamp(2rem,3.8vw,3.2rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
                          {c.name}
                        </h2>
                        <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-paper/70">
                          {c.line}
                        </p>
                        <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
                          {c.tags.map((t) => (
                            <li
                              key={t}
                              className="label border border-paper/20 px-3 py-1.5 text-[0.6rem] text-paper/65"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={c.href}
                          className="label group mt-9 inline-flex items-center gap-3 text-paper transition-colors hover:text-gold-soft"
                        >
                          Ver linha
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </Reveal>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_120%_at_50%_120%,rgba(156,91,59,0.3),transparent_60%)]" />
          <Reveal className="relative mx-auto max-w-[58rem] px-6 text-center md:px-12">
            <p className="label text-gold-soft">Projeto sob medida</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
              Não encontrou exatamente o que imaginou?
            </h2>
            <p className="mx-auto mt-6 max-w-[42rem] text-lg leading-relaxed text-paper/70">
              Cada peça Steel Arte nasce de um desenho exclusivo. Conte sua ideia
              e desenvolvemos uma solução única para o seu projeto.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="label group inline-flex items-center justify-center gap-3 bg-gold px-9 py-4 text-[0.72rem] text-ink transition-all duration-300 hover:bg-gold-soft"
              >
                Solicitar orçamento
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/galeria"
                className="label inline-flex items-center justify-center border border-paper/35 px-9 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/5"
              >
                Ver galeria de projetos
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
