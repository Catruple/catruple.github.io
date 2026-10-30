// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // El sitio se publica en la raíz de la organización en GitHub Pages:
  // https://catruple.github.io/ (repo Catruple/Catruple.github.io).
  // Si algún día se conecta un dominio propio (p. ej. catruple.com),
  // cambia `site` por ese dominio.
  site: 'https://catruple.github.io',

  // 'class' permite pasar `class` a un componente hijo y que los estilos
  // con scope del padre también lo alcancen (p. ej. <Window class="...">).
  scopedStyleStrategy: 'class',
});
