import type { Guide } from './_types';

export default {
  "title": "Cómo usar · OBS Studio",
  "windowTitle": "Ayuda.txt",
  "body": "## Preparar OBS\n1. Descarga e instala OBS desde sus [publicaciones oficiales](https://github.com/obsproject/obs-studio/releases).\n2. Al abrirlo, ejecuta el **Asistente de configuración automática**. También está en **Herramientas**.\n3. Elige si lo usarás principalmente para grabar o transmitir.\n\n## Primera grabación\n1. Crea o selecciona una **Escena**.\n2. En **Fuentes**, pulsa **+** y añade una captura de pantalla, ventana o juego. Para la cámara, añade un dispositivo de captura de vídeo.\n3. Comprueba que los medidores del **Mezclador de audio** respondan al micrófono y al sonido que quieras capturar.\n4. En **Ajustes → Salida**, revisa la ruta de grabación.\n5. Pulsa **Iniciar grabación**, haz una prueba corta y detenla. Reproduce el archivo para comprobar imagen y sonido.\n\n## Transmitir\nConfigura tu servicio en **Ajustes → Emisión** antes de pulsar **Iniciar transmisión**. Revisa qué pantalla y qué audio estás compartiendo.\n\n[Guía oficial de inicio](https://obsproject.com/kb/quick-start-guide)\n"
} satisfies Guide;
