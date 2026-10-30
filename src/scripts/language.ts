import { legalTranslations } from '@/data/legal-translations';
import { footerTranslations } from '@/data/footer-translations';
import { panelTranslations } from '@/data/panel-translations';
import { artcraftGuides } from '@/data/artcraft';
import { detailTranslations } from '@/data/card-details';
import { catalogText, catalogGuides } from '@/data/catalog-translations';
const translations: Record<string, string> = {
  ...catalogText,
  ...footerTranslations,
  ...legalTranslations,
  ...panelTranslations,
  'Ver más': 'Show more', 'Ver menos': 'Show less', 'Hasta 10 herramientas más': 'Up to 10 more tools',
  'Editor de código VSCodium': 'VSCodium code editor',
  'Escribe código, crea páginas web y trabaja con Git en un editor basado en VS Code, con extensiones desde Open VSX.': 'Write code, build websites and work with Git in a VS Code-based editor, with extensions from Open VSX.', 
  'Contraseñas con KeePassXC': 'Passwords with KeePassXC',
  'Guarda tus contraseñas en una bóveda cifrada, genera claves seguras y mantén el control de tus datos sin cuentas ni suscripciones.': 'Store passwords in an encrypted vault, generate strong passwords and stay in control of your data without accounts or subscriptions.', 
  'Envía archivos con LocalSend': 'Send files with LocalSend',
  'Pasa fotos, vídeos y archivos entre tu PC y tu móvil por la red local, sin cuentas ni subirlos a la nube.': 'Send photos, videos and files between your PC and phone over your local network, without accounts or cloud uploads.', 
  'Capturas con ShareX': 'Screen capture with ShareX',
  'Captura cualquier zona de la pantalla, graba GIF y vídeo o extrae texto de imágenes con OCR.': 'Capture any screen region, record GIFs and video, or extract text from images with OCR.', 
  'Sistemas': 'Systems', 'Utilidades': 'Utilities', 'Repositorio': 'Repository',
  'Deja de pagar.': 'Stop paying.', 'Software': 'software.', 'gratis.': 'Free',
  'HERRAMIENTAS GRATIS · SIN SUSCRIPCIONES': 'FREE TOOLS · NO SUBSCRIPTIONS',
  'A la mierda sus suscripciones. Catruple reúne herramientas gratis y de código abierto para tu PC, con guías y enlaces oficiales.': 'Fuck their subscriptions. Catruple brings together free, open-source tools for your PC, with guides and official links.',
  'PLANO Nº 001 · REV 0.4 · BORRADOR': 'PLAN No. 001 · REV 0.4 · DRAFT',
  'Explorar utilidades': 'Explore tools', 'GitHub oficial': 'Official GitHub', 'empieza por acá': 'start here',
  'Panel de control': 'Control panel', 'Activos': 'Active', 'Populares': 'Popular', 'Nuevos': 'New',
  'Estado: Operativo': 'Status: Operational', 'elementos': 'items', 'casi todo funciona (casi)': 'almost everything works (almost)',
  'HOJA 02 / REPOSITORIO': 'SHEET 02 / REPOSITORY', 'Utilidades & proyectos': 'Utilities & projects',
  'Todo': 'All', 'Sistema': 'System', 'Utilidad': 'Utility', 'Cómo usar': 'How to use', '¿Cómo usar?': 'How to use?', 'Descargar': 'Download', 'Ver versión': 'View release', 'Ver en GitHub': 'View on GitHub', 'Código': 'Code', 'Entendido': 'Got it',
  'Rufus · USB de arranque': 'Rufus · Bootable USB', 'Limpiador de Windows': 'Windows cleaner', 'Compresor 7-Zip': '7-Zip archiver', 'Reproductor VLC': 'VLC media player',
  'Crea un USB de instalación de Windows o Linux a partir de una imagen ISO. Ideal para instalar o reinstalar tu sistema.': 'Create a Windows or Linux installation USB from an ISO image. Ideal for installing or reinstalling your system.',
  'Organiza ventanas, renombra archivos en grupo y personaliza atajos con las utilidades de Microsoft para Windows.': 'Organize windows, rename files in bulk and customize shortcuts with Microsoft’s utilities for Windows.',
  'Quita aplicaciones preinstaladas y componentes que no necesitas con una herramienta basada en PowerShell.': 'Remove preinstalled apps and components you don’t need with a PowerShell-based tool.',
  'Comprime archivos y extrae formatos como ZIP, RAR y 7z con una herramienta gratuita y de código abierto.': 'Compress files and extract formats such as ZIP, RAR and 7z with a free, open-source tool.',
  'Graba tu pantalla, captura partidas y transmite en directo con escenas, cámara y audio en una sola herramienta.': 'Record your screen, capture gameplay and stream live with scenes, camera and audio in one tool.',
  'Reproduce vídeos y música, añade subtítulos y abre formatos como MKV, MP4 y FLAC sin instalar paquetes de códecs.': 'Play videos and music, add subtitles and open formats such as MKV, MP4 and FLAC without installing codec packs.',
  'Crea un USB para instalar Windows o Linux desde una ISO.': 'Create a USB to install Windows or Linux from an ISO.',
  'Scripts rápidos y utilidades de mantenimiento de sistemas.': 'Quick scripts and system maintenance utilities.',
  'Graba tu pantalla y transmite en directo con cámara y audio.': 'Record your screen and stream live with camera and audio.',
  'Organiza ventanas, renombra archivos y personaliza atajos.': 'Organize windows, rename files and customize shortcuts.',
  'Limpia Windows de apps preinstaladas y basura innecesaria.': 'Clean Windows of preinstalled apps and unnecessary clutter.',
  'Comprime archivos y extrae ZIP, RAR y 7z.': 'Compress files and extract ZIP, RAR and 7z.',
  'Reproduce vídeos, música y subtítulos en múltiples formatos.': 'Play videos, music and subtitles in multiple formats.',
  'aquí va otra herramienta… cuando la termine': 'another tool goes here… when I finish it',
  'No encontré nada con eso. El plano sigue en blanco ✎': 'Nothing found. The blueprint is still blank ✎',
  'Pendientes:': 'To do:', 'definir la idea': 'define the idea', 'dibujar los planos': 'draw the plans',
  'elegir color de pantalla': 'choose a screen color', 'conectar los enlaces': 'connect the links',
  'terminar el footer': 'finish the footer', '(← lo estás viendo)': '(← you’re looking at it)', 'modo oscuro': 'dark mode',
  'Catruple listo para explorar.': 'Catruple is ready to explore.', 'pendientes completados': 'all tasks completed',
  'PROYECTO': 'PROJECT', 'DIBUJÓ': 'DRAWN BY', 'ESCALA': 'SCALE', 'FECHA': 'DATE', 'ESTADO': 'STATUS', 'BORRADOR': 'DRAFT', 'NOTA': 'NOTE',
  'HECHO A MANO. NADA DE PLANTILLAS.': 'HANDMADE. NO TEMPLATES.',
  'Buscar…  ( / )': 'Search…  ( / )', 'Buscar herramientas o proyectos': 'Search tools or projects',
  'Cerrar': 'Close', 'Principal': 'Main', 'Filtrar por categoría': 'Filter by category', 'Características': 'Features',
  'Activar modo oscuro': 'Enable dark mode', 'Activar modo claro': 'Enable light mode',
  'ESTADO: OPERATIVO': 'STATUS: OPERATIONAL', 'ELEMENTOS': 'ITEMS', 'SISTEMA': 'SYSTEM', 'UTILIDAD': 'UTILITY', 'Avance.exe': 'Progress.exe',
  'Ayuda.txt': 'Help.txt', 'Sin enlace todavía': 'No link yet', 'Ir a GitHub': 'Go to GitHub',
};

const guides: Record<string, [string, string]> = {
  ...artcraftGuides,
  ...catalogGuides,
  vscodium: ['VSCodium', `<h2>Install</h2><p>Download the package for your system from the <a href="https://github.com/VSCodium/vscodium/releases">official releases</a>.</p><h2>Start a project</h2><ol><li>Open VSCodium and choose File → Open Folder.</li><li>Select or create your project folder.</li><li>Add files in the sidebar and save your changes.</li><li>Use Terminal → New Terminal to run project commands. Install your required language or runtime separately.</li></ol><h2>Extensions and Git</h2><ul><li>Find extensions through Open VSX. Not every Microsoft Marketplace extension is available or licensed for other editors.</li><li>Install Git separately and open Source Control to review changes and create commits.</li><li>Use the Command Palette to find actions by name.</li></ul><p><a href="https://github.com/VSCodium/vscodium/blob/master/DOCS.md">Project documentation</a></p>`],
  keepassxc: ['KeePassXC', `<h2>Create your vault</h2><ol><li>Install KeePassXC from the <a href="https://github.com/keepassxreboot/keepassxc/releases">official releases</a>.</li><li>Open the app and choose Create new database.</li><li>Name it and follow the wizard. Choose a long, unique master password you can remember.</li><li>Save the database file somewhere you can find it.</li></ol><h2>Save a password</h2><ol><li>Add an entry with the service name, username, password and website.</li><li>Use the generator to create a unique password for each account.</li><li>Save the database after changes and lock it when finished.</li></ol><h2>Backups</h2><p>Keep a secure backup of the database file. If you use an additional key file, back it up separately too. <strong>If you lose the master password or a required key, account recovery cannot unlock the vault.</strong></p><p>Optional browser integration requires the official KeePassXC-Browser extension.</p><p><a href="https://keepassxc.org/docs/KeePassXC_GettingStarted">Official guide</a></p>`],
  localsend: ['LocalSend', `<h2>Set up your devices</h2><ol><li>Install LocalSend on both devices using the links in the <a href="https://github.com/localsend/localsend">official repository</a>.</li><li>Connect both to the same local network and open the app.</li><li>If Windows asks for network access, allow communication on your trusted private network.</li></ol><h2>Send files</h2><ol><li>Choose Send on the source device and select files, folders or text.</li><li>Select the destination from nearby devices.</li><li>Review and accept the request on the receiving device.</li><li>Wait for the transfer to finish and check the received files in their destination folder.</li></ol><h2>Device not showing up?</h2><p>Check the connection, network permissions and firewall. Guest networks may block communication between devices. Review LocalSend’s permission instead of disabling the entire firewall.</p><p>No account or cloud server is needed for local transfers.</p>`],
  sharex: ['ShareX', `<h2>Install</h2><p>Download the Windows installer from the <a href="https://github.com/ShareX/ShareX/releases">official releases</a>.</p><h2>Take a screenshot</h2><ol><li>Open ShareX and review After capture tasks. Disable automatic uploading if you only want local files.</li><li>Choose Capture → Region and select an area.</li><li>Use the image editor to add arrows or text.</li><li>Save the screenshot and check its destination folder in settings.</li></ol><h2>More tools</h2><ul><li>Capture → Screen recording: record video or GIF. Follow the prompts if recording components are required.</li><li>Tools → OCR: select an image or region to extract text.</li><li>Hotkey settings: review or customize shortcuts.</li></ul><p>Before uploading, check the destination and content: uploads may share your screenshots through external services.</p>`],
  rufus: ['Rufus · Bootable USB', `<h2>Before you start</h2><p>You need an ISO image and a USB drive with enough space. <strong>Rufus erases the USB drive. Back up its files first.</strong></p><h2>Create the USB</h2><ol><li>Download Rufus from its <a href="https://github.com/pbatard/rufus/releases">official releases</a> and run it on Windows.</li><li>Connect the USB and verify its name and capacity under Device.</li><li>Click Select and choose your ISO image.</li><li>Use GPT for modern UEFI computers, or MBR if the target computer requires legacy BIOS.</li><li>Click Start, review the options and confirm the erase only after checking the selected drive.</li><li>When finished, restart and choose the USB in the boot menu.</li></ol>`],
  powertoys: ['Microsoft PowerToys', `<h2>Install</h2><p>Download the x64 or ARM64 installer for your computer from the <a href="https://github.com/microsoft/PowerToys/releases">official releases</a>. Install and open PowerToys, then enable the utilities you need.</p><h2>Start here</h2><ul><li><strong>FancyZones:</strong> choose a layout in its editor, then hold Shift while dragging a window into a zone.</li><li><strong>PowerRename:</strong> select files in Explorer and open PowerRename from the context menu. Review the preview before applying changes.</li><li><strong>Image Resizer:</strong> select images and choose Resize pictures from their context menu.</li><li><strong>Keyboard Manager:</strong> remap keys or shortcuts in its settings.</li></ul><p>On Windows 11, some options may appear under Show more options. Each utility lists its shortcuts in PowerToys settings.</p><p><a href="https://learn.microsoft.com/windows/powertoys/">Official documentation</a></p>`],
  debloater: ['Windows cleaner · WinUtil', `<h2>What is it?</h2><p>Chris Titus Tech’s Windows Utility (WinUtil) is an open-source PowerShell tool for installing apps, removing clutter and adjusting Windows.</p><h2>Get started</h2><ol><li>Read the instructions in the <a href="https://github.com/ChrisTitusTech/winutil">official repository</a>.</li><li>Open PowerShell as administrator and follow the official guide to run WinUtil. You can also get the script from the Download button.</li><li>Before applying tweaks, create a restore point using Restore Point - Create in Tweaks.</li><li>Review a preset or select individual tweaks, then click Run Tweaks.</li><li>Restart when finished.</li></ol><p>The command downloads and runs an internet script. Use the official source and review each change before applying it.</p><p><a href="https://christitus.com/windows-tool/">Official guide</a></p>`],
  '7zip': ['7-Zip archiver', `<h2>Install</h2><p>Get the installer for your computer from the <a href="https://github.com/ip7z/7zip/releases">official releases</a>.</p><h2>Extract files</h2><ol><li>Open 7-Zip File Manager and locate the ZIP, RAR or 7z archive.</li><li>Select it and click Extract.</li><li>Choose a destination folder and confirm. Enter the password if required.</li></ol><h2>Compress files</h2><ol><li>Select files or folders in 7-Zip File Manager.</li><li>Click Add and choose the output filename.</li><li>Choose ZIP for compatibility or 7z for its compression.</li><li>Click OK. Check the archive before deleting your originals.</li></ol><p>You can also use Explorer’s context menu. On Windows 11, look under Show more options.</p>`],
  obs: ['OBS Studio', `<h2>Set up OBS</h2><ol><li>Install OBS from its <a href="https://github.com/obsproject/obs-studio/releases">official releases</a>.</li><li>Run the Auto-Configuration Wizard, also available under Tools.</li><li>Choose whether you mainly want to record or stream.</li></ol><h2>Your first recording</h2><ol><li>Create or select a Scene.</li><li>Click + under Sources and add a display, window or game capture. Add Video Capture Device for a webcam.</li><li>Check microphone and desktop sound levels in the Audio Mixer.</li><li>Check the recording path under Settings → Output.</li><li>Click Start Recording, make a short test and stop. Play the file to check picture and sound.</li></ol><h2>Stream</h2><p>Set up your service under Settings → Stream before clicking Start Streaming. Check which screen and audio you are sharing.</p><p><a href="https://obsproject.com/kb/quick-start-guide">Official quick start guide</a></p>`],
  vlc: ['VLC media player', `<h2>Install</h2><p>Visit the <a href="https://github.com/videolan/vlc">official repository</a>. Download the installer from the linked <a href="https://www.videolan.org/vlc/">VideoLAN website</a>.</p><h2>Play a file</h2><ol><li>Install and open VLC.</li><li>Drag a video or song into its window, or choose Media → Open File.</li><li>Use the controls to pause, seek and adjust volume.</li><li>To add external subtitles, choose Subtitle → Add Subtitle File.</li><li>For videos with multiple audio tracks, choose Audio → Audio Track.</li></ol><h2>Playlist</h2><p>Drag multiple files into VLC and open View → Playlist to organize them. Menu names can vary by language and operating system.</p>`],
};

export function initLanguage() {
  const button = document.querySelector<HTMLButtonElement>('[data-language-toggle]');
  if (!button) return;
  const originalText = new WeakMap<Text, string>();
  const originals = new WeakMap<Element, Map<string, string>>();
  const guideOriginals = new Map<Element, string>();
  const guideEnglish = new Map<Element, string>();
  let english = false;
  let applying = false;
  const translate = (value: string) => {
    const trimmed = value.trim();
    const count = trimmed.match(/^Mostrando (\d+) de (\d+) planos$/);
    if (count) return `Showing ${count[1]} of ${count[2]} tools`;
    if (/^\d+ elementos$/.test(trimmed)) return value.replace('elementos', 'items');
    const translated = detailTranslations[trimmed] ?? translations[trimmed];
    return translated ? value.replace(trimmed, translated) : value;
  };
  const apply = () => {
    applying = true;
    observer.disconnect();
    document.documentElement.lang = english ? 'en' : 'es';
    document.title = english ? 'Catruple.com — Free tools for your PC' : 'Catruple.com';
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    for (const node of nodes) {
      if (node.parentElement?.closest('script, style, [data-language-toggle], dialog .body')) continue;
      if (!originalText.has(node)) originalText.set(node, node.data);
      const original = originalText.get(node)!;
      const value = english ? translate(original) : original;
      if (node.data !== value) node.data = value;
    }
    for (const el of document.querySelectorAll('[aria-label], [title], [placeholder]')) {
      if (el === button) continue;
      let attrs = originals.get(el);
      if (!attrs) { attrs = new Map(); originals.set(el, attrs); }
      for (const attr of ['aria-label', 'title', 'placeholder']) {
        const value = el.getAttribute(attr);
        if (value === null) continue;
        // Mode labels are updated by the dark-mode button as well.
        if (el.hasAttribute('data-dark-mode')) {
          const dark = document.documentElement.dataset.mode === 'dark';
          const label = dark ? 'Activar modo claro' : 'Activar modo oscuro';
          el.setAttribute(attr, english ? translate(label) : label);
          continue;
        }
        if (!attrs.has(attr)) attrs.set(attr, value);
        el.setAttribute(attr, english ? translate(attrs.get(attr)!) : attrs.get(attr)!);
      }
    }
    for (const [id, [title, body]] of Object.entries(guides)) {
      const el = document.querySelector(`#guide-${id} .body`);
      if (!el) continue;
      if (!guideOriginals.has(el)) guideOriginals.set(el, el.innerHTML);
      if (!guideEnglish.has(el)) {
        const copy = el.cloneNode(true) as HTMLElement;
        const heading = copy.querySelector('.heading');
        const prose = copy.querySelector('.prose');
        if (heading) heading.textContent = `How to use · ${title}`;
        if (prose) prose.innerHTML = body;
        guideEnglish.set(el, copy.innerHTML);
      }
      const html = english ? guideEnglish.get(el)! : guideOriginals.get(el)!;
      // Only use our authored, static guide content.
      if (el.innerHTML !== html) el.innerHTML = html;
    }
    const softwareLine = document.querySelector('.software-line');
    const highlight = softwareLine?.querySelector('.hl');
    if (softwareLine && highlight) {
      if (english) softwareLine.prepend(highlight);
      else softwareLine.append(highlight);
    }
    const count = document.querySelector('[data-catalog-count]');
    if (count) {
      const cards = [...document.querySelectorAll<HTMLElement>('[data-category]')];
      const shown = cards.filter(card => !card.hidden).length;
      count.textContent = english ? `Showing ${shown} of ${(count as HTMLElement).dataset.total ?? cards.length} tools` : `Mostrando ${shown} de ${(count as HTMLElement).dataset.total ?? cards.length} planos`;
    }
    document.dispatchEvent(new Event('catruple:language'));
    button.textContent = english ? 'ES' : 'EN';
    button.setAttribute('aria-label', english ? 'Cambiar a español' : 'Switch to English');
    button.title = english ? 'Cambiar a español' : 'Switch to English';
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['aria-label', 'title'] });
    applying = false;
  };
  const observer = new MutationObserver(() => { if (!applying && english) apply(); });
  button.addEventListener('click', () => {
    english = !english;
    try { localStorage.setItem('catruple-language', english ? 'en' : 'es'); } catch {}
    apply();
  });
  try { english = localStorage.getItem('catruple-language') === 'en'; } catch {}
  apply();
}
