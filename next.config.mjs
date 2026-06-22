/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação 100% estática (HTML/CSS/JS) para hospedagem Apache (HostGator).
  output: "export",
  // URLs com barra final → cada página vira pasta/index.html (servida limpa pelo Apache).
  trailingSlash: true,
  images: {
    // Sem servidor de otimização de imagens na hospedagem compartilhada.
    unoptimized: true,
  },
};

export default nextConfig;
