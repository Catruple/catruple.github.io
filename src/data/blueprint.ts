import type { IconName } from '@/lib/pixel-icons';
import type { DoodleName } from '@/lib/doodles';
import type { Box } from '@/lib/placement';

/**
 * Piezas del fondo: un plano de 3000×2000 px con menús y ventanas sin terminar.
 * Todas las coordenadas son en px dentro de ese plano.
 */

export const DIMENSIONS: (Box & { orientation: 'h' | 'v'; label: string })[] = [
  { orientation: 'h', x: 160, y: 50, w: 1560, label: '1440 px' },
  { orientation: 'v', x: 70, y: 300, h: 650, label: '640' },
  { orientation: 'h', x: 300, y: 1000, w: 1000, label: 'Ø 32.5' },
];

export const MENU_BAR = {
  box: { x: 160, y: 130, w: 1560 },
  items: ['Archivo', 'Edición', 'Vista', 'Especial'],
};

export const DRAFT_WINDOW = {
  box: { x: 300, y: 320, w: 1000, h: 640 },
  title: 'Sin título',
  rulerMarks: ['1', '2', '3', '4'],
  scribbles: [
    { x: 70, y: 210, w: 520, h: 130 },
    { x: 120, y: 380, w: 360, h: 90 },
  ] satisfies Box[],
};

export const DROPDOWN_MENU = {
  box: { x: 1560, y: 320, w: 540 },
  /** '---' dibuja un separador. */
  items: ['Optimizar…', 'Limpiar', 'Depurar bloatware', 'Medir FPS', '---', 'Telemetría ✕'],
  selected: 'Depurar bloatware',
};

export const PUZZLE = {
  box: { x: 220, y: 1190, w: 560 },
  title: 'Puzzle',
  /** 0 = hueco. */
  tiles: [1, 2, 3, 13, 5, 6, 7, 4, 9, 0, 10, 8, 14, 11, 15, 12],
};

export const KEYPAD = {
  box: { x: 1000, y: 1270 },
  keys: ['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '−', '0', '.', '=', '+'],
};

export const PROFILES = {
  box: { x: 2120, y: 1020, w: 700 },
  title: 'Perfiles',
  options: ['Rendimiento', 'Streaming', 'Silencio', '¿Boing?'],
  selected: 'Streaming',
};

export const BIG_TYPE = {
  box: { x: 1340, y: 1560, w: 1500 },
  lines: ['hecho a mano.', 'sin plantillas.', 'sin permiso.'],
};

export const BIG_ICONS: { icon: IconName; x: number; y: number; size: number }[] = [
  { icon: 'floppy', x: 2380, y: 360, size: 240 },
  { icon: 'cursor', x: 1930, y: 640, size: 170 },
];

export const DOODLES: (Box & { name: DoodleName; accent?: boolean })[] = [
  // tinta
  { name: 'spiral', x: 1180, y: 1640, w: 220, h: 220 },
  { name: 'squiggle', x: 2200, y: 1560, w: 420, h: 105 },
  { name: 'cube', x: 2680, y: 620, w: 260, h: 270 },
  { name: 'loop', x: 700, y: 1060, w: 460, h: 145 },
  { name: 'gear', x: 2560, y: 1700, w: 300, h: 300 },
  { name: 'star', x: 900, y: 30, w: 100, h: 100 },
  { name: 'cross', x: 90, y: 1090, w: 110, h: 110 },
  { name: 'cross', x: 2850, y: 200, w: 110, h: 110 },
  // color de acento
  { name: 'oval', x: 1530, y: 560, w: 620, h: 110, accent: true },
  { name: 'x', x: 1470, y: 90, w: 130, h: 130, accent: true },
  { name: 'arrow', x: 2130, y: 520, w: 230, h: 150, accent: true },
];

export const HAND_NOTES: { text: string; x: number; y: number; rotate: number }[] = [
  { text: 'esto ya lo hice', x: 2170, y: 440, rotate: -5 },
  { text: '¿y la parte de abajo?', x: 340, y: 980, rotate: -3 },
  { text: 'falta el resto', x: 1020, y: 1170, rotate: 4 },
  { text: '← aquí va el logo', x: 1180, y: 210, rotate: -2 },
];
