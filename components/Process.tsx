import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Briefing",
    desc: "Entendemos o projeto arquitetônico, o ambiente e a intenção de design.",
  },
  {
    n: "02",
    title: "Desenvolvimento",
    desc: "Criamos desenhos e padrões exclusivos para o seu projeto.",
  },
  {
    n: "03",
    title: "Aprovação",
    desc: "Apresentamos a peça em 3D antes de qualquer corte.",
  },
  {
    n: "04",
    title: "Produção",
    desc: "Corte a laser de alta precisão, com acabamentos premium.",
  },
  {
    n: "05",
    title: "Instalação",
    desc: "Equipe especializada finaliza a peça na obra.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-paper py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <p className="label text-corten">Como trabalhamos</p>
          <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em]">
            Da sua ideia à instalação — com precisão de ateliê.
          </h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-px border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 0.08}
              className="group relative border-b border-ink/15 pt-8 sm:border-r lg:border-b-0 lg:[&:nth-child(5)]:border-r-0"
            >
              <div className="pr-6">
                <span className="font-display text-5xl font-light text-ink/25 transition-colors duration-500 group-hover:text-corten">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-wide">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[26ch] pb-8 text-sm leading-relaxed text-graphite">
                  {s.desc}
                </p>
              </div>
              <span className="absolute left-0 top-[-1px] h-px w-0 bg-corten transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
