// Guía "Cómo usar" (debloater). Creada con `npm run guide` desde debloater.md.
// Puedes editar el texto aquí mismo: es Markdown normal.
import type { Guide } from './_types';

export default {
  title: 'Cómo usar · Windows Utility',
  windowTitle: 'Ayuda.txt',
  body: `
## ¿Qué es?

La **Windows Utility** de Chris Titus Tech (*WinUtil*) es una herramienta gratuita y de código abierto (licencia MIT) escrita en PowerShell. Junta en una sola ventana las tareas que normalmente harías a mano después de instalar Windows: instalar programas, quitar lo que sobra y ajustar el sistema.

## ¿Para qué sirve?

Se organiza en cuatro pestañas:

- **Install**: instala tus programas de una sola vez (navegadores, utilidades, drivers…).
- **Tweaks**: limpia y optimiza Windows. Por ejemplo, desactiva la telemetría y las apps en segundo plano, o quita OneDrive y los extras de Edge.
- **Config**: activa características de Windows y aplica arreglos rápidos a problemas comunes.
- **Updates**: decide cómo y cuándo se instalan las actualizaciones de Windows.

Si no quieres revisar cada opción, trae ajustes predefinidos: **Minimal** (cambios mínimos), **Standard** (equilibrado, el recomendado para la mayoría) y **Advanced** (para usuarios avanzados).

## ¿Por qué es importante?

Windows viene con apps preinstaladas, servicios que casi nadie usa y telemetría que manda datos de uso a Microsoft. Todo eso consume memoria, disco y CPU en segundo plano. Quitarlo deja:

- **Más rendimiento**: menos procesos compitiendo con tus juegos y programas.
- **Más privacidad**: menos datos saliendo de tu equipo.
- **Un sistema más limpio**: sin publicidad en el menú Inicio ni apps que no pediste.

## Paso a paso

1. Abre **PowerShell** o **Terminal** como administrador: clic derecho en Inicio → *Terminal (Admin)*.
2. Pega el comando y pulsa Enter:

   \`\`\`powershell
   irm christitus.com/win | iex
   \`\`\`

3. Antes de tocar nada, en **Tweaks** marca **Restore Point - Create** para crear un punto de restauración.
4. Elige un ajuste predefinido (o marca opciones sueltas) y pulsa **Run Tweaks**.
5. Reinicia el equipo cuando termine.

> **Ojo:** el comando descarga y ejecuta un script de internet. Cópialo siempre desde la fuente oficial ([christitus.com/windows-tool](https://christitus.com/windows-tool/)) y lee qué hace cada ajuste antes de aplicarlo.
`,
} satisfies Guide;
