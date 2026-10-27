import type { Guide } from './_types';

export type { Guide };

/**
 * Guías "Cómo usar" de los proyectos: una por archivo en esta carpeta.
 * El nombre del archivo (sin .ts) es el id que va en `guide` en src/data/projects.ts.
 *
 * Para añadir una desde un .md o .txt:   npm run guide -- <ruta-del-archivo> <id-del-proyecto>
 */
const modules = import.meta.glob<{ default: Guide }>(['./*.ts', '!./index.ts', '!./_*.ts'], { eager: true });

export const GUIDES: Record<string, Guide> = Object.fromEntries(
  Object.entries(modules).map(([file, mod]) => [file.replace(/^\.\/|\.ts$/g, ''), mod.default]),
);
