export const SITE_URL = "https://quickpro.website";
export const SITE_NAME = "Quick Pro";
export const SITE_TAGLINE = "Reprodutor Profissional de IPTV em Ultra HD 4K para Smart TV e TV Box";
export const SITE_DESCRIPTION = "Quick Pro: reprodutor de IPTV em 4K e Full HD com alta performance, grade de canais completa, filmes, séries e esportes ao vivo sem travamentos.";
export const DEFAULT_OG_IMAGE = "https://quickpro.website/og-image.webp";

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}
