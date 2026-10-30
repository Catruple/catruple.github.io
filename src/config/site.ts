/** Datos generales del sitio. */
export const SITE = {
  name: 'Catruple.com',
  title: 'Catruple.com — Centro de Herramientas y Sistemas',
  description:
    'A la mierda sus suscripciones. Catruple reúne herramientas gratis y de código abierto para tu PC, con guías y enlaces oficiales.',
  lang: 'es',
  locale: 'es-CO',
  author: 'Odruu',
  github: 'https://github.com/Odruu',
  /** Repositorio del sitio (GitHub redirige aquí si el repo cambia de nombre). */
  repo: 'https://github.com/Catruple/Catruple',
} as const;

/** Clave de localStorage donde se guarda el color de pantalla elegido. */
export const THEME_STORAGE_KEY = 'catruple-theme';

/** ids de las secciones de la página que se usan como anclas. */
export const SECTION_IDS = {
  catalog: 'tools',
} as const;
