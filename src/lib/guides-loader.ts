import type { Loader } from 'astro/loaders';
import type { Guide } from '../data/guides/_types';

/**
 * Loader de Astro que convierte a HTML el Markdown de cada guía de src/data/guides,
 * con el mismo motor de Markdown del sitio (títulos, listas, código coloreado…).
 */
export function guidesLoader(guides: Record<string, Guide>): Loader {
  return {
    name: 'guides-loader',
    load: async ({ store, parseData, renderMarkdown, generateDigest }) => {
      store.clear();
      for (const [id, guide] of Object.entries(guides)) {
        const { body, ...meta } = guide;
        const data = await parseData({ id, data: meta });
        const rendered = await renderMarkdown(body);
        store.set({ id, data, body, rendered, digest: generateDigest(body) });
      }
    },
  };
}
