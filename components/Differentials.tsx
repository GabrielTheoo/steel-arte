import Reveal from "./Reveal";

const ITEMS = [
  "Design inspirado na arquitetura italiana",
  "Projetos exclusivos",
  "Produção personalizada",
  "Corte a laser de alta precisão",
  "Instalação especializada",
  "Atendimento consultivo",
  "Acabamentos premium",
  "Soluções para residências e empreendimentos de alto padrão",
];

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-gold"
    >
      <path
        d="M4 12.5l5 5L20 6.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Differentials() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(90%_70%_at_85%_15%,rgba(156,91,59,0.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="label text-gold-soft">Por que Steel Arte</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.05] tracking-[-0.01em] text-paper">
              O que separa uma peça Steel Arte de uma peça comum.
            </h2>
          </Reveal>

          <ul className="grid grid-cols-1 gap-px self-start border-t border-paper/12 sm:grid-cols-2 lg:col-span-8">
            {ITEMS.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={(i % 2) * 0.06}
                className={`flex items-start gap-4 border-b border-paper/12 py-6 sm:odd:border-r sm:odd:pr-8 ${
                  i % 2 === 1 ? "sm:pl-8" : ""
                }`}
              >
                <Check />
                <span className="text-paper/85">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
