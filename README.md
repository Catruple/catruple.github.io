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

## Guías "Cómo usar"

Cada proyecto puede tener una guía que se abre con el botón **Cómo usar** de su tarjeta.
Se crean desde cualquier `.md` o `.txt` con un comando:

```sh
npm run guide -- "C:/ruta/a/mi-guia.md" autoclicker
```

Eso guarda el texto en `src/data/guides/autoclicker.ts` y pone `guide: 'autoclicker'` en el proyecto
de `src/data/projects.ts`. Después el archivo original se puede borrar.
Si el proyecto ya tenía guía, se sobrescribe (se puede recuperar desde git).

| Opción | Para qué |
|---|---|
| `--title "..."` | Título del popup (en un `.md` también vale `title:` en el frontmatter) |
| `--window-title "..."` | Texto de la barra de la ventana |
| `--id nombre` | Nombre de la guía, si no quieres que sea el id del proyecto |
| `--dry-run` | Muestra lo que haría sin tocar nada |

Para **quitar** la guía de un proyecto (desaparece su botón "Cómo usar"):

```sh
npm run guide:remove -- autoclicker
```

Quita `guide` del proyecto y borra `src/data/guides/<guía>.ts` si ningún otro proyecto la usa.
También admite `--dry-run`.

- `.md`: Markdown completo (títulos `##`, listas, **negrita**, enlaces, código, citas `>`, tablas).
- `.txt`: se respetan los saltos de línea y las líneas en blanco separan párrafos.
- El texto guardado en `src/data/guides/*.ts` es Markdown normal y se puede editar ahí mismo.
- Si un proyecto apunta a una guía que no existe, el build falla con un mensaje claro.

## Dónde está cada cosa

```
src/
├─ config/site.ts            Datos del sitio (título, GitHub, locale, anclas)
├─ content.config.ts         Registra las guías para convertir su Markdown a HTML
├─ data/                     CONTENIDO editable, sin HTML
│  ├─ projects.ts            Proyectos del repositorio y sus enlaces  ← aquí se conectan los links
│  ├─ panel.ts               Pestañas del "Panel de control"
│  ├─ categories.ts          Categorías, filtros y menú superior
│  ├─ themes.ts              Colores de "Pantalla"
│  ├─ footer.ts              Pendientes, avance y cajetín
│  ├─ guides/                Textos "Cómo usar" (uno por archivo) — ver sección de guías
│  ├─ tape.ts                Mensajes de la cinta de obra
│  └─ blueprint.ts           Piezas y posiciones del fondo
├─ lib/                      Utilidades puras (sin DOM)
│  ├─ pixel-icons.ts         Íconos pixel-art → SVG
│  ├─ doodles.ts             Trazos de los garabatos
│  ├─ placement.ts           Posicionamiento absoluto del fondo
│  ├─ theme-css.ts           Genera las variables CSS de cada tema
│  ├─ guides-loader.ts       Convierte el Markdown de las guías a HTML en el build
│  └─ paths.ts               withBase() para rutas internas
├─ scripts/                  Lógica de navegador compartida
│  ├─ catalog-store.ts       Estado de filtro + búsqueda (pub/sub)
│  ├─ modal.ts               openModal() y cierre de todas las ventanas modales
│  ├─ alert-dialog.ts        openAlert()
│  └─ highlight-card.ts      Scroll + parpadeo de una tarjeta
├─ styles/                   tokens.css y global.css (solo lo global)
├─ layouts/
│  ├─ BaseLayout.astro       <html>, <head>, fuentes, tema guardado
│  └─ SiteLayout.astro       Fondo + menú + pie + diálogo
├─ components/
│  ├─ ui/                    Piezas reutilizables: Window, Button, PixelIcon, Modal,
│  │                         Prose, Container, Annotation, AlertDialog, DoodleSprite
│  ├─ header/                MenuBar = Brand + MainNav + SearchBox +
│  │                         ThemeSwitcher + LoginButton + Clock
│  ├─ hero/                  Hero, ControlPanel, PanelRow
│  ├─ catalog/               CatalogSection, FilterChips, ProjectCard, SketchCard, GuideDialog
│  ├─ footer/                SiteFooter, TodoNote, ProgressWindow, TitleBlock
│  ├─ decor/                 ConstructionTape
│  └─ background/            BlueprintBackground y sus piezas (Sketch*, Doodle…)
└─ pages/index.astro         Compone la portada
tools/guide.ts               Scripts `npm run guide` y `npm run guide:remove` (solo local)
```

Cada componente trae su propio HTML, CSS (con scope) y, si lo necesita, su `<script>`.
Los componentes no se llaman entre sí: se comunican a través de `scripts/catalog-store.ts`.
