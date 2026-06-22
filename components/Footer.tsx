import Link from "next/link";
import Image from "next/image";
import { SITE, whatsappLink } from "@/lib/site";

const PRODUCTS = [
  { label: "Painéis Artísticos", href: "/produtos/paineis-artisticos" },
  { label: "Divisórias Decorativas", href: "/produtos/divisorias-decorativas" },
  { label: "Brise", href: "/produtos/brise" },
  { label: "Pergolados", href: "/produtos/pergolados" },
  { label: "Objetos de Decoração", href: "/produtos/objetos-de-decoracao" },
];

const INSTITUTIONAL = [
  { label: "Nossa História", href: "/historia" },
  { label: "Galeria de Projetos", href: "/galeria" },
  { label: "Para Arquitetos", href: "/arquitetos" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink-soft">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <Image
              src="/images/logo-white.png"
              alt="Steel Arte"
              width={2005}
              height={249}
              className="h-[22px] w-auto"
            />
            <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-paper/55">
              Arte metálica sob medida para arquitetura de alto padrão.
            </p>
            <p className="label mt-7 text-[0.6rem] text-gold-soft/80">
              Projeto · Desenvolvimento · Instalação
            </p>
          </div>

          {/* Products */}
          <nav className="md:col-span-3 md:col-start-7">
            <p className="label text-[0.62rem] text-paper/40">Produtos</p>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-paper/70 transition-colors hover:text-gold-soft"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Institutional */}
          <nav className="md:col-span-2">
            <p className="label text-[0.62rem] text-paper/40">Institucional</p>
            <ul className="mt-5 space-y-3">
              {INSTITUTIONAL.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm text-paper/70 transition-colors hover:text-gold-soft"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="label text-[0.62rem] text-paper/40">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold-soft"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-soft"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-soft"
                >
                  Instagram {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-soft"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Versículo — área central do rodapé */}
          <figure className="col-span-2 mt-6 self-center md:col-span-7 md:col-start-6 md:mt-0">
            <p
              dir="rtl"
              lang="he"
              className="text-right font-display text-lg leading-relaxed text-gold-soft/80"
            >
              גֹּ֣ל אֶל־יְהוָ֣ה מַעֲשֶׂ֑יךָ וְ֝יִכֹּ֗נוּ מַחְשְׁבֹתֶֽיךָ
            </p>
            <blockquote className="mt-3 text-right text-[0.8rem] italic leading-relaxed text-paper/55">
              “Consagre ao Senhor tudo o que você faz, e os seus planos serão
              bem-sucedidos.”
            </blockquote>
            <figcaption className="label mt-2 text-right text-[0.56rem] text-paper/40">
              Provérbios 16:3
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-[0.7rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {2026} Steel Arte. Todos os direitos reservados.</p>
          <p className="label text-[0.58rem]">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
