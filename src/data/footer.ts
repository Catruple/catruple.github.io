import { SITE } from '@/config/site';

/** Lista de pendientes de la nota adhesiva. */
export const TODOS: { text: string; done?: boolean; aside?: string }[] = [
  { text: 'definir la idea', done: true },
  { text: 'dibujar los planos', done: true },
  { text: 'elegir color de pantalla', done: true },
  { text: 'conectar los enlaces', done: true },
  { text: 'terminar el footer', done: true, aside: '(← lo estás viendo)' },
  { text: 'modo oscuro', done: true },
];

/** Ventana "Avance.exe". */
export const BUILD_PROGRESS = {
  label: 'Catruple listo para explorar.',
  percent: Math.round(TODOS.filter(item => item.done).length / TODOS.length * 100),
  remark: 'pendientes completados',
};

/** Cajetín del plano. `value: null` = se rellena en el navegador con la fecha de hoy. */
export const TITLE_BLOCK = {
  cells: [
    { label: 'PROYECTO', value: 'CATRUPLE.COM' },
    { label: 'DIBUJÓ', value: SITE.author.toUpperCase() },
    { label: 'ESCALA', value: '1:1' },
    { label: 'REV', value: '0.4' },
    { label: 'FECHA', value: null },
    { label: 'ESTADO', value: 'BORRADOR' },
  ],
  note: 'HECHO A MANO. NADA DE PLANTILLAS.',
};
