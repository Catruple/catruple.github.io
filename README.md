# Catruple.com

Sitio estático hecho con [Astro](https://astro.build).

```sh
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera dist/
npm run check    # revisión de tipos
```

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila con Astro y publica `dist/`
en GitHub Pages (https://odruu.github.io/Catruple/). En el repositorio, **Settings → Pages → Source**
debe estar en **GitHub Actions**; si está en "Deploy from a branch", GitHub intenta compilar con Jekyll y falla.

El sitio vive bajo `/Catruple/` (`base` en `astro.config.mjs`). Para enlazar archivos de `public/`
o páginas internas usa `withBase()` de `src/lib/paths.ts`, nunca rutas que empiecen por `/`.

## Dónde está cada cosa

```
src/
├─ config/site.ts            Datos del sitio (título, GitHub, locale, anclas)
├─ data/                     CONTENIDO editable, sin HTML
│  ├─ projects.ts            Proyectos del repositorio y sus enlaces  ← aquí se conectan los links
│  ├─ panel.ts               Pestañas del "Panel de control"
│  ├─ categories.ts          Categorías, filtros y menú superior
│  ├─ themes.ts              Colores de "Pantalla"
│  ├─ footer.ts              Pendientes, avance y cajetín
│  ├─ tape.ts                Mensajes de la cinta de obra
│  └─ blueprint.ts           Piezas y posiciones del fondo
├─ lib/                      Utilidades puras (sin DOM)
│  ├─ pixel-icons.ts         Íconos pixel-art → SVG
│  ├─ doodles.ts             Trazos de los garabatos
│  ├─ placement.ts           Posicionamiento absoluto del fondo
│  └─ theme-css.ts           Genera las variables CSS de cada tema
├─ scripts/                  Lógica de navegador compartida
│  ├─ catalog-store.ts       Estado de filtro + búsqueda (pub/sub)
│  ├─ alert-dialog.ts        openAlert()
│  └─ highlight-card.ts      Scroll + parpadeo de una tarjeta
├─ styles/                   tokens.css y global.css (solo lo global)
├─ layouts/
│  ├─ BaseLayout.astro       <html>, <head>, fuentes, tema guardado
│  └─ SiteLayout.astro       Fondo + menú + pie + diálogo
├─ components/
│  ├─ ui/                    Piezas reutilizables: Window, Button, PixelIcon,
│  │                         Container, Annotation, AlertDialog, DoodleSprite
│  ├─ header/                MenuBar = Brand + MainNav + SearchBox +
│  │                         ThemeSwitcher + LoginButton + Clock
│  ├─ hero/                  Hero, ControlPanel, PanelRow
│  ├─ catalog/               CatalogSection, FilterChips, ProjectCard, SketchCard
│  ├─ footer/                SiteFooter, TodoNote, ProgressWindow, TitleBlock
│  ├─ decor/                 ConstructionTape
│  └─ background/            BlueprintBackground y sus piezas (Sketch*, Doodle…)
└─ pages/index.astro         Compone la portada
```

Cada componente trae su propio HTML, CSS (con scope) y, si lo necesita, su `<script>`.
Los componentes no se llaman entre sí: se comunican a través de `scripts/catalog-store.ts`.
