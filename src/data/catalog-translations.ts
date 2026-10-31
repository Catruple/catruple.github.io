export const catalogText: Record<string, string> = {
  "USB multiarranque Ventoy": "Ventoy multiboot USB",
  "Lleva varias imágenes ISO de Windows y Linux en un solo USB y elige cuál arrancar.": "Keep multiple Windows and Linux ISO images on one USB and choose which one to boot.",
  "Graba imágenes con Etcher": "Flash images with Etcher",
  "Prepara tarjetas SD y memorias USB para Linux o Raspberry Pi con una interfaz sencilla.": "Prepare SD cards and USB drives for Linux or Raspberry Pi through a simple interface.",
  "Desinstala con BCUninstaller": "Uninstall with BCUninstaller",
  "Desinstala programas en lote y revisa los restos que dejan en Windows.": "Uninstall programs in batches and review the leftovers they leave on Windows.",
  "Temperaturas y hardware": "Temperatures and hardware",
  "Consulta temperaturas, ventiladores, voltajes y carga del equipo con Libre Hardware Monitor.": "Check temperatures, fan speeds, voltages and system load with Libre Hardware Monitor.",
  "Ajusta Windows con Sophia": "Tweak Windows with Sophia",
  "Personaliza privacidad, interfaz y comportamiento de Windows con funciones de PowerShell revisables.": "Customize Windows privacy, interface and behavior through reviewable PowerShell functions.",
  "Limpieza con Win11Debloat": "Cleanup with Win11Debloat",
  "Elimina aplicaciones preinstaladas y ajusta opciones de Windows mediante un script con selección de cambios.": "Remove preinstalled apps and adjust Windows options using a script with selectable changes.",
  "PowerShell 7": "PowerShell 7",
  "Automatiza tareas, administra archivos y ejecuta scripts con la consola multiplataforma de Microsoft.": "Automate tasks, manage files and run scripts with Microsoft’s cross-platform shell.",
  "Revisa scripts de PowerShell": "Check PowerShell scripts",
  "Detecta problemas y malas prácticas en tus scripts antes de ejecutarlos con PSScriptAnalyzer.": "Find issues and poor practices in scripts before running them with PSScriptAnalyzer.",
  "Proyectos web con Vite": "Web projects with Vite",
  "Arranca proyectos frontend con recarga rápida y compila tus archivos para publicarlos.": "Start frontend projects with fast updates and build your files for deployment.",
  "Sitios rápidos con Astro": "Fast websites with Astro",
  "Crea blogs, portafolios y sitios de contenido con componentes y poco JavaScript por defecto.": "Build blogs, portfolios and content sites with components and little JavaScript by default.",
  "Prueba APIs con Bruno": "Test APIs with Bruno",
  "Organiza y prueba peticiones HTTP con colecciones locales que puedes guardar en Git.": "Organize and test HTTP requests with local collections you can track in Git.",
  "APIs con Hoppscotch": "APIs with Hoppscotch",
  "Explora APIs HTTP y WebSocket con la edición comunitaria de este cliente de desarrollo.": "Explore HTTP and WebSocket APIs with this development client’s community edition.",
  "Crea juegos con Godot": "Make games with Godot",
  "Diseña juegos 2D y 3D con escenas, scripts y un motor libre sin regalías.": "Design 2D and 3D games with scenes, scripts and a royalty-free open-source engine.",
  "Modelado 3D con Blender": "3D creation with Blender",
  "Modela, anima y renderiza escenas 3D con una suite completa de creación.": "Model, animate and render 3D scenes with a complete creation suite.",
  "Audio con Audacity": "Audio with Audacity",
  "Graba y edita voz, música y podcasts con pistas, cortes y efectos.": "Record and edit voice, music and podcasts with tracks, cuts and effects.",
  "Edición de vídeo Shotcut": "Shotcut video editing",
  "Monta vídeos con una línea de tiempo, filtros y exportación sin marcas de agua impuestas.": "Edit videos with a timeline, filters and export without imposed watermarks.",
  "Diagramas con draw.io": "Diagrams with draw.io",
  "Dibuja diagramas de flujo, mapas y esquemas en una aplicación de escritorio sin conexión.": "Draw flowcharts, maps and diagrams in an offline desktop app.",
  "Windows Terminal": "Windows Terminal",
  "Organiza PowerShell, CMD y otras consolas en pestañas, paneles y perfiles personalizados.": "Organize PowerShell, CMD and other shells in tabs, panes and custom profiles.",
  "Personaliza con Starship": "Customize with Starship",
  "Muestra el estado de Git, lenguajes y contexto del proyecto en el prompt de tu terminal.": "Show Git status, languages and project context in your terminal prompt.",
  "Temas con Oh My Posh": "Themes with Oh My Posh",
  "Configura un prompt con temas y segmentos para Git, lenguajes y herramientas.": "Configure a themed prompt with segments for Git, languages and tools.",
  "Personaliza Windows con Windhawk": "Customize Windows with Windhawk",
  "Aplica modificaciones concretas a la barra de tareas y a otras partes de Windows.": "Apply targeted modifications to the taskbar and other parts of Windows.",
  "Terminal WezTerm": "WezTerm terminal",
  "Trabaja con pestañas y paneles en una terminal configurable mediante Lua.": "Work with tabs and panes in a terminal configured through Lua.",
  "TutorGebra · Tutor de geometría": "TutorGebra · Geometry tutor",
  "Le pasas un problema en texto o en imagen y lo resuelve mientras te lo explica paso a paso, en un tablero de GeoGebra y con voz.": "Give it a problem as text or an image and it solves it while explaining each step, on a GeoGebra board and out loud.",
  "Probar": "Try it",
  "Autor:": "Author:"
};
export const catalogGuides: Record<string, [string, string]> = {
  "ventoy": [
    "Ventoy multiboot USB",
    "<h2>Get started</h2><ol><li>Download and extract the package for your system from Releases.</li><li>Back up your USB files: the initial Ventoy installation formats the drive.</li><li>Open Ventoy2Disk, check the target device and click Install. Then copy ISO images to the data partition.</li><li>Boot the computer from the USB and select an ISO in Ventoy’s menu.</li></ol><p><a href=\"https://github.com/ventoy/Ventoy\">Official repository and instructions</a> · <a href=\"https://github.com/ventoy/Ventoy/releases\">Project releases</a></p>"
  ],
  "etcher": [
    "Flash images with Etcher",
    "<h2>Get started</h2><ol><li>Install the Etcher package for your system from Releases.</li><li>Click Flash from file and choose a compatible image. It does not replace Rufus for Windows installers.</li><li>Select your USB or SD card and verify its capacity: its contents will be erased.</li><li>Click Flash and wait for writing and validation to finish.</li></ol><p><a href=\"https://github.com/balena-io/etcher\">Official repository and instructions</a> · <a href=\"https://github.com/balena-io/etcher/releases\">Project releases</a></p>"
  ],
  "bcuninstaller": [
    "Uninstall with BCUninstaller",
    "<h2>Get started</h2><ol><li>Download the installer or portable release.</li><li>Open BCUninstaller and wait for it to detect installed programs.</li><li>Select only apps you recognize and want to remove. Review the summary before uninstalling.</li><li>If it finds leftovers, review each item before deleting it and keep a backup when offered.</li></ol><p><a href=\"https://github.com/Klocman/Bulk-Crap-Uninstaller\">Official repository and instructions</a> · <a href=\"https://github.com/Klocman/Bulk-Crap-Uninstaller/releases\">Project releases</a></p>"
  ],
  "hardwaremonitor": [
    "Temperatures and hardware",
    "<h2>Get started</h2><ol><li>Download and extract the release package.</li><li>Open LibreHardwareMonitor. If sensors are missing, check whether administrator access is needed.</li><li>Expand CPU, GPU and drives to view current and maximum readings. Available sensors depend on your hardware.</li><li>Use graphs to observe changes during a task. Do not change fan controls without understanding your hardware.</li></ol><p><a href=\"https://github.com/LibreHardwareMonitor/LibreHardwareMonitor\">Official repository and instructions</a> · <a href=\"https://github.com/LibreHardwareMonitor/LibreHardwareMonitor/releases\">Project releases</a></p>"
  ],
  "sophia": [
    "Tweak Windows with Sophia",
    "<h2>Get started</h2><ol><li>Read the requirements and download the release matching your Windows and PowerShell versions.</li><li>Create a backup or restore point before changing the system.</li><li>Open the package’s preset file and review its functions. Enable only changes you understand.</li><li>Follow the repository’s instructions to run the preset, then restart if required.</li></ol><p><a href=\"https://github.com/farag2/Sophia-Script-for-Windows\">Official repository and instructions</a> · <a href=\"https://github.com/farag2/Sophia-Script-for-Windows/releases\">Project releases</a></p>"
  ],
  "win11debloat": [
    "Cleanup with Win11Debloat",
    "<h2>Get started</h2><ol><li>Review the documentation and available changes in the official repository.</li><li>Download the release package and back up your data before applying changes.</li><li>Follow the README’s manual execution method and choose a mode that lets you review options.</li><li>Check selected apps and settings before confirming. Restart if the instructions require it.</li></ol><p><a href=\"https://github.com/Raphire/Win11Debloat\">Official repository and instructions</a> · <a href=\"https://github.com/Raphire/Win11Debloat/releases\">Project releases</a></p>"
  ],
  "powershell": [
    "PowerShell 7",
    "<h2>Get started</h2><ol><li>Download and install PowerShell for your system from Releases. PowerShell 7 can coexist with Windows PowerShell.</li><li>Open PowerShell 7 from your app menu.</li><li>Try Get-Help for help and Get-ChildItem to list files.</li><li>Read scripts before running them and use administrator privileges only when needed.</li></ol><p><a href=\"https://github.com/PowerShell/PowerShell\">Official repository and instructions</a> · <a href=\"https://github.com/PowerShell/PowerShell/releases\">Project releases</a></p>"
  ],
  "scriptanalyzer": [
    "Check PowerShell scripts",
    "<h2>Get started</h2><ol><li>Check requirements and installation instructions in the official README.</li><li>Install PSScriptAnalyzer from PowerShell Gallery with Install-Module PSScriptAnalyzer -Scope CurrentUser.</li><li>Run Invoke-ScriptAnalyzer -Path followed by the path to your script or folder.</li><li>Review rules and warnings before editing. Static analysis does not guarantee that a script is safe.</li></ol><p><a href=\"https://github.com/PowerShell/PSScriptAnalyzer\">Official repository and instructions</a> · <a href=\"https://github.com/PowerShell/PSScriptAnalyzer/releases\">Project releases</a></p>"
  ],
  "vite": [
    "Web projects with Vite",
    "<h2>Get started</h2><ol><li>Install a Node.js version supported by the current Vite requirements.</li><li>Run npm create vite@latest in a terminal and choose a project name and template.</li><li>Enter the project folder, run npm install, then npm run dev.</li><li>Open the local address printed in the terminal. Run npm run build for production output.</li></ol><p><a href=\"https://github.com/vitejs/vite\">Official repository and instructions</a> · <a href=\"https://github.com/vitejs/vite/releases\">Project releases</a></p>"
  ],
  "astro": [
    "Fast websites with Astro",
    "<h2>Get started</h2><ol><li>Install Node.js according to Astro’s current requirements.</li><li>Run npm create astro@latest in a terminal and follow the wizard.</li><li>Enter the project folder and run npm run dev.</li><li>Edit pages in src/pages. Run npm run build to prepare the site for deployment.</li></ol><p><a href=\"https://github.com/withastro/astro\">Official repository and instructions</a> · <a href=\"https://github.com/withastro/astro/releases\">Project releases</a></p>"
  ],
  "bruno": [
    "Test APIs with Bruno",
    "<h2>Get started</h2><ol><li>Install the open-source edition from Releases.</li><li>Create a collection in a local folder and add a request.</li><li>Enter a test URL, HTTP method and required headers.</li><li>Click Send and review the status and response. Keep secrets in environment variables and out of Git.</li></ol><p><a href=\"https://github.com/usebruno/bruno\">Official repository and instructions</a> · <a href=\"https://github.com/usebruno/bruno/releases\">Project releases</a></p>"
  ],
  "hoppscotch": [
    "APIs with Hoppscotch",
    "<h2>Get started</h2><ol><li>Open the repository and choose the community web, desktop or self-hosted edition.</li><li>Create a request with a test URL and select its method.</li><li>Add the headers or body your API requires, then send the request.</li><li>Review the response and save the collection. Some browser requests may require the agent or interceptor because of browser restrictions.</li></ol><p><a href=\"https://github.com/hoppscotch/hoppscotch\">Official repository and instructions</a> · <a href=\"https://github.com/hoppscotch/hoppscotch/releases\">Project releases</a></p>"
  ],
  "godot": [
    "Make games with Godot",
    "<h2>Get started</h2><ol><li>Download the stable editor from Releases or the official site linked in the repository.</li><li>Open the project manager and create an empty project.</li><li>Choose a renderer compatible with your computer and add your first scene.</li><li>Save it, set it as the main scene and click Run. Follow official tutorials to add movement and logic.</li></ol><p><a href=\"https://github.com/godotengine/godot\">Official repository and instructions</a> · <a href=\"https://github.com/godotengine/godot/releases\">Project releases</a></p>"
  ],
  "blender": [
    "3D creation with Blender",
    "<h2>Get started</h2><ol><li>Download Blender from the official site linked in the repository; the repository contains its source code.</li><li>Open it and choose your keymap during initial setup.</li><li>Start with a simple scene: select objects and try moving, rotating and scaling them.</li><li>Save your .blend file and consult the official manual before preparing a render or animation.</li></ol><p><a href=\"https://github.com/blender/blender\">Official repository and instructions</a> · <a href=\"https://github.com/blender/blender/releases\">Project releases</a></p>"
  ],
  "audacity": [
    "Audio with Audacity",
    "<h2>Get started</h2><ol><li>Install Audacity from Releases or the official project site.</li><li>Select your audio input and output devices.</li><li>Import a recording or click Record to create a track.</li><li>Trim, adjust levels and save the project. Export an audio copy for sharing while keeping the editable project.</li></ol><p><a href=\"https://github.com/audacity/audacity\">Official repository and instructions</a> · <a href=\"https://github.com/audacity/audacity/releases\">Project releases</a></p>"
  ],
  "shotcut": [
    "Shotcut video editing",
    "<h2>Get started</h2><ol><li>Install Shotcut from Releases or the official project site.</li><li>Create a project and choose its storage folder.</li><li>Import videos and drag them to the timeline to trim and arrange clips.</li><li>Add filters or audio and use Export. Check the output and keep the original project files.</li></ol><p><a href=\"https://github.com/mltframework/shotcut\">Official repository and instructions</a> · <a href=\"https://github.com/mltframework/shotcut/releases\">Project releases</a></p>"
  ],
  "drawio": [
    "Diagrams with draw.io",
    "<h2>Get started</h2><ol><li>Install draw.io Desktop from Releases.</li><li>Create a new diagram and choose a template or blank canvas.</li><li>Drag shapes from the sidebar and connect them with arrows.</li><li>Save the editable .drawio file. Export PNG, SVG or PDF when you need a shareable copy.</li></ol><p><a href=\"https://github.com/jgraph/drawio-desktop\">Official repository and instructions</a> · <a href=\"https://github.com/jgraph/drawio-desktop/releases\">Project releases</a></p>"
  ],
  "terminal": [
    "Windows Terminal",
    "<h2>Get started</h2><ol><li>Install the stable version through the repository’s Microsoft Store or Releases link.</li><li>Open Settings from the terminal menu.</li><li>Choose your default profile, theme, font and shortcuts. Keep a backup if editing JSON settings.</li><li>Open tabs or split panes to work with multiple shells. Each shell or distribution must be installed separately.</li></ol><p><a href=\"https://github.com/microsoft/terminal\">Official repository and instructions</a> · <a href=\"https://github.com/microsoft/terminal/releases\">Project releases</a></p>"
  ],
  "starship": [
    "Customize with Starship",
    "<h2>Get started</h2><ol><li>Install Starship using the repository’s instructions for your OS and shell.</li><li>Add the documented initialization line to your shell configuration.</li><li>Reopen the terminal and try the prompt inside a Git project.</li><li>Customize starship.toml. If symbols are missing, install a Nerd Font and select it in your terminal.</li></ol><p><a href=\"https://github.com/starship/starship\">Official repository and instructions</a> · <a href=\"https://github.com/starship/starship/releases\">Project releases</a></p>"
  ],
  "ohmyposh": [
    "Themes with Oh My Posh",
    "<h2>Get started</h2><ol><li>Install Oh My Posh following the official repository’s OS instructions.</li><li>Install and select a Nerd Font if your theme needs one.</li><li>Choose a theme and add the documented initialization to your shell profile.</li><li>Reopen the terminal and customize your own theme file to keep your changes.</li></ol><p><a href=\"https://github.com/JanDeDobbeleer/oh-my-posh\">Official repository and instructions</a> · <a href=\"https://github.com/JanDeDobbeleer/oh-my-posh/releases\">Project releases</a></p>"
  ],
  "windhawk": [
    "Customize Windows with Windhawk",
    "<h2>Get started</h2><ol><li>Install Windhawk from Releases or the linked official site.</li><li>Browse mods and check their requirements and compatibility with your Windows version.</li><li>Read each mod’s description and code before installing it. Mods run code inside system processes.</li><li>Apply one at a time, review its settings and disable it if problems occur. Save your work before testing changes.</li></ol><p><a href=\"https://github.com/ramensoftware/windhawk\">Official repository and instructions</a> · <a href=\"https://github.com/ramensoftware/windhawk/releases\">Project releases</a></p>"
  ],
  "wezterm": [
    "WezTerm terminal",
    "<h2>Get started</h2><ol><li>Install WezTerm from Releases or the official method for your OS.</li><li>Open the terminal and check that it detects your preferred shell.</li><li>Create wezterm.lua at the location documented for your system.</li><li>Configure fonts, colors and shortcuts using official examples. Keep a backup before replacing your configuration.</li></ol><p><a href=\"https://github.com/wezterm/wezterm\">Official repository and instructions</a> · <a href=\"https://github.com/wezterm/wezterm/releases\">Project releases</a></p>"
  ],
  "tutorgebra": [
    "TutorGebra · Geometry tutor",
    "<h2>Prepare the exercise</h2><ol><li>Open TutorGebra with the Try it button. No sign-up needed: leave the OpenRouter key field empty to use the server’s free key.</li><li>Type the exercise in your own words under <strong>What do you want to calculate or draw?</strong>, or click <strong>Attach image (optional)</strong> and upload a photo of it.</li><li>Choose the teacher’s voice in Spanish or English under <strong>Teacher Voice</strong>. <strong>More Voices (edgeTTS)</strong> offers more options.</li><li>Click <strong>Generate Lesson</strong> and wait while it prepares the lesson.</li></ol><h2>During the lesson</h2><ul><li>Each step is typed as a command, drawn on the GeoGebra board and explained out loud.</li><li>Use <strong>Player Controls</strong> to pause, restart or move to the next step at your own pace.</li><li>The board’s fullscreen button lets you focus on the drawing.</li><li>When it finishes, you can move the board’s points and sliders to explore the figure.</li></ul><h2>Keep in mind</h2><p>This is an experimental project: the AI can make mistakes in a calculation or drawing, so check each step. It is free and open source (MIT license); the code and instructions to install it on your PC are in its <a href=\"https://github.com/ANGELUSD11/tutorgebra\">GitHub repository</a>.</p>"
  ]
};
