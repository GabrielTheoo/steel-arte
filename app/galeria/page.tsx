import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageHeader from "@/components/PageHeader";
import ProjectGallery, { type GalleryItem } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Galeria de Projetos — Steel Arte",
  description:
    "Projetos residenciais e corporativos onde os painéis metálicos da Steel Arte se tornaram parte da arquitetura.",
};

const ITEMS: GalleryItem[] = [
  { src: "/images/hero.jpg", alt: "Fachada com painéis de folhas vazadas a laser", tags: ["Fachadas", "Residencial"] },
  { src: "/images/paineis-1.jpg", alt: "Fachada de painéis artísticos", tags: ["Fachadas", "Residencial"] },
  { src: "/images/paineis-2.jpg", alt: "Detalhe de painel com padrão de folhas", tags: ["Fachadas"] },
  { src: "/images/paineis-3.jpg", alt: "Painel corten com recorte circular em parede verde", tags: ["Áreas Gourmet", "Residencial"] },
  { src: "/images/corten-facade.jpg", alt: "Fachada em aço corten com recorte orgânico", tags: ["Fachadas", "Residencial"] },
  { src: "/images/gal-5.jpg", alt: "Fachada corten residencial", tags: ["Fachadas", "Residencial"] },
  { src: "/images/paineis-4.jpg", alt: "Fachada perfurada com porta", tags: ["Fachadas", "Residencial"] },
  { src: "/images/gal-8.jpg", alt: "Fachada perfurada de edifício corporativo", tags: ["Fachadas", "Corporativo"] },
  { src: "/images/brise-3.jpg", alt: "Fachada perfurada iluminada", tags: ["Fachadas", "Residencial"] },
  { src: "/images/divisoria-arvores.jpg", alt: "Divisória com padrão de árvores", tags: ["Interiores", "Residencial"] },
  { src: "/images/gal-1.jpg", alt: "Painel corten arabesco em ambiente interno", tags: ["Interiores", "Corporativo"] },
  { src: "/images/gal-6.jpg", alt: "Divisória corten em deck", tags: ["Áreas Gourmet"] },
  { src: "/images/div-2.jpg", alt: "Divisória com grade geométrica", tags: ["Interiores", "Corporativo"] },
  { src: "/images/div-3.jpg", alt: "Divisória em aço corten", tags: ["Interiores"] },
  { src: "/images/gal-2.jpg", alt: "Pergolado projetando sombras sobre piscina", tags: ["Áreas Gourmet", "Residencial"] },
  { src: "/images/gal-3.jpg", alt: "Área gourmet sob pergolado", tags: ["Áreas Gourmet"] },
  { src: "/images/gal-7.jpg", alt: "Lounge sob pergolado", tags: ["Áreas Gourmet", "Residencial"] },
  { src: "/images/perg-2.jpg", alt: "Pergolado em área de piscina", tags: ["Áreas Gourmet"] },
  { src: "/images/prod-pergolados.jpg", alt: "Pergolado com recorte orgânico", tags: ["Áreas Gourmet"] },
  { src: "/images/gal-4.jpg", alt: "Painel decorativo em aço corten", tags: ["Áreas Gourmet", "Interiores"] },
  { src: "/images/obj-2.jpg", alt: "Objeto decorativo em metal", tags: ["Interiores"] },
  { src: "/images/obj-3.jpg", alt: "Esculturas em aço corten", tags: ["Áreas Gourmet"] },
  { src: "/images/prod-portoes.jpg", alt: "Portão com recorte floral", tags: ["Fachadas", "Residencial"] },
  { src: "/images/prod-portas.jpg", alt: "Porta arquitetônica recortada a laser", tags: ["Fachadas", "Residencial"] },
  { src: "/images/portao-2.jpg", alt: "Entrada com painel metálico", tags: ["Fachadas", "Residencial"] },
  // Fotos novas (acervo do cliente)
  { src: "/images/nh-banner.jpg", alt: "Painel dourado com poltronas", tags: ["Interiores", "Residencial"] },
  { src: "/images/brise-seg-1.jpg", alt: "Fachada com brise de segurança", tags: ["Fachadas", "Residencial"] },
  { src: "/images/brise-retrofit.jpg", alt: "Brise retrofit de fachada", tags: ["Fachadas", "Residencial"] },
  { src: "/images/brise-personalizado.jpg", alt: "Brise personalizado em fachada", tags: ["Fachadas", "Residencial"] },
  { src: "/images/brises-correr.jpg", alt: "Brises de correr com sombras", tags: ["Interiores"] },
  { src: "/images/gcn-2.jpg", alt: "Guarda-corpo em aço corten", tags: ["Residencial"] },
  { src: "/images/gcn-1.jpg", alt: "Guarda-corpo perfurado em sacada", tags: ["Residencial"] },
  { src: "/images/prt-portoes.jpg", alt: "Portão exclusivo recortado a laser", tags: ["Fachadas", "Residencial"] },
  { src: "/images/perg-main.jpg", alt: "Pergolado projetando sombras", tags: ["Áreas Gourmet"] },
  { src: "/images/perg-1b.jpg", alt: "Pergolado em corredor externo", tags: ["Áreas Gourmet"] },
  { src: "/images/deco-1.jpg", alt: "Mandala decorativa em aço corten", tags: ["Interiores"] },
  { src: "/images/deco-4.jpg", alt: "Biombo decorativo em aço corten", tags: ["Áreas Gourmet", "Interiores"] },
  { src: "/images/prt-portas.jpg", alt: "Porta arquitetônica recortada a laser", tags: ["Residencial"] },
];

export default function GaleriaPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <PageHeader
          eyebrow="Projetos realizados"
          title={
            <>
              Onde a Steel Arte encontra a{" "}
              <span className="italic text-gold-soft">arquitetura</span>.
            </>
          }
          lead="Projetos residenciais e corporativos onde nossos painéis se tornaram parte da obra. Clique para ampliar."
          image="/images/nh-banner.jpg"
          imageAlt="Painel metálico dourado vazado a laser com poltronas"
          imagePosition="center 78%"
        />

        <section className="bg-ink py-16 md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <ProjectGallery items={ITEMS} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
