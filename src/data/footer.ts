import { SITE } from '@/config/site';

/** Lista de pendientes de la nota adhesiva. */
export const TODOS: { text: string; done?: boolean; aside?: string }[] = [
  { text: 'definir la idea', done: true },
  { text: 'dibujar los planos', done: true },
  { text: 'elegir color de pantalla', done: true },
  { text: 'conectar los enlaces' },
  { text: 'terminar el footer', aside: '(← lo estás viendo)' },
  { text: 'modo oscuro (¿?)' },
];

/** Ventana "Avance.exe". */
export const BUILD_PROGRESS = {
  label: 'Construyendo catruple.com…',
  percent: 71,
  remark: 'faltan cosas',
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
