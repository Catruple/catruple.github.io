/**
 * Íconos pixel-art dibujados como mapas de texto ("X" = píxel lleno).
 * Se convierten a SVG en tiempo de compilación (ver components/ui/PixelIcon.astro).
 */
export const ICONS = {
  cat: ['XX......XX', 'XXX....XXX', 'XXXXXXXXXX', 'XXXXXXXXXX', 'XX.XXXX.XX', 'XXXXXXXXXX', 'XXXX..XXXX', '.XXXXXXXX.', '..XXXXXX..'],
  lens: ['..XXXXX....', '.X.....X...', 'X.......X..', 'X.......X..', 'X.......X..', '.X.....X...', '..XXXXX.X..', '.......XXX.', '........XXX'],
  win: ['XXXXX..XXXXX', 'XXXXX..XXXXX', 'XXXXX..XXXXX', 'XXXXX..XXXXX', 'XXXXX..XXXXX', '............', 'XXXXX..XXXXX', 'XXXXX..XXXXX', 'XXXXX..XXXXX', 'XXXXX..XXXXX', 'XXXXX..XXXXX'],
  cursor: ['X...........', 'XX..........', 'XXX.........', 'XXXX........', 'XXXXX.......', 'XXXXXX......', 'XXXXXXX.....', 'XXXXXXXX....', 'XXXXXX......', 'XX.XXX......', 'X..XXX......', '....XXX.....'],
  term: ['XXXXXXXXXXXX', 'X..........X', 'X.X........X', 'X..X.......X', 'X...X......X', 'X..X.......X', 'X.X..XXXX..X', 'X..........X', 'XXXXXXXXXXXX'],
  browser: ['XXXXXXXXXXXX', 'XXXXXXXXXXXX', 'X..........X', 'X.XXXX.XX..X', 'X..........X', 'X.XXXXXXXX.X', 'X..........X', 'X.XXXX.XXX.X', 'X..........X', 'XXXXXXXXXXXX'],
  flask: ['...XXXXXX...', '....X..X....', '....X..X....', '....X..X....', '...XX..XX...', '..X......X..', '.X..XXXX..X.', '.X.XXXXXX.X.', '.XXXXXXXXXX.'],
  gear: ['....XXXX....', '.XX.XXXX.XX.', '.XXXXXXXXXX.', 'XXXXX..XXXXX', 'XXX......XXX', 'XXX......XXX', 'XXXXX..XXXXX', '.XXXXXXXXXX.', '.XX.XXXX.XX.', '....XXXX....'],
  folder: ['XXXXX.......', 'X...XXXXXXXX', 'X..........X', 'X..........X', 'X..........X', 'X..........X', 'XXXXXXXXXXXX'],
  floppy: ['XXXXXXXXXX..', 'X..XXXX..XX.', 'X..XXXX...XX', 'X..XXXX....X', 'X..........X', 'X..XXXXXX..X', 'X.X......X.X', 'X.X......X.X', 'X.X......X.X', 'X.XXXXXXXX.X', 'X..........X', 'XXXXXXXXXXXX'],
  alert: ['.....XX.....', '....XXXX....', '....X..X....', '...XX..XX...', '...X.XX.X...', '..XX.XX.XX..', '..X..XX..X..', '.XX..XX..XX.', '.X........X.', 'XX...XX...XX', 'XXXXXXXXXXXX'],
} as const satisfies Record<string, readonly string[]>;

export type IconName = keyof typeof ICONS;

/** Genera el SVG de un ícono uniendo los píxeles contiguos de cada fila. */
export function pixelSvg(name: IconName): string {
  const rows = ICONS[name];
  const width = Math.max(...rows.map((r) => r.length));
  let d = '';
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      if (row[x] !== 'X') {
        x++;
        continue;
      }
      let len = 1;
      while (row[x + len] === 'X') len++;
      d += `M${x} ${y}h${len}v1h-${len}z`;
      x += len;
    }
  });
  return `<svg viewBox="0 0 ${width} ${rows.length}" aria-hidden="true" shape-rendering="crispEdges"><path d="${d}" fill="currentColor"/></svg>`;
}
