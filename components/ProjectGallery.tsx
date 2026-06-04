"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  tags: string[];
};

const FILTERS = [
  "Todos",
  "Fachadas",
  "Residencial",
  "Corporativo",
  "Áreas Gourmet",
  "Interiores",
];

export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "Todos" ? items : items.filter((i) => i.tags.includes(active));

  const close = useCallback(() => setLightbox(null), []);
  const go = useCallback(
    (dir: number) =>
      setLightbox((cur) =>
        cur === null ? cur : (cur + dir + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, go]);

  return (
    <>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`label border px-4 py-2 text-[0.62rem] transition-all duration-300 ${
              active === f
                ? "border-gold bg-gold text-ink"
                : "border-paper/20 text-paper/65 hover:border-paper/50 hover:text-paper"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grade */}
      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Abrir ${item.alt}`}
            className="group relative aspect-[4/5] overflow-hidden bg-ink-soft"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="label absolute bottom-4 left-4 translate-y-2 text-[0.58rem] text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.tags[0]}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-paper/50">
          Nenhum projeto nesta categoria por enquanto.
        </p>
      )}

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center text-paper/80 transition-colors hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.25">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-paper/70 transition-colors hover:text-gold-soft md:left-8"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.1">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Próxima"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-paper/70 transition-colors hover:text-gold-soft md:right-8"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.1">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="relative mx-4 flex max-h-[85vh] w-full max-w-[1100px] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1400}
              height={1400}
              sizes="90vw"
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
          <span className="label absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.6rem] text-paper/60">
            {filtered[lightbox].tags.join(" · ")}
          </span>
        </div>
      )}
    </>
  );
}
