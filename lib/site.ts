// Central contact / brand constants. Replace placeholders with the client's real data.
export const SITE = {
  name: "Steel Arte",
  tagline: "Arte. Metal. Arquitetura.",
  email: "contato@steelarte.com.br",
  instagram: "https://instagram.com/SteelArte",
  instagramHandle: "@SteelArte",
  facebook: "https://facebook.com/SteelArte",
  // TODO: substituir pelo número real de WhatsApp (formato internacional, só dígitos)
  whatsapp: "5500000000000",
  whatsappDisplay: "WhatsApp",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de conversar sobre um projeto em metal.",
};

export function whatsappLink(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
