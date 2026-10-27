/** Caja en px para colocar piezas de forma absoluta (fondo del plano). */
export interface Box {
  x: number;
  y: number;
  w?: number;
  h?: number;
  rotate?: number;
}

/** Convierte una caja en un `style` con posición absoluta. */
export function place({ x, y, w, h, rotate }: Box): string {
  const rules = ['position:absolute', `left:${x}px`, `top:${y}px`];
  if (w !== undefined) rules.push(`width:${w}px`);
  if (h !== undefined) rules.push(`height:${h}px`);
  if (rotate) rules.push(`transform:rotate(${rotate}deg)`);
  return rules.join(';');
}
