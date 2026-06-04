import Image from "next/image";
import { type ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  image?: string;
  imageAlt?: string;
};

export default function PageHeader({ eyebrow, title, lead, image, imageAlt }: Props) {
  return (
    <header className="relative overflow-hidden bg-ink-soft">
      {image && (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/55" />
          <div className="absolute inset-0 [background:radial-gradient(90%_120%_at_20%_0%,rgba(156,91,59,0.22),transparent_55%)]" />
        </>
      )}
      <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-52">
        <p className="label text-gold-soft">{eyebrow}</p>
        <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-0.01em] text-paper">
          {title}
        </h1>
        {lead && (
          <p className="mt-7 max-w-[46rem] text-lg leading-relaxed text-paper/70">
            {lead}
          </p>
        )}
      </div>
    </header>
  );
}
