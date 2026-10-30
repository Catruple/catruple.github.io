import type { Guide } from './_types';
export default {
  "title": "Cómo usar · LocalSend",
  "windowTitle": "Ayuda.txt",
  "body": "## Preparar los dispositivos\n1. Instala LocalSend en los dos dispositivos desde los enlaces del [repositorio oficial](https://github.com/localsend/localsend).\n2. Conéctalos a la misma red local y abre la aplicación en ambos.\n3. Si Windows solicita acceso a la red, permite la comunicación en tu red privada de confianza.\n\n## Enviar archivos\n1. En el dispositivo de origen, entra en **Enviar** y selecciona archivos, carpetas o texto.\n2. Elige el dispositivo de destino de la lista de equipos cercanos.\n3. En el otro dispositivo, revisa la solicitud y acepta la transferencia.\n4. Espera a que termine y comprueba los archivos recibidos en su carpeta de destino.\n\n## Si no aparece el otro equipo\nComprueba la conexión, los permisos de red y el firewall. Las redes de invitados pueden bloquear la comunicación entre dispositivos. No desactives el firewall completo: revisa el permiso de LocalSend.\n\nNo necesitas una cuenta ni un servidor en la nube para transferir archivos por tu red local.\n"
} satisfies Guide;
