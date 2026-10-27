/**
 * Antepone la ruta base del sitio (`base` en astro.config.mjs) a una ruta interna.
 * Úsalo para enlazar archivos de /public o páginas: withBase('favicon.svg') → /Catruple/favicon.svg
 */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}
