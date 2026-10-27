/**
 * Biblioteca de garabatos a mano alzada.
 * Se publican una sola vez como <symbol id="d-NOMBRE"> (DoodleSprite.astro)
 * y se reutilizan con <use href="#d-NOMBRE"> (Doodle.astro, Annotation.astro).
 */
export const DOODLES = {
  squiggle: { viewBox: '0 0 120 30', body: '<path d="M5 15 q10 -20 20 0 t20 0 t20 0 t20 0 t20 0"/>' },
  spiral: { viewBox: '0 0 80 80', body: '<path d="M40 42 c-3 -5 4 -9 8 -5 c6 6 -3 16 -12 13 c-12 -4 -11 -22 2 -27 c15 -5 30 8 27 23 c-4 19 -28 25 -41 12 c-14 -15 -8 -40 11 -47"/>' },
  star: { viewBox: '0 0 60 60', body: '<path d="M30 5 L37 24 L57 24 L41 36 L47 56 L30 44 L13 56 L19 36 L3 24 L23 24 Z"/><path d="M31 8 L38 26 L55 25" opacity=".6"/>' },
  arrow: { viewBox: '0 0 120 80', body: '<path d="M5 70 C 30 10, 80 5, 112 30 M112 30 l-6 -15 M112 30 l-16 -2"/>' },
  'arrow-up': { viewBox: '0 0 60 80', body: '<path d="M30 76 C 10 55, 50 35, 28 8 M28 8 l2 14 M28 8 l13 5"/>' },
  loop: { viewBox: '0 0 160 50', body: '<path d="M5 40 c20 -40 40 -40 30 -10 c-8 20 -30 5 -10 -10 c25 -20 45 -5 55 5 c15 15 35 -30 45 -10 c8 15 -15 20 -10 5 c5 -15 25 -15 40 5"/>' },
  oval: { viewBox: '0 0 200 60', stretch: true, body: '<path d="M20 30 C 20 8, 120 2, 180 12 C 205 20, 190 52, 120 55 C 60 58, 8 50, 14 24 C 16 14, 40 8, 70 6"/>' },
  gear: { viewBox: '0 0 100 100', body: '<circle cx="50" cy="50" r="36" stroke-width="10" stroke-dasharray="9 6"/><circle cx="50" cy="50" r="30"/><circle cx="50" cy="50" r="12"/><path d="M50 2v96M2 50h96" stroke-dasharray="6 3 1 3" opacity=".7"/>' },
  cross: { viewBox: '0 0 40 40', body: '<circle cx="20" cy="20" r="9"/><path d="M20 0v40M0 20h40"/>' },
  x: { viewBox: '0 0 40 40', body: '<path d="M6 7 L34 33 M33 6 L7 34"/>' },
  cube: { viewBox: '0 0 60 62', body: '<path d="M30 5 L55 18 V45 L30 58 L5 45 V18 Z M30 5 V32 M5 18 L30 32 L55 18"/><path d="M30 32 V58" stroke-dasharray="3 3"/>' },
} as const;

export type DoodleName = keyof typeof DOODLES;

export const doodleId = (name: DoodleName) => `d-${name}`;
