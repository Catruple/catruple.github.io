// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // El sitio se publica en GitHub Pages como página de proyecto:
  // https://odruu.github.io/Catruple/
  // Si algún día se conecta un dominio propio (p. ej. catruple.com),
  // cambia `site` por ese dominio y elimina `base`.
  site: 'https://odruu.github.io',
  base: '/Catruple',

  // 'class' permite pasar `class` a un componente hijo y que los estilos
  // con scope del padre también lo alcancen (p. ej. <Window class="...">).
  scopedStyleStrategy: 'class',
});
