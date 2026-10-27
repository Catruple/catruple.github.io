import type { ProjectCategory } from './categories';
import type { IconName } from '@/lib/pixel-icons';

/**
 * =====================================================
 * EDITA AQUÍ LOS PROYECTOS Y SUS ENLACES
 * Qué hace el botón de cada tarjeta, por orden de prioridad:
 *   1. `url`     → abre el enlace en una pestaña nueva.
 *   2. `command` → muestra un popup con el comando para copiar.
 *   3. nada      → avisa que aún no hay enlace.
 *
 * `guide` añade además un botón "Cómo usar" con la guía de src/data/guides/<guide>.ts.
 * Para crearla desde un .md o .txt:  npm run guide -- <archivo> <id-del-proyecto>
 * =====================================================
 */

/** Comando de terminal que se muestra en el popup de un proyecto. */
export interface ProjectCommand {
  /** Instrucción que aparece encima del comando. */
  intro: string;
  code: string;
  /** Enlace a la fuente oficial del comando. */
  source?: { href: string; text: string };
}

export interface Project {
  id: string;
  category: ProjectCategory;
  /** Título de la ventana de la tarjeta (p. ej. "Sistema.app"). */
  windowTitle: string;
  icon: IconName;
  title: string;
  description: string;
  /** Texto pequeño del pie de la tarjeta. */
  meta: string;
  /** Texto del botón. */
  cta: string;
  url: string;
  command?: ProjectCommand;
  /** Guía "Cómo usar": nombre del archivo en src/data/guides, sin .ts. */
  guide?: string;
  /** Muestra el sello "WIP". */
  wip?: boolean;
}

export const PROJECTS = [
  {
    id: 'delta',
    category: 'sistema',
    windowTitle: 'Sistema.app',
    icon: 'win',
    title: 'Windows DELTA Edition',
    description:
      'Versión modificada orientada a eliminar telemetría, servicios innecesarios y maximizar los FPS en juegos.',
    meta: 'Actualizado: Hoy',
    cta: 'Ver proyecto',
    url: '',
  },
  {
    id: 'autoclicker',
    category: 'utilidad',
    windowTitle: 'Utilidad.exe',
    icon: 'cursor',
    title: 'Auto-Clicker & Macros',
    description:
      'Herramientas de automatización de tareas repetitivas diseñadas con bajo consumo de recursos para gaming.',
    meta: 'Versión 2.1',
    cta: 'Descargar',
    url: '',
  },
  {
    id: 'debloater',
    category: 'script',
    windowTitle: 'Script.ps1',
    icon: 'term',
    title: 'PowerShell Debloater',
    description:
      'Script automatizado para limpiar Windows de aplicaciones preinstaladas de fábrica y basura innecesaria.',
    meta: 'Open Source',
    cta: 'Código',
    url: '',
    command: {
      intro: 'Abre PowerShell como administrador y ejecuta el comando de la Windows Utility de Chris Titus:',
      code: 'irm christitus.com/win | iex',
      source: { href: 'https://christitus.com/windows-tool/', text: 'Guía oficial' },
    },
    guide: 'debloater', // → src/data/guides/debloater.ts
  },
  {
    id: 'portal',
    category: 'web',
    windowTitle: 'Portal.html',
    icon: 'browser',
    title: 'Catruple.com Portal',
    description:
      'El código fuente de este mismo centro de operaciones minimalista optimizado para velocidad y despliegue rápido.',
    meta: 'En línea',
    cta: 'Repositorio',
    url: 'https://github.com/Odruu/Catruple',
  },
  {
    id: 'labs',
    category: 'labs',
    windowTitle: 'Labs.dat',
    icon: 'flask',
    title: 'Prototipos & Juegos Viejos',
    description:
      'Recopilación de proyectos descontinuados y experimentos de marca creados a lo largo de los años.',
    meta: 'Histórico',
    cta: 'Explorar',
    url: '',
    wip: true,
  },
  {
    id: 'configs',
    category: 'config',
    windowTitle: 'Config.sys',
    icon: 'gear',
    title: 'Configs & Dotfiles',
    description:
      'Perfiles de rendimiento, configuraciones de OBS Studio, ajustes de monitor y optimizaciones de red.',
    meta: 'Actualizado',
    cta: 'Ver archivos',
    url: '',
  },
] as const satisfies readonly Project[];

export type ProjectId = (typeof PROJECTS)[number]['id'];

/** Los mismos proyectos, tipados con todos los campos opcionales de `Project`. */
export const PROJECT_LIST: readonly Project[] = PROJECTS;

/** id del elemento HTML de la tarjeta de un proyecto. */
export const cardDomId = (id: string) => `card-${id}`;

/** id del popup "Cómo usar" de un proyecto. */
export const guideDomId = (id: string) => `guide-${id}`;
