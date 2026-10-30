import type { Guide } from './_types';

export default {
  "title": "Cómo usar · Rufus · USB de arranque",
  "windowTitle": "Ayuda.txt",
  "body": "## Antes de empezar\nNecesitas una imagen ISO de Windows o Linux y una memoria USB con capacidad suficiente. **Rufus borrará el contenido del USB**: guarda antes sus archivos.\n\n## Crear el USB\n1. Descarga Rufus desde las [publicaciones oficiales](https://github.com/pbatard/rufus/releases) y abre el ejecutable en Windows.\n2. Conecta el USB y comprueba su nombre y capacidad en **Dispositivo**.\n3. Pulsa **Seleccionar** y abre tu imagen ISO.\n4. Elige el esquema de partición adecuado al equipo de destino: GPT para UEFI moderno; MBR cuando el equipo requiera BIOS heredada.\n5. Pulsa **Empezar**, revisa las opciones y confirma el borrado solo cuando hayas comprobado el dispositivo.\n6. Cuando indique que terminó, reinicia el equipo y selecciona el USB desde su menú de arranque.\n\n[Proyecto y ayuda oficial](https://github.com/pbatard/rufus)\n"
} satisfies Guide;
