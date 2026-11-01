/** Datos generales del sitio. */
export const SITE = {
  name: 'Catruple.com',
  title: 'Catruple.com',
  description:
    'A la mierda sus suscripciones. Catruple reúne herramientas gratis y de código abierto para tu PC, con guías y enlaces oficiales.',
  lang: 'es',
  locale: 'es-CO',
  author: 'Odruu',
  github: 'https://github.com/Odruu',
  /** Repositorio del sitio (GitHub redirige aquí si el repo cambia de nombre). */
  repo: 'https://github.com/Catruple/Catruple',
} as const;

/**
 * Token de Cloudflare Web Analytics (cuenta de Cloudflare → Analytics & Logs →
 * Web Analytics → Add a site → catruple.com). No es secreto: va visible en el HTML.
 * Vacío = no se carga el script de analítica.
 */
export const CLOUDFLARE_ANALYTICS_TOKEN = '850d35781478498a8ecf1df36da0dd70';

/** Clave de localStorage donde se guarda el color de pantalla elegido. */
export const THEME_STORAGE_KEY = 'catruple-theme';

/** ids de las secciones de la página que se usan como anclas. */
export const SECTION_IDS = {
  catalog: 'tools',
} as const;
