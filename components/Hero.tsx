import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Fachada com painéis artísticos em metal vazado a laser com padrão de folhas e portal em mármore"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center [animation:slow-zoom_2.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
        />
      </div>

      {/* Scrims for legibility + mood */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_75%_55%,rgba(178,147,94,0.16),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-28">
        <div className="max-w-[58rem]">
          <p
            className="label reveal text-gold-soft"
            style={{ animationDelay: "0.15s" }}
          >
            Ateliê de Arte Metálica
          </p>

          <h1
            className="reveal mt-6 font-display text-[clamp(2.4rem,8vw,7.5rem)] font-light leading-[0.98] tracking-[-0.01em] text-paper [text-wrap:balance]"
            style={{ animationDelay: "0.3s" }}
          >
            Arte, Arquitetura e<br className="hidden sm:block" />{" "}
            <span className="italic text-gold-soft">Exclusividade</span> em Metal.
          </h1>

          <p
            className="reveal mt-8 max-w-[40rem] text-base leading-relaxed text-paper/75 md:text-lg"
            style={{ animationDelay: "0.45s" }}
          >
            Painéis metálicos artísticos, desenvolvidos sob medida para projetos
            residenciais e corporativos de alto padrão. Inspirados pela
            arquitetura italiana e produzidos com corte a laser de alta
            precisão.
          </p>

          <div
            className="reveal mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/galeria"
              className="label group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-[0.72rem] text-ink transition-all duration-300 hover:bg-gold-soft"
            >
              Conheça nossos projetos
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contato"
              className="label inline-flex items-center justify-center border border-paper/35 px-8 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/5"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom method strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-paper/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
          <p className="label text-[0.6rem] text-paper/55">
            Projeto · Desenvolvimento · Instalação
          </p>
          <span className="label hidden text-[0.6rem] text-paper/40 sm:flex sm:items-center sm:gap-3">
            Role para explorar
            <span className="inline-block h-8 w-px animate-pulse bg-paper/40" />
          </span>
        </div>
      </div>
    </section>
  );
}
