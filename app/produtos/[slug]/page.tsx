import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PRODUCTS, getProduct, getProductNav } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produto — Steel Arte" };
  return {
    title: `${product.name} — Steel Arte`,
    description: `${product.name}: ${product.tagline} Arte metálica sob medida, recortada a laser, para arquitetura de alto padrão.`,
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const { prev, next } = getProductNav(slug);

  return (
    <>
      <SiteHeader solid />
      <main>
        <PageHeader
          eyebrow="Produtos"
          title={product.name}
          lead={product.tagline}
          image={product.headerImage}
          imageAlt={product.name}
        />

        {/* Sobre a linha */}
        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="grid gap-12 md:grid-cols-12 md:gap-10">
              <Reveal className="md:col-span-4">
                <p className="label text-gold-soft">A linha</p>
                <div className="mt-6 h-px w-16 bg-paper/20" />
              </Reveal>
              <div className="md:col-span-8">
                <Reveal>
                  <div className="max-w-[46rem] space-y-5 text-lg leading-relaxed text-paper/75">
                    {product.intro.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="label mt-12 text-paper/40">Aplicações</p>
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {product.applications.map((a) => (
                      <li
                        key={a}
                        className="label border border-paper/20 px-3 py-1.5 text-[0.62rem] text-paper/70"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Variações / subtipos */}
        {product.subtypes && product.subtypes.length > 0 && (
          <section className="bg-ink-soft py-20 md:py-28">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
              <Reveal>
                <p className="label text-gold-soft">Variações da linha</p>
                <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                  Duas linhas, duas soluções.
                </h2>
              </Reveal>
              <div className="mt-14 space-y-14 md:space-y-20">
                {product.subtypes.map((s, i) => {
                  const reversed = i % 2 === 1;
                  return (
                    <div
                      key={s.name}
                      className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
                    >
                      <Reveal
                        className={`relative aspect-[5/4] overflow-hidden ${
                          reversed ? "md:order-2" : ""
                        }`}
                      >
                        <Image
                          src={s.img}
                          alt={s.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </Reveal>
                      <Reveal delay={0.1} className={reversed ? "md:order-1" : ""}>
                        <span className="font-display text-2xl font-light text-gold-soft/60">
                          {`0${i + 1}`}
                        </span>
                        <h3 className="mt-3 font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                          {s.name}
                        </h3>
                        <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-paper/70">
                          {s.desc}
                        </p>
                      </Reveal>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Galeria da linha */}
        {product.gallery.length > 0 && (
          <section className="bg-ink-soft py-20 md:py-28">
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
              <Reveal>
                <p className="label text-gold-soft">Projetos</p>
                <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                  {product.name} em obra.
                </h2>
              </Reveal>
              <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {product.gallery.map((img, i) => (
                  <Reveal
                    key={img}
                    delay={(i % 3) * 0.08}
                    className="group relative aspect-[4/5] overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} — projeto Steel Arte`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Outras linhas */}
        <section className="border-t border-paper/10 bg-ink py-16 md:py-20">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="flex items-center justify-between">
              <p className="label text-paper/40">Outras linhas</p>
              <Link
                href="/produtos"
                className="label text-[0.66rem] text-paper/70 transition-colors hover:text-gold-soft"
              >
                Ver todas
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[prev, next].map(
                (p, idx) =>
                  p && (
                    <Link
                      key={p.slug}
                      href={`/produtos/${p.slug}`}
                      className="group relative h-44 overflow-hidden"
                    >
                      <Image
                        src={p.headerImage}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 to-ink/30" />
                      <div className="absolute inset-0 flex flex-col justify-center px-7">
                        <span className="label text-[0.58rem] text-gold-soft/80">
                          {idx === 0 ? "← Anterior" : "Próxima →"}
                        </span>
                        <span className="mt-2 font-display text-2xl font-light text-paper">
                          {p.name}
                        </span>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_120%_at_50%_120%,rgba(156,91,59,0.3),transparent_60%)]" />
          <Reveal className="relative mx-auto max-w-[58rem] px-6 text-center md:px-12">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
              Vamos desenhar a sua{" "}
              <span className="italic text-gold-soft">peça exclusiva</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-[40rem] text-lg leading-relaxed text-paper/70">
              Conte seu projeto e desenvolvemos uma solução sob medida em{" "}
              {product.name.toLowerCase()}.
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
                href="/produtos"
                className="label inline-flex items-center justify-center border border-paper/35 px-9 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/5"
              >
                Ver todas as linhas
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
