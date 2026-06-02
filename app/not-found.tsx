import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_90%_at_50%_30%,rgba(156,91,59,0.22),transparent_55%)]" />
      <div className="relative">
        <Image
          src="/images/logo-white.png"
          alt="Steel Arte"
          width={2005}
          height={249}
          className="mx-auto h-[26px] w-auto"
          priority
        />
        <p className="label mt-12 text-gold-soft">Em breve</p>
        <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
          Esta página está sendo{" "}
          <span className="italic text-gold-soft">desenhada</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-[40rem] text-lg leading-relaxed text-paper/65">
          Estamos finalizando esta seção com o mesmo cuidado de ateliê que
          dedicamos a cada projeto. Volte em instantes.
        </p>
        <Link
          href="/"
          className="label group mt-11 inline-flex items-center gap-3 border border-paper/35 px-8 py-4 text-[0.72rem] text-paper transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
