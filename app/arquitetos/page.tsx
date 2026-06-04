import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Para Arquitetos — Steel Arte",
  description:
    "Parceria com escritórios de arquitetura: desenvolvimento sob medida, compatibilização de projeto, suporte técnico, memorial descritivo e acompanhamento de instalação.",
};

const BENEFITS = [
  {
    n: "01",
    title: "Desenvolvimento sob medida",
    desc: "Partimos do seu conceito e desenhamos a peça do zero — sem catálogo, sem repetição.",
  },
  {
    n: "02",
    title: "Compatibilização com o projeto",
    desc: "Ajustamos medidas, fixações e detalhes construtivos ao projeto arquitetônico.",
  },
  {
    n: "03",
    title: "Suporte técnico",
    desc: "Acompanhamento próximo em todas as etapas, do desenho à execução.",
  },
  {
    n: "04",
    title: "Memorial descritivo",
    desc: "Especificação completa de materiais, acabamentos e medidas para o caderno do projeto.",
  },
  {
    n: "05",
    title: "Acompanhamento da instalação",
    desc: "Nossa equipe acompanha a montagem em obra, garantindo o resultado final.",
  },
];

export default function ArquitetosPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <PageHeader
          eyebrow="Parceria profissional"
          title={
            <>
              Parcerias para profissionais que valorizam{" "}
              <span className="italic text-gold-soft">exclusividade</span>.
            </>
          }
          lead="Trabalhamos lado a lado com escritórios de arquitetura para transformar conceito em peça executável."
          image="/images/gal-1.jpg"
          imageAlt="Painel em aço corten com recorte arabesco em ambiente interno"
        />

        {/* Intro */}
        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <Reveal className="md:col-span-4">
                <p className="label text-gold-soft">O ateliê do arquiteto</p>
                <div className="mt-6 h-px w-16 bg-paper/20" />
              </Reveal>
              <Reveal className="md:col-span-8" delay={0.1}>
                <h2 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                  Transformamos o seu conceito em peça executável.
                </h2>
                <p className="mt-8 max-w-[44rem] text-lg leading-relaxed text-paper/70">
                  Para nós, o projeto do arquiteto é ponto de partida — não algo
                  a ser adaptado a um catálogo. Desenhamos, detalhamos e
                  produzimos cada peça em diálogo com o escritório, respeitando a
                  intenção do projeto e a realidade da obra.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-ink-soft py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <Reveal>
              <p className="label text-gold-soft">A parceria inclui</p>
              <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(1.9rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                Tudo o que o seu projeto precisa, do conceito à obra.
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.n} delay={(i % 2) * 0.08} className="border-t border-paper/12 pt-7">
                  <span className="font-display text-4xl font-light text-gold-soft/60">
                    {b.n}
                  </span>
                  <h3 className="mt-4 text-xl font-medium tracking-wide text-paper">
                    {b.title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] leading-relaxed text-paper/65">
                    {b.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Do desenho à obra */}
        <section className="bg-paper py-24 text-ink md:py-32">
          <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-12">
            <Reveal className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/paineis-2.jpg"
                alt="Detalhe de painel metálico com padrão recortado a laser"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="label text-corten">Do desenho à obra</p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.01em]">
                Precisão que respeita o seu projeto.
              </h2>
              <p className="mt-7 max-w-[40rem] text-lg leading-relaxed text-graphite">
                O corte a laser de alta precisão garante que o desenho aprovado
                chegue à obra exatamente como foi concebido. Entregamos a peça
                pronta para instalar — com a documentação técnica que o seu
                caderno de especificações exige.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_120%_at_50%_120%,rgba(156,91,59,0.3),transparent_60%)]" />
          <Reveal className="relative mx-auto max-w-[58rem] px-6 text-center md:px-12">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
              Vamos desenvolver o seu{" "}
              <span className="italic text-gold-soft">próximo projeto</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-[42rem] text-lg leading-relaxed text-paper/70">
              Fale com a nossa equipe técnica e descubra como podemos executar a
              sua ideia em metal.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  "Olá! Sou arquiteto(a) e gostaria de conversar sobre uma parceria com a Steel Arte."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="label group inline-flex items-center justify-center gap-3 bg-gold px-9 py-4 text-[0.72rem] text-ink transition-all duration-300 hover:bg-gold-soft"
              >
                Falar com a equipe técnica
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <Link
                href="/contato"
                className="label inline-flex items-center justify-center border border-paper/35 px-9 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/5"
              >
                Enviar projeto
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
