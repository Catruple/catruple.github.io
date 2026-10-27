import type { ProjectId } from './projects';
import type { IconName } from '@/lib/pixel-icons';

/** Contenido del "Panel de control" del hero, agrupado por pestaña. */
export interface PanelRow {
  icon: IconName;
  title: string;
  description: string;
  meta: string;
  /** Tarjeta del repositorio a la que lleva la fila. */
  project: ProjectId;
}

export interface PanelTab {
  id: string;
  label: string;
  rows: PanelRow[];
}

export const PANEL_TABS: PanelTab[] = [
  {
    id: 'activos',
    label: 'Activos',
    rows: [
      { icon: 'win', title: 'Windows Modded (DELTA Core)', description: 'Optimización extrema y depuración de bloatware para gaming.', meta: 'v1.2 Stable', project: 'delta' },
      { icon: 'term', title: 'Catruple Toolkit & Utils', description: 'Scripts rápidos y utilidades de mantenimiento de sistemas.', meta: 'Utility', project: 'debloater' },
      { icon: 'folder', title: 'Archivo Histórico de Marca', description: 'Repositorio de proyectos independientes y marcas de prueba.', meta: 'Archive', project: 'labs' },
    ],
  },
  {
    id: 'populares',
    label: 'Populares',
    rows: [
      { icon: 'cursor', title: 'Auto-Clicker & Macros', description: 'Automatización ligera de tareas repetitivas para gaming.', meta: 'v2.1', project: 'autoclicker' },
      { icon: 'term', title: 'PowerShell Debloater', description: 'Limpia Windows de apps preinstaladas y basura innecesaria.', meta: 'Open Source', project: 'debloater' },
      { icon: 'win', title: 'Windows DELTA Edition', description: 'Sin telemetría ni servicios de más, más FPS en juegos.', meta: 'Sistema', project: 'delta' },
    ],
  },
  {
    id: 'nuevos',
    label: 'Nuevos',
    rows: [
      { icon: 'gear', title: 'Configs & Dotfiles', description: 'Perfiles de rendimiento, OBS Studio, monitor y red.', meta: 'Config', project: 'configs' },
      { icon: 'browser', title: 'Catruple.com Portal', description: 'El código fuente de este mismo sitio.', meta: 'Web', project: 'portal' },
      { icon: 'flask', title: 'Prototipos & Juegos Viejos', description: 'Experimentos y proyectos descontinuados.', meta: 'Labs', project: 'labs' },
    ],
  },
];
