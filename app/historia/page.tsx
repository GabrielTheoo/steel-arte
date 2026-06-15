import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Nossa História — Steel Arte",
  description:
    "O ateliê Steel Arte transforma superfícies metálicas em peças autorais. Desenho exclusivo, precisão de corte a laser e acabamento premium.",
};

const PILLARS = [
  {
    n: "01",
    title: "Desenho exclusivo",
    desc: "Projetos autorais, criados para um único espaço — nunca repetidos.",
  },
  {
    n: "02",
    title: "Precisão",
    desc: "Corte a laser milimétrico, fiel ao desenho original.",
  },
  {
    n: "03",
    title: "Acabamento premium",
    desc: "Pintura eletrostática, aço corten e materiais nobres.",
  },
  {
    n: "04",
    title: "Instalação especializada",
    desc: "Acompanhamento até a peça instalada na obra.",
  },
];

export default function HistoriaPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <PageHeader
          eyebrow="Nossa História"
          title={
            <>
              O metal, elevado à categoria de{" "}
              <span className="italic text-gold-soft">arte</span>.
            </>
          }
          lead="Uma trajetória dedicada a transformar superfícies metálicas em peças autorais — onde desenho, técnica e arquitetura se encontram."
          image="/images/nh-banner.jpg"
          imageAlt="Painel metálico dourado com padrão de folhas vazado a laser"
        />

        {/* Manifesto de abertura */}
        <section className="bg-ink py-24 md:py-36">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="grid gap-14 md:grid-cols-12 md:gap-10">
              <Reveal className="md:col-span-4">
                <p className="label text-gold-soft">O Ateliê</p>
                <div className="mt-6 h-px w-16 bg-paper/20" />
              </Reveal>
              <Reveal className="md:col-span-8" delay={0.1}>
                <h2 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                  Nascemos da convicção de que o metal pode ser arte.
                </h2>
                <div className="mt-8 max-w-[44rem] space-y-5 text-lg leading-relaxed text-paper/70">
                  <p>
                    A Steel Arte surgiu do encontro entre o desenho e a
                    precisão. Enquanto a serralheria tradicional pensa em
                    estrutura, nós pensamos em composição — cada painel é
                    projetado como uma obra, com ritmo, textura e intenção.
                  </p>
                  <p>
                    Trabalhamos lado a lado com arquitetos e clientes que
                    enxergam o metal não como acabamento, mas como protagonista
                    do espaço.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* O olhar autoral — imagem + texto */}
        <section className="bg-paper py-24 text-ink md:py-32">
          <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-12">
            <Reveal className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/divisoria-arvores.jpg"
                alt="Divisória metálica com padrão de árvores recortado a laser"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="label text-corten">O olhar autoral</p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.01em]">
                Cada projeto começa por um desenho exclusivo.
              </h2>
              <p className="mt-7 max-w-[40rem] text-lg leading-relaxed text-graphite">
                Não repetimos padrões. Estudamos a arquitetura, a luz e o uso de
                cada ambiente para criar recortes que pertencem a um único
                projeto. O resultado é uma peça que dialoga com a obra — e que
                não existe em nenhum outro lugar.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pull quote */}
        <section className="relative overflow-hidden bg-ink py-28 md:py-40">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_120%_at_50%_50%,rgba(156,91,59,0.22),transparent_60%)]" />
          <Reveal className="relative mx-auto max-w-[60rem] px-6 text-center md:px-12">
            <p className="font-display text-[clamp(2rem,5vw,4rem)] font-light italic leading-[1.1] text-paper">
              “Não fabricamos peças.{" "}
              <span className="text-gold-soft">Traduzimos intenções</span> em
              metal.”
            </p>
          </Reveal>
        </section>

        {/* Precisão de ateliê — texto + imagem */}
        <section className="bg-paper py-24 text-ink md:py-32">
          <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-12">
            <Reveal className="order-2 md:order-1">
              <p className="label text-corten">Precisão de ateliê</p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.01em]">
                Tecnologia de corte a laser, cuidado de artesão.
              </h2>
              <p className="mt-7 max-w-[40rem] text-lg leading-relaxed text-graphite">
                O corte a laser de alta precisão leva ao metal o nível de
                detalhe de um desenho à mão livre — com a exatidão que a
                arquitetura de alto padrão exige. Da matéria-prima ao acabamento
                premium, cada etapa é controlada no nosso ateliê.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="relative order-1 aspect-[4/5] overflow-hidden md:order-2">
              <Image
                src="/images/gal-1.jpg"
                alt="Painel em aço corten com recorte arabesco e luz filtrada"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* Pilares */}
        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <Reveal>
              <p className="label text-gold-soft">O que nos guia</p>
              <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(1.9rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                Princípios que sustentam cada peça.
              </h2>
            </Reveal>
            <ol className="mt-16 -mx-6 grid grid-cols-1 border-t border-paper/12 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.n}
                  delay={i * 0.08}
                  className="group relative border-b border-paper/12 pt-9 lg:border-r lg:[&:nth-child(4)]:border-r-0"
                >
                  <div className="px-6 pb-10">
                    <span className="font-display text-5xl font-light text-paper/20 transition-colors duration-500 group-hover:text-gold-soft">
                      {p.n}
                    </span>
                    <h3 className="mt-5 text-lg font-medium tracking-wide text-paper">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-paper/60">
                      {p.desc}
                    </p>
                  </div>
                  <span className="absolute left-0 top-[-1px] h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_120%_at_50%_120%,rgba(156,91,59,0.3),transparent_60%)]" />
          <Reveal className="relative mx-auto max-w-[58rem] px-6 text-center md:px-12">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
              Conheça o que podemos criar para o seu projeto.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/produtos"
                className="label group inline-flex items-center justify-center gap-3 bg-gold px-9 py-4 text-[0.72rem] text-ink transition-all duration-300 hover:bg-gold-soft"
              >
                Ver produtos
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/contato"
                className="label inline-flex items-center justify-center border border-paper/35 px-9 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/5"
              >
                Solicitar orçamento
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
