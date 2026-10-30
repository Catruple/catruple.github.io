import type { Guide } from './_types';
export default {
  "title": "Cómo usar · Revisa scripts de PowerShell",
  "windowTitle": "Ayuda.txt",
  "body": "## Primeros pasos\n\n1. Consulta los requisitos y el método de instalación en el README oficial.\n2. Instala el módulo PSScriptAnalyzer desde PowerShell Gallery con Install-Module PSScriptAnalyzer -Scope CurrentUser.\n3. Ejecuta Invoke-ScriptAnalyzer -Path seguido de la ruta de tu script o carpeta.\n4. Revisa las reglas y advertencias antes de editar. El análisis no garantiza que un script sea seguro.\n\n[Repositorio e instrucciones oficiales](https://github.com/PowerShell/PSScriptAnalyzer) · [Publicaciones del proyecto](https://github.com/PowerShell/PSScriptAnalyzer/releases)\n"
} satisfies Guide;
