import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { guidesLoader } from './lib/guides-loader';
import { GUIDES } from './data/guides';

/**
 * Guías "Cómo usar" de los proyectos (src/data/guides/<id>.ts).
 * El texto se escribe en Markdown y aquí se convierte a HTML en el build.
 */
const guides = defineCollection({
  loader: guidesLoader(GUIDES),
  schema: z.object({
    title: z.string().optional(),
    windowTitle: z.string().optional(),
  }),
});

export const collections = { guides };
