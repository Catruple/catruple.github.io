/** Datos generales del sitio. */
export const SITE = {
  name: 'Catruple.com',
  title: 'Catruple.com — Centro de Herramientas y Sistemas',
  description:
    'Plataforma centralizada de desarrollos independientes, optimización de sistemas operativos y utilidades de alto rendimiento.',
  lang: 'es',
  locale: 'es-CO',
  author: 'Odruu',
  github: 'https://github.com/Odruu',
} as const;

/** Clave de localStorage donde se guarda el color de pantalla elegido. */
export const THEME_STORAGE_KEY = 'catruple-theme';

/** ids de las secciones de la página que se usan como anclas. */
export const SECTION_IDS = {
  catalog: 'tools',
} as const;
