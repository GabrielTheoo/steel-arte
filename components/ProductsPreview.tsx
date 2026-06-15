import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

type Product = {
  name: string;
  line: string;
  href: string;
  img: string;
  span: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Painéis Artísticos",
    line: "O metal como superfície de arte.",
    href: "/produtos/paineis-artisticos",
    img: "/images/pa-main.jpg",
    span: "lg:col-span-7",
  },
  {
    name: "Divisórias Decorativas",
    line: "Separar ambientes com elegância.",
    href: "/produtos/divisorias-decorativas",
    img: "/images/prod-divisorias.jpg",
    span: "sm:col-span-6 lg:col-span-5",
  },
  {
    name: "Brise",
    line: "Controle de luz e proteção com desenho.",
    href: "/produtos/brise",
    img: "/images/brise-seg-1.jpg",
    span: "sm:col-span-6 lg:col-span-4",
  },
  {
    name: "Portões Exclusivos",
    line: "A primeira impressão da arquitetura.",
    href: "/produtos/portoes-exclusivos",
    img: "/images/prt-portoes.jpg",
    span: "sm:col-span-6 lg:col-span-4",
  },
  {
    name: "Portas Arquitetônicas",
    line: "Portas que se tornam destaque.",
    href: "/produtos/portas-arquitetonicas",
    img: "/images/prt-portas.jpg",
    span: "sm:col-span-6 lg:col-span-4",
  },
  {
    name: "Guarda-Corpos",
    line: "Segurança com assinatura.",
    href: "/produtos/guarda-corpos",
    img: "/images/gcn-1.jpg",
    span: "sm:col-span-6 lg:col-span-5",
  },
  {
    name: "Pergolados",
    line: "Sombreamento com design contemporâneo.",
    href: "/produtos/pergolados",
    img: "/images/perg-main.jpg",
    span: "sm:col-span-6 lg:col-span-7",
  },
  {
    name: "Objetos de Decoração",
    line: "Arte metálica em escala íntima.",
    href: "/produtos/objetos-de-decoracao",
    img: "/images/obj-main.jpg",
    span: "lg:col-span-12",
  },
];

export default function ProductsPreview() {
  return (
    <section id="produtos" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label text-gold-soft">O que fazemos</p>
            <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
              Soluções em metal que se tornam{" "}
              <span className="italic text-gold-soft">arquitetura</span>.
            </h2>
          </div>
          <Link
            href="/produtos"
            className="label group inline-flex items-center gap-3 text-paper/80 transition-colors hover:text-gold-soft"
          >
            Ver todos os produtos
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-12">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.href}
              delay={(i % 3) * 0.08}
              className={`col-span-1 sm:col-span-12 ${p.span}`}
            >
              <Link
                href={p.href}
                className="group relative block h-[340px] overflow-hidden sm:h-[400px] lg:h-[460px]"
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7">
                  <div>
                    <h3 className="font-display text-2xl font-normal leading-tight text-paper md:text-[28px]">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-[34ch] text-sm text-paper/65">
                      {p.line}
                    </p>
                  </div>
                  <span className="label shrink-0 translate-x-2 text-[0.62rem] text-gold-soft opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Ver linha →
                  </span>
                </div>
                <span className="absolute left-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
