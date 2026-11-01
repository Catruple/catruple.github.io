import type { ProjectCategory } from './categories';
import type { IconName } from '@/lib/pixel-icons';

/**
 * =====================================================
 * EDITA AQUÍ LOS PROYECTOS Y SUS ENLACES
 * Qué hace el botón de cada tarjeta, por orden de prioridad:
 *   1. `url`     → abre el enlace en una pestaña nueva.
 *   2. `command` → muestra un popup con el comando para copiar.
 *   3. nada      → avisa que aún no hay enlace.
 *
 * `guide` añade además un botón "Cómo usar" con la guía de src/data/guides/<guide>.ts.
 * Para crearla desde un .md o .txt:  npm run guide -- <archivo> <id-del-proyecto>
 * =====================================================
 */

/** Comando de terminal que se muestra en el popup de un proyecto. */
export interface ProjectCommand {
  /** Instrucción que aparece encima del comando. */
  intro: string;
  code: string;
  /** Enlace a la fuente oficial del comando. */
  source?: { href: string; text: string };
}

export interface Project {
  id: string;
  category: ProjectCategory;
  /** Título de la ventana de la tarjeta (p. ej. "Sistema.app"). */
  windowTitle: string;
  icon: IconName;
  title: string;
  description: string;
  /** Texto pequeño del pie de la tarjeta. */
  meta: string;
  /** Texto del botón. */
  cta: string;
  url: string;
  command?: ProjectCommand;
  /** Guía "Cómo usar": nombre del archivo en src/data/guides, sin .ts. */
  guide?: string;
  /** Muestra el sello "WIP". */
  wip?: boolean;
  /** Autor del proyecto: usuario de GitHub, enlazado a su perfil. */
  author?: string;
}

export const PROJECTS = [
  {
    id: 'rufus',
    category: 'sistema',
    windowTitle: 'Rufus.exe',
    icon: 'usb',
    title: 'Rufus · USB de arranque',
    description:
      "Prepara un USB de instalación de Windows o Linux desde una imagen ISO, con opciones para equipos modernos y antiguos.",
    meta: 'v4.15',
    cta: 'Descargar',
    url: 'https://github.com/pbatard/rufus/releases/tag/v4.15',
    guide: 'rufus',
  },
  {
    id: 'powertoys',
    category: 'utilidad',
    windowTitle: 'PowerToys.exe',
    icon: 'powertoys',
    title: 'Microsoft PowerToys',
    description:
      "Organiza tus ventanas, renombra archivos en grupo y ajusta atajos de teclado con las herramientas de Microsoft para Windows.",
    meta: 'v0.102.2933.0',
    cta: 'Descargar',
    url: 'https://github.com/microsoft/PowerToys/releases/tag/v0.102.2933.0',
    guide: 'powertoys',
  },
  {
    id: 'debloater',
    category: 'script',
    windowTitle: 'Script.ps1',
    icon: 'clean',
    title: 'Limpiador de Windows',
    description:
      "Limpia aplicaciones preinstaladas y ajusta Windows desde una herramienta de PowerShell que reúne instalación de programas y mantenimiento del sistema.",
    meta: 'v26.10.07',
    cta: 'Descargar',
    url: 'https://github.com/ChrisTitusTech/winutil/releases/tag/26.10.07',
    command: {
      intro: 'Abre PowerShell como administrador y ejecuta el comando de la Windows Utility de Chris Titus:',
      code: 'irm christitus.com/win | iex',
      source: { href: 'https://christitus.com/windows-tool/', text: 'Guía oficial' },
    },
    guide: 'debloater', // → src/data/guides/debloater.ts
  },
  {
    id: '7zip',
    category: 'utilidad',
    windowTitle: '7zip.exe',
    icon: 'archive',
    title: 'Compresor 7-Zip',
    description:
      "Comprime archivos para ahorrar espacio y abre los formatos más habituales desde una interfaz sencilla integrada con el Explorador de Windows.",
    meta: 'v26.05',
    cta: 'Descargar',
    url: 'https://github.com/ip7z/7zip/releases/tag/26.05',
    guide: '7zip',
  },
  {
    id: 'obs',
    category: 'utilidad',
    windowTitle: 'OBS.exe',
    icon: 'obs',
    title: 'OBS Studio',
    description:
      "Graba tu pantalla o transmite en directo combinando juegos, cámara y audio en escenas que puedes preparar y cambiar fácilmente.",
    meta: 'v33.0.0',
    cta: 'Descargar',
    url: 'https://github.com/obsproject/obs-studio/releases/tag/33.0.0',
    guide: 'obs',
  },
  {
    id: 'vlc',
    category: 'utilidad',
    windowTitle: 'VLC.exe',
    icon: 'vlc',
    title: 'Reproductor VLC',
    description:
      "Reproduce vídeos y música de múltiples formatos, elige pistas de audio y añade subtítulos sin instalar paquetes adicionales de códecs.",
    meta: 'v3.0.24',
    cta: 'Descargar',
    url: 'https://www.videolan.org/vlc/',
    guide: 'vlc',
  },
  {
    id: 'sharex',
    category: 'utilidad',
    windowTitle: 'ShareX.exe',
    icon: 'sharex',
    title: 'Capturas con ShareX',
    description: "Captura cualquier zona de la pantalla y prepara imágenes para compartir, con herramientas para anotar, grabar y extraer texto.",
    meta: 'v21.0.0',
    cta: 'Descargar',
    url: 'https://github.com/ShareX/ShareX/releases/tag/v21.0.0',
    guide: 'sharex',
  },
  {
    id: 'localsend',
    category: 'utilidad',
    windowTitle: 'LocalSend.exe',
    icon: 'localsend',
    title: 'Envía archivos con LocalSend',
    description: "Pasa fotos, vídeos y documentos entre tu PC y tu móvil por la misma red local, sin cuentas ni nube.",
    meta: 'v1.18.2',
    cta: 'Descargar',
    url: 'https://github.com/localsend/localsend/releases/tag/v1.18.2',
    guide: 'localsend',
  },
  {
    id: 'keepassxc',
    category: 'utilidad',
    windowTitle: 'KeePassXC.exe',
    icon: 'keepassxc',
    title: 'Contraseñas con KeePassXC',
    description: "Guarda tus contraseñas en una bóveda cifrada y genera claves distintas para cada cuenta, manteniendo el archivo bajo tu control.",
    meta: 'v2.8.0',
    cta: 'Descargar',
    url: 'https://github.com/keepassxreboot/keepassxc/releases/tag/2.8.0',
    guide: 'keepassxc',
  },
  {
    id: 'vscodium',
    category: 'web',
    windowTitle: 'VSCodium.exe',
    icon: 'vscodium',
    title: 'Editor de código VSCodium',
    description: "Escribe código y organiza tus proyectos en un editor basado en VS Code, con terminal integrada y extensiones desde Open VSX.",
    meta: 'v1.143.17183',
    cta: 'Descargar',
    url: 'https://github.com/VSCodium/vscodium/releases/tag/1.143.17183',
    guide: 'vscodium',
  },
  {
  "id": "ventoy",
  "category": "sistema",
  "windowTitle": "ventoy.exe",
  "icon": "ventoy",
  "title": "USB multiarranque Ventoy",
  "description": "Lleva varias imágenes de instalación en un solo USB y elige cuál arrancar, sin volver a preparar la memoria cada vez.",
  "meta": "v1.1.18",
  "cta": "Descargar",
  "url": "https://github.com/ventoy/Ventoy/releases/tag/v1.1.18",
  "guide": "ventoy"
},
  {
  "id": "etcher",
  "category": "sistema",
  "windowTitle": "etcher.exe",
  "icon": "etcher",
  "title": "Graba imágenes con Etcher",
  "description": "Graba imágenes de sistemas en tarjetas SD o memorias USB con un proceso guiado que comprueba el resultado al terminar.",
  "meta": "v2.1.9",
  "cta": "Descargar",
  "url": "https://github.com/balena-io/etcher/releases/tag/v2.1.9",
  "guide": "etcher"
},
  {
  "id": "bcuninstaller",
  "category": "sistema",
  "windowTitle": "bcuninstaller.exe",
  "icon": "bcuninstaller",
  "title": "Desinstala con BCUninstaller",
  "description": "Quita varios programas de Windows en una sola sesión y revisa los archivos y entradas que puedan dejar después de desinstalar.",
  "meta": "v6.3",
  "cta": "Descargar",
  "url": "https://github.com/Klocman/Bulk-Crap-Uninstaller/releases/tag/v6.3",
  "guide": "bcuninstaller"
},
  {
  "id": "hardwaremonitor",
  "category": "sistema",
  "windowTitle": "hardwaremonitor.exe",
  "icon": "hardwaremonitor",
  "title": "Temperaturas y hardware",
  "description": "Observa temperaturas, ventiladores y carga de los componentes para entender cómo responde tu equipo mientras juegas o realizas tareas exigentes.",
  "meta": "v0.9.6",
  "cta": "Descargar",
  "url": "https://github.com/LibreHardwareMonitor/LibreHardwareMonitor/releases/tag/v0.9.6",
  "guide": "hardwaremonitor"
},
  {
  "id": "sophia",
  "category": "script",
  "windowTitle": "sophia.exe",
  "icon": "sophia",
  "title": "Ajusta Windows con Sophia",
  "description": "Elige qué ajustes de privacidad, interfaz y comportamiento aplicar a Windows mediante funciones de PowerShell que puedes revisar antes de ejecutar.",
  "meta": "v8.0.0",
  "cta": "Descargar",
  "url": "https://github.com/farag2/Sophia-Script-for-Windows/releases/tag/8.0.0",
  "guide": "sophia"
},
  {
  "id": "win11debloat",
  "category": "script",
  "windowTitle": "win11debloat.exe",
  "icon": "win11debloat",
  "title": "Limpieza con Win11Debloat",
  "description": "Retira aplicaciones preinstaladas y modifica opciones de Windows con un script que permite revisar los cambios antes de aplicarlos.",
  "meta": "v2026.08.24",
  "cta": "Descargar",
  "url": "https://github.com/Raphire/Win11Debloat/releases/tag/2026.08.24",
  "guide": "win11debloat"
},
  {
  "id": "powershell",
  "category": "script",
  "windowTitle": "powershell.exe",
  "icon": "powershell",
  "title": "PowerShell 7",
  "description": "Automatiza tareas repetitivas, administra archivos y combina comandos en scripts con una consola que funciona en Windows, Linux y macOS.",
  "meta": "v7.6.9",
  "cta": "Descargar",
  "url": "https://github.com/PowerShell/PowerShell/releases/tag/v7.6.9",
  "guide": "powershell"
},
  {
  "id": "scriptanalyzer",
  "category": "script",
  "windowTitle": "scriptanalyzer.exe",
  "icon": "scriptanalyzer",
  "title": "Revisa scripts de PowerShell",
  "description": "Revisa tus scripts de PowerShell para encontrar errores habituales y problemas de estilo antes de compartirlos o ejecutarlos en otros equipos.",
  "meta": "v1.25.0",
  "cta": "Ver versión",
  "url": "https://github.com/PowerShell/PSScriptAnalyzer/releases/tag/1.25.0",
  "guide": "scriptanalyzer"
},
  {
  "id": "vite",
  "category": "web",
  "windowTitle": "vite.exe",
  "icon": "vite",
  "title": "Proyectos web con Vite",
  "description": "Empieza un proyecto frontend con una plantilla y ve tus cambios al instante, con un proceso de compilación listo para producción.",
  "meta": "v8.3.5",
  "cta": "Ver versión",
  "url": "https://github.com/vitejs/vite/releases/tag/v8.3.5",
  "guide": "vite"
},
  {
  "id": "astro",
  "category": "web",
  "windowTitle": "astro.exe",
  "icon": "astro",
  "title": "Sitios rápidos con Astro",
  "description": "Construye blogs, portafolios y páginas de contenido con componentes reutilizables y añade interactividad solo donde tu sitio realmente la necesita.",
  "meta": "v7.4.2",
  "cta": "Ver versión",
  "url": "https://github.com/withastro/astro/releases/tag/astro@7.4.2",
  "guide": "astro"
},
  {
  "id": "bruno",
  "category": "web",
  "windowTitle": "bruno.exe",
  "icon": "bruno",
  "title": "Prueba APIs con Bruno",
  "description": "Prepara peticiones HTTP, comprueba respuestas y organiza tus pruebas de APIs en colecciones locales que puedes versionar junto a tu proyecto.",
  "meta": "v4.3.0",
  "cta": "Descargar",
  "url": "https://github.com/usebruno/bruno/releases/tag/v4.3.0",
  "guide": "bruno"
},
  {
  "id": "hoppscotch",
  "category": "web",
  "windowTitle": "hoppscotch.exe",
  "icon": "hoppscotch",
  "title": "APIs con Hoppscotch",
  "description": "Explora tus APIs y comprueba sus respuestas desde un cliente comunitario con soporte para distintos protocolos y variables de entorno.",
  "meta": "v2026.9.0",
  "cta": "Descargar",
  "url": "https://github.com/hoppscotch/hoppscotch/releases/tag/2026.9.0",
  "guide": "hoppscotch"
},
  {
  "id": "godot",
  "category": "labs",
  "windowTitle": "godot.exe",
  "icon": "godot",
  "title": "Crea juegos con Godot",
  "description": "Crea juegos en dos o tres dimensiones combinando escenas, recursos y scripts en un motor que puedes usar sin pagar regalías.",
  "meta": "v4.7.2-stable",
  "cta": "Descargar",
  "url": "https://github.com/godotengine/godot/releases/tag/4.7.2-stable",
  "guide": "godot"
},
  {
  "id": "blender",
  "category": "labs",
  "windowTitle": "blender.exe",
  "icon": "blender",
  "title": "Modelado 3D con Blender",
  "description": "Da forma a modelos y escenas en tres dimensiones, anima tus ideas y prepara imágenes o vídeos desde una misma suite creativa.",
  "meta": "v5.2.3",
  "cta": "Descargar",
  "url": "https://download.blender.org/release/Blender5.2/",
  "guide": "blender"
},
  {
  "id": "audacity",
  "category": "labs",
  "windowTitle": "audacity.exe",
  "icon": "audacity",
  "title": "Audio con Audacity",
  "description": "Graba voz o importa audio para recortar, mezclar y aplicar efectos, conservando un proyecto editable antes de exportar el resultado.",
  "meta": "v4.0.1",
  "cta": "Descargar",
  "url": "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.1",
  "guide": "audacity"
},
  {
  "id": "shotcut",
  "category": "labs",
  "windowTitle": "shotcut.exe",
  "icon": "shotcut",
  "title": "Edición de vídeo Shotcut",
  "description": "Monta tus vídeos en una línea de tiempo, combina pistas de audio y añade filtros antes de exportar tu proyecto terminado.",
  "meta": "v26.9.27",
  "cta": "Descargar",
  "url": "https://github.com/mltframework/shotcut/releases/tag/v26.9.27",
  "guide": "shotcut"
},
  {
  "id": "drawio",
  "category": "labs",
  "windowTitle": "drawio.exe",
  "icon": "drawio",
  "title": "Diagramas con draw.io",
  "description": "Convierte ideas y procesos en diagramas con formas, conectores y plantillas, guardando tus archivos localmente desde una aplicación de escritorio.",
  "meta": "v32.6.1",
  "cta": "Descargar",
  "url": "https://github.com/jgraph/drawio-desktop/releases/tag/v32.6.1",
  "guide": "drawio"
},
  {
  "id": "terminal",
  "category": "config",
  "windowTitle": "terminal.exe",
  "icon": "terminal",
  "title": "Windows Terminal",
  "description": "Reúne tus consolas en una sola ventana y organiza sesiones con pestañas, paneles y perfiles adaptados a tu forma de trabajar.",
  "meta": "v1.25.2733.0",
  "cta": "Descargar",
  "url": "https://github.com/microsoft/terminal/releases/tag/v1.25.2733.0",
  "guide": "terminal"
},
  {
  "id": "starship",
  "category": "config",
  "windowTitle": "starship.exe",
  "icon": "starship",
  "title": "Personaliza con Starship",
  "description": "Añade a tu terminal un prompt que muestra información del proyecto, estado de Git y herramientas detectadas mientras cambias entre carpetas.",
  "meta": "v1.27.0",
  "cta": "Descargar",
  "url": "https://github.com/starship/starship/releases/tag/v1.27.0",
  "guide": "starship"
},
  {
  "id": "ohmyposh",
  "category": "config",
  "windowTitle": "ohmyposh.exe",
  "icon": "ohmyposh",
  "title": "Temas con Oh My Posh",
  "description": "Dale a tu consola un prompt personalizado con temas y segmentos que muestran el contexto del proyecto y las herramientas que utilizas.",
  "meta": "v31.9.1",
  "cta": "Descargar",
  "url": "https://github.com/JanDeDobbeleer/oh-my-posh/releases/tag/v31.9.1",
  "guide": "ohmyposh"
},
  {
  "id": "windhawk",
  "category": "config",
  "windowTitle": "windhawk.exe",
  "icon": "windhawk",
  "title": "Personaliza Windows con Windhawk",
  "description": "Personaliza partes concretas de Windows mediante mods y ajusta su comportamiento, revisando la compatibilidad y el código antes de instalarlos.",
  "meta": "v1.7.3",
  "cta": "Descargar",
  "url": "https://github.com/ramensoftware/windhawk/releases/tag/v1.7.3",
  "guide": "windhawk"
},
  {
  "id": "wezterm",
  "category": "config",
  "windowTitle": "wezterm.exe",
  "icon": "wezterm",
  "title": "Terminal WezTerm",
  "description": "Organiza tu trabajo en pestañas y paneles dentro de una terminal multiplataforma, con colores, fuente y atajos configurables mediante Lua.",
  "meta": "v20240203-110809-5046fc22",
  "cta": "Descargar",
  "url": "https://github.com/wezterm/wezterm/releases/tag/20240203-110809-5046fc22",
  "guide": "wezterm"
},
  {
  "id": "photocraft",
  "category": "labs",
  "windowTitle": "photocraft.exe",
  "icon": "photocraft",
  "title": "Imágenes con PhotoCraft",
  "description": "Edita imágenes con capas, máscaras y pinceles en una aplicación nativa de ArtCraft que trabaja con tus archivos sin conexión.",
  "meta": "v0.7.0 · Alpha",
  "cta": "Descargar",
  "url": "https://github.com/storytold/photocraft/releases/tag/v0.7.0",
  "guide": "photocraft"
},
  {
  "id": "pdfcraft",
  "category": "utilidad",
  "windowTitle": "pdfcraft.exe",
  "icon": "pdfcraft",
  "title": "PDF con PdfCraft",
  "description": "Lee, combina y divide documentos PDF, reorganiza sus páginas y guarda los cambios localmente con esta aplicación de la familia ArtCraft.",
  "meta": "v0.6.0 · Alpha",
  "cta": "Descargar",
  "url": "https://github.com/storytold/pdfcraft/releases/tag/v0.6.0",
  "guide": "pdfcraft"
},
  {
  "id": "figcraft",
  "category": "web",
  "windowTitle": "figcraft.exe",
  "icon": "figcraft",
  "title": "Diseño de interfaces FigCraft",
  "description": "Diseña pantallas y prototipos con frames, componentes y auto layout en una aplicación de ArtCraft que también funciona sin conexión.",
  "meta": "v0.5.1 · Alpha",
  "cta": "Descargar",
  "url": "https://github.com/storytold/figcraft/releases/tag/v0.5.1",
  "guide": "figcraft"
},
  {
  "id": "vectorcraft",
  "category": "labs",
  "windowTitle": "vectorcraft.exe",
  "icon": "vectorcraft",
  "title": "Ilustración con VectorCraft",
  "description": "Crea ilustraciones con formas, curvas y efectos editables en una aplicación nativa de ArtCraft con importación y exportación de formatos vectoriales.",
  "meta": "v0.9.0 · En desarrollo",
  "cta": "Descargar",
  "url": "https://github.com/storytold/vectorcraft/releases/tag/v0.9.0",
  "guide": "vectorcraft"
},
  {
  "id": "filmcraft",
  "category": "labs",
  "windowTitle": "filmcraft.exe",
  "icon": "filmcraft",
  "title": "Vídeo con FilmCraft",
  "description": "Monta vídeos con pistas, cortes y transiciones en el editor nativo de ArtCraft, con herramientas de color, audio y efectos animados.",
  "meta": "v0.6.0 · En desarrollo",
  "cta": "Descargar",
  "url": "https://github.com/storytold/filmcraft/releases/tag/v0.6.0",
  "guide": "filmcraft"
},
  {
  "id": "tutorgebra",
  "category": "labs",
  "windowTitle": "TutorGebra.app",
  "icon": "tutorgebra",
  "title": "TutorGebra · Tutor de geometría",
  "description": "Le pasas un problema en texto o en imagen y lo resuelve mientras te lo explica paso a paso, en un tablero de GeoGebra y con voz.",
  "meta": "Web · Experimental",
  "cta": "Probar",
  "url": "https://tutorgebra.com/",
  "guide": "tutorgebra",
  "author": "ANGELUSD11"
},
] as const satisfies readonly Project[];

export type ProjectId = (typeof PROJECTS)[number]['id'];

/** Los mismos proyectos, tipados con todos los campos opcionales de `Project`. */
export const PROJECT_LIST: readonly Project[] = PROJECTS;

/** id del elemento HTML de la tarjeta de un proyecto. */
export const cardDomId = (id: string) => `card-${id}`;

/** id del popup "Cómo usar" de un proyecto. */
export const guideDomId = (id: string) => `guide-${id}`;
