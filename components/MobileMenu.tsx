"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { label: "História", href: "/historia" },
  { label: "Produtos", href: "/produtos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Arquitetos", href: "/arquitetos" },
  { label: "Contato", href: "/contato" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-[6px]"
      >
        <span
          className={`block h-px w-7 bg-paper transition-all duration-300 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-7 bg-paper transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-7 bg-paper transition-all duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="flex flex-col gap-2">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${0.1 + i * 0.06}s` : "0s" }}
                className={`font-display text-4xl font-light text-paper transition-all duration-500 hover:text-gold-soft ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="label mt-12 inline-block w-fit bg-gold px-8 py-4 text-[0.72rem] text-ink"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </div>
  );
}
