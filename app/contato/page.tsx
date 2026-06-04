import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato — Steel Arte",
  description:
    "Conte seu projeto e desenvolvemos uma solução exclusiva em metal. Fale com a Steel Arte por WhatsApp ou e-mail.",
};

export default function ContatoPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <PageHeader
          eyebrow="Vamos conversar"
          title={
            <>
              Conte seu <span className="italic text-gold-soft">projeto</span>.
            </>
          }
          lead="Envie as informações abaixo e desenvolvemos uma solução exclusiva em metal para o seu espaço — do conceito à instalação."
          image="/images/paineis-3.jpg"
          imageAlt="Painel em aço corten com recorte circular"
        />

        <section className="bg-ink py-20 md:py-28">
          <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:px-12 lg:grid-cols-12 lg:gap-12">
            {/* Formulário */}
            <Reveal className="lg:col-span-7">
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.1] tracking-[-0.01em] text-paper">
                Envie sua mensagem
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            {/* Canais diretos */}
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <p className="label text-gold-soft">Falar direto</p>
              <div className="mt-7 space-y-7">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-paper/12 pt-5"
                >
                  <span className="label text-[0.58rem] text-paper/40">WhatsApp</span>
                  <span className="mt-1 block font-display text-2xl font-light text-paper transition-colors group-hover:text-gold-soft">
                    Chamar no WhatsApp →
                  </span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group block border-t border-paper/12 pt-5"
                >
                  <span className="label text-[0.58rem] text-paper/40">E-mail</span>
                  <span className="mt-1 block font-display text-2xl font-light text-paper transition-colors group-hover:text-gold-soft">
                    {SITE.email}
                  </span>
                </a>
                <div className="border-t border-paper/12 pt-5">
                  <span className="label text-[0.58rem] text-paper/40">Redes</span>
                  <div className="mt-2 flex gap-6">
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/80 transition-colors hover:text-gold-soft"
                    >
                      Instagram
                    </a>
                    <a
                      href={SITE.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/80 transition-colors hover:text-gold-soft"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
              <p className="label mt-10 text-[0.6rem] text-gold-soft/70">
                Projeto · Desenvolvimento · Instalação
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
