import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const SHOTS = [
  { img: "/images/gal-1.jpg", cap: "Divisória corten · Interiores" },
  { img: "/images/gal-2.jpg", cap: "Pergolado · Área de piscina" },
  { img: "/images/gal-4.jpg", cap: "Painel decorativo · Detalhe" },
  { img: "/images/gal-5.jpg", cap: "Fachada corten · Residencial" },
  { img: "/images/gal-3.jpg", cap: "Pergolado · Área gourmet" },
  { img: "/images/gal-6.jpg", cap: "Divisória · Áreas externas" },
  { img: "/images/gal-7.jpg", cap: "Pergolado · Lounge" },
  { img: "/images/gal-8.jpg", cap: "Fachada perfurada · Corporativo" },
];

export default function GalleryTeaser() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label text-gold-soft">Projetos</p>
            <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
              Onde nossos painéis encontram a{" "}
              <span className="italic text-gold-soft">arquitetura</span>.
            </h2>
          </div>
          <Link
            href="/galeria"
            className="label group inline-flex items-center gap-3 text-paper/80 transition-colors hover:text-gold-soft"
          >
            Ver galeria completa
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>

        <div className="mt-14 gap-3 [column-fill:balance] columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
          {SHOTS.map((s, i) => (
            <Reveal key={s.img} delay={(i % 4) * 0.06} className="mb-3 break-inside-avoid">
              <Link
                href="/galeria"
                className="group relative block overflow-hidden"
              >
                <Image
                  src={s.img}
                  alt={s.cap}
                  width={800}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-auto w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="label absolute bottom-5 left-5 translate-y-2 text-[0.6rem] text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {s.cap}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
