"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const NAV = [
  { label: "História", href: "/historia" },
  { label: "Produtos", href: "/produtos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Arquitetos", href: "/arquitetos" },
  { label: "Contato", href: "/contato" },
];

export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);

  useEffect(() => {
    const onScroll = () => setScrolled(solid || window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top gradient (only over hero) */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Solid backdrop (after scroll) */}
      <div
        className={`absolute inset-0 border-b border-paper/10 bg-ink/85 backdrop-blur-md transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-12 ${
          scrolled ? "py-4" : "py-6 md:py-7"
        }`}
      >
        <Link
          href="/"
          aria-label="Steel Arte — início"
          className="flex flex-col gap-1.5"
        >
          <Image
            src="/images/logo-white.png"
            alt="Steel Arte"
            width={2005}
            height={249}
            priority
            className="h-[20px] w-auto md:h-[22px]"
          />
          <span className="label hidden text-[0.52rem] text-gold-soft/70 sm:block">
            Arte · Metal · Arquitetura
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label text-[0.7rem] text-paper/80 transition-colors duration-300 hover:text-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="label hidden border border-paper/30 px-5 py-3 text-[0.66rem] text-paper transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink lg:inline-block"
        >
          Solicitar orçamento
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}
