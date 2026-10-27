/**
 * Colores de pantalla. El primero es el tema por defecto.
 * Las variables CSS de cada tema se generan desde aquí (ver lib/theme-css.ts).
 */
export interface Theme {
  id: string;
  label: string;
  /** Color de fondo (también se usa como muestra en el menú). */
  bg: string;
  /** Color del texto y las líneas sobre el fondo, en formato "R G B". */
  fgRgb: string;
  /** Sombra de los títulos. */
  shadow: string;
  /** Pegatinas, cinta, selecciones. */
  accent: string;
  /** Notas escritas a mano. */
  note: string;
}

const LIGHT_TEXT = { fgRgb: '255 255 255', shadow: '#0b0b14', accent: '#ffd23f', note: '#ffd23f' };
const DARK_TEXT = { fgRgb: '11 11 20', shadow: '#fffcf0', accent: '#fffcf0', note: '#0b0b14' };

export const THEMES: Theme[] = [
  { id: 'azul', label: 'Plano azul', bg: '#1b4fd1', ...LIGHT_TEXT },
  { id: 'naranja', label: 'Naranja', bg: '#f59a2f', ...DARK_TEXT },
  { id: 'rojo', label: 'Rojo', bg: '#e8454f', ...LIGHT_TEXT },
  { id: 'verde', label: 'Verde', bg: '#8fcf3c', ...DARK_TEXT },
  { id: 'amarillo', label: 'Amarillo', bg: '#f5c320', ...DARK_TEXT },
  { id: 'violeta', label: 'Violeta', bg: '#6f7cf2', ...LIGHT_TEXT },
];

export const DEFAULT_THEME = THEMES[0];
