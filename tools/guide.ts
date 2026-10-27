/**
 * Gestiona las guías "Cómo usar" de los proyectos (solo se usa en local).
 *
 * AÑADIR o REEMPLAZAR la guía de un proyecto a partir de un .md o .txt:
 *   npm run guide -- <archivo.md|.txt> <id-del-proyecto> [opciones]
 *
 *     --id <nombre>            Nombre de la guía (por defecto, el id del proyecto)
 *     --title "<texto>"        Título del popup (también vale `title:` en el frontmatter del .md)
 *     --window-title "<texto>" Texto de la barra de la ventana
 *
 *   1. Lee el archivo. Un .txt se convierte a Markdown respetando sus saltos de línea.
 *   2. Guarda el texto en src/data/guides/<id>.ts (si ya existe, lo sobrescribe).
 *   3. Pone `guide: '<id>'` en el proyecto, en src/data/projects.ts.
 *   Después el archivo original ya no hace falta.
 *
 * QUITAR la guía de un proyecto:
 *   npm run guide:remove -- <id-del-proyecto>
 *
 *   1. Quita `guide` del proyecto en src/data/projects.ts (desaparece el botón "Cómo usar").
 *   2. Borra src/data/guides/<id>.ts si ningún otro proyecto la usa.
 *
 * En ambos casos, --dry-run muestra lo que haría sin tocar nada.
 */
import { existsSync } from 'node:fs';
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

const ROOT = path.resolve(import.meta.dirname, '..');
const GUIDES_DIR = path.join(ROOT, 'src', 'data', 'guides');
const PROJECTS_FILE = path.join(ROOT, 'src', 'data', 'projects.ts');
const EXTENSIONS = new Set(['.md', '.markdown', '.txt']);

const rel = (p: string) => path.relative(ROOT, p).split(path.sep).join('/');
const guidePath = (guideId: string) => path.join(GUIDES_DIR, `${guideId}.ts`);

function fail(message: string): never {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Lectura y conversión del archivo de texto
// ---------------------------------------------------------------------------

/** Lee bytes como UTF-8; si no lo son (p. ej. un .txt "ANSI" del Bloc de notas), como Windows-1252. */
function decode(bytes: Uint8Array): string {
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {
    return new TextDecoder('windows-1252').decode(bytes);
  }
}

/** Texto plano → Markdown: respeta los saltos de línea simples. */
const plainTextToMarkdown = (text: string) => text.replace(/([^\n])\n(?=[^\n])/g, '$1  \n');

/** Separa el frontmatter (--- clave: valor ---) del cuerpo de un .md. */
function splitFrontmatter(text: string): { meta: Record<string, string>; body: string } {
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(text);
  if (!match) return { meta: {}, body: text };
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const kv = /^([A-Za-z][\w-]*)\s*:\s*(.*)$/.exec(line.trim());
    if (kv) meta[kv[1]] = kv[2].replace(/^(['"])(.*)\1$/, '$2');
  }
  return { meta, body: text.slice(match[0].length) };
}

// ---------------------------------------------------------------------------
// Generación del módulo src/data/guides/<id>.ts
// ---------------------------------------------------------------------------

/** Escapa un texto para meterlo en un template literal de JS (`...`). */
const toTemplateLiteral = (text: string) => text.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const quote = (text: string) => `'${text.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

interface GuideData {
  title?: string;
  windowTitle?: string;
  body: string;
}

function guideModule(guideId: string, sourceName: string, guide: GuideData): string {
  const lines = [
    `// Guía "Cómo usar" (${guideId}). Creada con \`npm run guide\` desde ${sourceName}.`,
    '// Puedes editar el texto aquí mismo: es Markdown normal.',
    "import type { Guide } from './_types';",
    '',
    'export default {',
  ];
  if (guide.title) lines.push(`  title: ${quote(guide.title)},`);
  if (guide.windowTitle) lines.push(`  windowTitle: ${quote(guide.windowTitle)},`);
  lines.push(`  body: \`\n${toTemplateLiteral(guide.body)}\n\`,`, '} satisfies Guide;', '');
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Edición de src/data/projects.ts
// ---------------------------------------------------------------------------

const GUIDE_LINE = /\n {4}guide: '([^']*)'[^\n]*/;

/** Contenido de projects.ts con saltos de línea normalizados, y cómo volver a guardarlo. */
async function loadProjects() {
  const source = await readFile(PROJECTS_FILE, 'utf8');
  const eol = source.includes('\r\n') ? '\r\n' : '\n';
  const text = source.replace(/\r\n/g, '\n');
  return {
    text,
    ids: [...text.matchAll(/^ {4}id: '([^']+)',/gm)].map((m) => m[1]),
    save: (newText: string) => writeFile(PROJECTS_FILE, newText.replace(/\n/g, eol), 'utf8'),
  };
}

/** Posición del objeto `{ id: '<projectId>', ... }` dentro de PROJECTS. */
function projectBlock(text: string, projectId: string): { start: number; end: number } | null {
  const listStart = text.indexOf('export const PROJECTS');
  const idAt = listStart === -1 ? -1 : text.indexOf(`id: '${projectId}',`, listStart);
  if (idAt === -1) return null;
  return { start: text.lastIndexOf('\n  {', idAt), end: text.indexOf('\n  },', idAt) };
}

/** Aplica `edit` al texto del objeto del proyecto y devuelve el archivo completo. */
function editProject(text: string, projectId: string, edit: (block: string) => string): string {
  const pos = projectBlock(text, projectId);
  if (!pos) fail(`No pude localizar el proyecto "${projectId}" dentro de PROJECTS en projects.ts.`);
  return text.slice(0, pos.start) + edit(text.slice(pos.start, pos.end)) + text.slice(pos.end);
}

function projectGuide(text: string, projectId: string): string | undefined {
  const pos = projectBlock(text, projectId);
  return pos ? GUIDE_LINE.exec(text.slice(pos.start, pos.end))?.[1] : undefined;
}

function assertProject(ids: string[], projectId: string) {
  if (!ids.includes(projectId)) fail(`No hay ningún proyecto con id "${projectId}". Proyectos: ${ids.join(', ')}`);
}

// ---------------------------------------------------------------------------
// Comandos
// ---------------------------------------------------------------------------

async function addGuide(fileArg: string, projectId: string, opts: { id?: string; title?: string; windowTitle?: string; dryRun: boolean }) {
  const filePath = path.resolve(process.cwd(), fileArg);
  const ext = path.extname(filePath).toLowerCase();
  if (!existsSync(filePath)) fail(`No existe el archivo: ${filePath}`);
  if (!EXTENSIONS.has(ext)) fail(`Solo se aceptan archivos .md o .txt (recibí "${ext || 'sin extensión'}").`);

  const projects = await loadProjects();
  assertProject(projects.ids, projectId);

  const guideId = opts.id ?? projectId;
  if (!/^[a-z0-9][a-z0-9-]*$/.test(guideId)) fail(`El nombre de la guía "${guideId}" solo puede tener a-z, 0-9 y guiones.`);

  const raw = decode(await readFile(filePath)).replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  const { meta, body } = ext === '.txt' ? { meta: {}, body: plainTextToMarkdown(raw) } : splitFrontmatter(raw);
  if (!body.trim()) fail('El archivo está vacío.');

  const guide: GuideData = {
    title: opts.title ?? meta.title,
    windowTitle: opts.windowTitle ?? meta.windowTitle,
    body: body.trim(),
  };
  const guideFile = guidePath(guideId);
  const overwrites = existsSync(guideFile);
  const previous = projectGuide(projects.text, projectId);
  const line = `\n    guide: '${guideId}', // → src/data/guides/${guideId}.ts`;
  const newProjects = editProject(projects.text, projectId, (block) =>
    GUIDE_LINE.test(block) ? block.replace(GUIDE_LINE, line) : block + line,
  );
  const moduleSource = guideModule(guideId, path.basename(filePath), guide);

  if (opts.dryRun) {
    console.log(`\n[dry-run] Escribiría ${rel(guideFile)}${overwrites ? ' (sobrescribiendo)' : ''}:\n\n${moduleSource}`);
    console.log(`[dry-run] Y pondría guide: '${guideId}' en el proyecto "${projectId}".\n`);
    return;
  }

  await writeFile(guideFile, moduleSource, 'utf8');
  await projects.save(newProjects);

  const notes = [
    `· Texto guardado en   ${rel(guideFile)}${overwrites ? '  (sobrescrita)' : ''}`,
    guide.title && `· Título             ${guide.title}`,
    `· Proyecto "${projectId}" → guide: '${guideId}' en ${rel(PROJECTS_FILE)}`,
    previous && previous !== guideId &&
      `· Antes usaba la guía "${previous}": ${rel(guidePath(previous))} quedó sin usar (bórrala si no la quieres)`,
  ].filter(Boolean);

  console.log(`\n✔ Guía "${guideId}" ${overwrites ? 'reemplazada' : 'lista'}\n  ${notes.join('\n  ')}\n`);
  console.log(`  Ya puedes borrar ${filePath} si no lo necesitas.\n`);
}

async function removeGuide(projectId: string, opts: { dryRun: boolean }) {
  const projects = await loadProjects();
  assertProject(projects.ids, projectId);

  const guideId = projectGuide(projects.text, projectId);
  if (!guideId) {
    console.log(`\nℹ El proyecto "${projectId}" no tiene guía. No hay nada que quitar.\n`);
    return;
  }

  const newProjects = editProject(projects.text, projectId, (block) => block.replace(GUIDE_LINE, ''));
  const stillUsedBy = projects.ids.filter((id) => id !== projectId && projectGuide(newProjects, id) === guideId);
  const guideFile = guidePath(guideId);
  const deleteFile = stillUsedBy.length === 0 && existsSync(guideFile);

  if (opts.dryRun) {
    console.log(`\n[dry-run] Quitaría guide: '${guideId}' del proyecto "${projectId}".`);
    console.log(deleteFile ? `[dry-run] Y borraría ${rel(guideFile)}.\n` : `[dry-run] Y conservaría ${rel(guideFile)}.\n`);
    return;
  }

  await projects.save(newProjects);
  if (deleteFile) await rm(guideFile);

  const notes = [
    `· Proyecto "${projectId}" ya no tiene guide en ${rel(PROJECTS_FILE)} (sin botón "Cómo usar")`,
    deleteFile && `· Borrado ${rel(guideFile)}`,
    stillUsedBy.length > 0 && `· Se conserva ${rel(guideFile)}: también la usa ${stillUsedBy.join(', ')}`,
  ].filter(Boolean);

  console.log(`\n✔ Guía "${guideId}" quitada\n  ${notes.join('\n  ')}\n`);
}

// ---------------------------------------------------------------------------

const USAGE = `Uso:
    npm run guide -- <archivo.md|.txt> <id-del-proyecto> [--title "..."] [--window-title "..."] [--id nombre]
    npm run guide:remove -- <id-del-proyecto>`;

function readArgs() {
  try {
    return parseArgs({
      allowPositionals: true,
      options: {
        remove: { type: 'string' },
        id: { type: 'string' },
        title: { type: 'string' },
        'window-title': { type: 'string' },
        'dry-run': { type: 'boolean', default: false },
      },
    });
  } catch (error) {
    fail(`${(error as Error).message}\n\n  ${USAGE}`);
  }
}

const { values, positionals } = readArgs();

if (values.remove !== undefined) {
  if (!values.remove) fail(USAGE);
  await removeGuide(values.remove, { dryRun: values['dry-run'] });
} else {
  const [fileArg, projectId] = positionals;
  if (!fileArg || !projectId) fail(USAGE);
  await addGuide(fileArg, projectId, {
    id: values.id,
    title: values.title,
    windowTitle: values['window-title'],
    dryRun: values['dry-run'],
  });
}
