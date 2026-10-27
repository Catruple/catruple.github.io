// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://catruple.com',
  // 'class' permite pasar `class` a un componente hijo y que los estilos
  // con scope del padre también lo alcancen (p. ej. <Window class="...">).
  scopedStyleStrategy: 'class',
});
