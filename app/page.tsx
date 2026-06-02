import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProductsPreview from "@/components/ProductsPreview";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import GalleryTeaser from "@/components/GalleryTeaser";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        {/* Nossa História — prévia (seção clara) */}
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
            <div className="grid gap-14 md:grid-cols-12 md:gap-10">
              <Reveal className="md:col-span-4">
                <p className="label text-corten">Nossa História</p>
                <div className="mt-6 h-px w-16 bg-ink/20" />
              </Reveal>
              <Reveal className="md:col-span-8" delay={0.1}>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.08] tracking-[-0.01em]">
                  O metal, elevado à categoria de{" "}
                  <span className="italic text-corten">arte</span>.
                </h2>
                <p className="mt-8 max-w-[44rem] text-lg leading-relaxed text-graphite">
                  Cada painel nasce de um olhar autoral sobre o metal —
                  desenhado como obra e executado com a precisão do corte a
                  laser. Transformamos superfícies em arquitetura, e
                  arquitetura em assinatura.
                </p>
                <a
                  href="/historia"
                  className="label group mt-10 inline-flex items-center gap-3 text-ink transition-colors hover:text-corten"
                >
                  Conheça nossa trajetória
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <ProductsPreview />
        <Process />
        <Differentials />
        <GalleryTeaser />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
