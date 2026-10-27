/** Guía "Cómo usar" de un proyecto. */
export interface Guide {
  /** Título del popup. Si falta, se usa "Cómo usar · <nombre del proyecto>". */
  title?: string;
  /** Texto de la barra de la ventana. Si falta, se usa "Ayuda". */
  windowTitle?: string;
  /** Contenido en Markdown. */
  body: string;
}
