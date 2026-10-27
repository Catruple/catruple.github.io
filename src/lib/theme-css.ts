import { DEFAULT_THEME, THEMES, type Theme } from '@/data/themes';

const vars = (t: Theme) =>
  `--bg:${t.bg};--fg-rgb:${t.fgRgb};--sh:${t.shadow};--acc:${t.accent};--note:${t.note};`;

/** CSS con las variables de cada tema, generado desde data/themes.ts. */
export function themeCss(): string {
  const base = `:root{${vars(DEFAULT_THEME)}}`;
  const rest = THEMES.filter((t) => t !== DEFAULT_THEME)
    .map((t) => `[data-theme="${t.id}"]{${vars(t)}}`)
    .join('');
  return base + rest;
}
