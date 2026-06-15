// Stylized line-art of the Colosseum — decorative nod to the Italian heritage.
type Props = { className?: string };

const COLS = 9;
const STEP = 52;
const ARCH_W = 44;
const X0 = 24;
const GROUND = 196;

function arches(yBase: number, h: number, count: number) {
  const r = ARCH_W / 2;
  const items: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = X0 + i * STEP;
    const top = yBase - h;
    items.push(
      `M ${x} ${yBase} L ${x} ${top + r} A ${r} ${r} 0 0 1 ${x + ARCH_W} ${top + r} L ${x + ARCH_W} ${yBase}`
    );
  }
  return items;
}

export default function ColosseumVector({ className = "" }: Props) {
  const tier1 = arches(GROUND, 74, COLS);
  const tier2 = arches(GROUND - 80, 60, COLS);
  const tier3 = arches(GROUND - 148, 46, 5); // intact left block
  const width = X0 * 2 + (COLS - 1) * STEP + ARCH_W;

  return (
    <svg
      viewBox={`0 0 ${width} 210`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* ground */}
      <line x1="6" y1={GROUND} x2={width - 6} y2={GROUND} />
      {/* tiers */}
      {[...tier1, ...tier2, ...tier3].map((d, i) => (
        <path key={i} d={d} />
      ))}
      {/* cornices */}
      <line x1={X0 - 4} y1={GROUND - 74} x2={X0 + (COLS - 1) * STEP + ARCH_W + 4} y2={GROUND - 74} />
      <line x1={X0 - 4} y1={GROUND - 140} x2={X0 + (COLS - 1) * STEP + ARCH_W + 4} y2={GROUND - 140} opacity="0.85" />
      {/* attic wall over intact block + broken edge to the right (ruin) */}
      <path d={`M ${X0 - 4} ${GROUND - 194} L ${X0 + 5 * STEP} ${GROUND - 194} L ${X0 + 5 * STEP} ${GROUND - 150}`} />
      <path
        d={`M ${X0 + 5 * STEP} ${GROUND - 172} l 24 10 l 18 -8 l 26 14 l 20 -6`}
        opacity="0.7"
      />
    </svg>
  );
}
