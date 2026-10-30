import { PROJECT_LIST, type ProjectId } from './projects';
import type { IconName } from '@/lib/pixel-icons';

export interface PanelRow {
  icon: IconName;
  title: string;
  description: string;
  meta: string;
  project: ProjectId;
}

export interface PanelTab {
  id: string;
  label: string;
  rows: PanelRow[];
}

/** Reuse catalog identity and version so panel links cannot become stale. */
const row = (id: ProjectId, description: string): PanelRow => {
  const project = PROJECT_LIST.find(project => project.id === id);
  if (!project) throw new Error(`Unknown panel project: ${id}`);
  const shortTitles: Partial<Record<ProjectId, string>> = { filmcraft: 'FilmCraft', vectorcraft: 'VectorCraft', figcraft: 'FigCraft', localsend: 'LocalSend', godot: 'Godot' };
  return { icon: project.icon, title: shortTitles[id] ?? project.title, meta: project.meta, project: id, description };
};

/** GitHub star counts checked on 2026-10-27; curated snapshot, not a live ranking. */
export const POPULARITY_SNAPSHOT = [
  { project: 'powertoys', stars: 140053 },
  { project: 'godot', stars: 119165 },
  { project: 'terminal', stars: 105254 },
] as const;

export const PANEL_TABS: PanelTab[] = [
  {
    id: 'activos', label: 'Activos',
    // A practical starting selection, rather than activity or download telemetry.
    rows: [
      row('rufus', 'Prepara un USB para instalar Windows o Linux.'),
      row('powertoys', 'Organiza ventanas y mejora tus atajos de Windows.'),
      row('localsend', 'Pasa archivos entre tu PC y tu móvil sin nube.'),
    ],
  },
  {
    id: 'populares', label: 'Populares',
    rows: [
      row('powertoys', 'Organiza ventanas, renombra archivos y personaliza atajos.'),
      row('godot', 'Crea juegos 2D y 3D sin pagar regalías.'),
      row('terminal', 'Organiza tus consolas con pestañas, paneles y perfiles.'),
    ],
  },
  {
    id: 'nuevos', label: 'Nuevos',
    // Newest additions to Catruple first, not newest upstream software releases.
    rows: [
      row('filmcraft', 'Edita vídeo con pistas, transiciones y ajustes de color.'),
      row('vectorcraft', 'Dibuja ilustraciones con curvas, formas y efectos editables.'),
      row('figcraft', 'Diseña interfaces con componentes y prototipos.'),
    ],
  },
];
