import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0e0c",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steel Arte — Arte, Arquitetura e Exclusividade em Metal",
  description:
    "Painéis metálicos artísticos sob medida para arquitetura de alto padrão. Arte. Metal. Arquitetura. Corte a laser de alta precisão.",
  openGraph: {
    title: "Steel Arte — Arte Metálica para Arquitetura",
    description:
      "Painéis metálicos artísticos sob medida. Arte. Metal. Arquitetura.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
