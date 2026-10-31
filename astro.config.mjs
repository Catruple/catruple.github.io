// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Dominio propio publicado mediante GitHub Pages.
  // Recordatorio: Configurar el registro CNAME y DNS en el repositorio de Github Pages.
  // old_site: "https://catruple.github.io", redirige a https://catruple.com debido a la configuración de CNAME
  site: 'https://catruple.com',
  scopedStyleStrategy: 'class',
});
