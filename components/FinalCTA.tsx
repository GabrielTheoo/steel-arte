import Link from "next/link";
import Reveal from "./Reveal";
import { whatsappLink } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_120%_at_50%_120%,rgba(156,91,59,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_80%_at_50%_-10%,rgba(178,147,94,0.12),transparent_55%)]" />
      <Reveal className="relative mx-auto max-w-[58rem] px-6 text-center md:px-12">
        <p className="label text-gold-soft">Vamos conversar</p>
        <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.02] tracking-[-0.01em] text-paper">
          Seu próximo projeto pode ser uma{" "}
          <span className="italic text-gold-soft">obra de arte</span>.
        </h2>
        <p className="mx-auto mt-7 max-w-[42rem] text-lg leading-relaxed text-paper/70">
          Conte sua ideia e desenvolvemos uma solução exclusiva em metal para o
          seu espaço — do conceito à instalação.
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contato"
            className="label group inline-flex items-center justify-center gap-3 bg-gold px-9 py-4 text-[0.72rem] text-ink transition-all duration-300 hover:bg-gold-soft"
          >
            Solicitar orçamento
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="label inline-flex items-center justify-center border border-paper/35 px-9 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-paper hover:bg-paper/5"
          >
            Falar no WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
