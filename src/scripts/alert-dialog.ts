/** API del cuadro de diálogo estilo Mac (components/ui/AlertDialog.astro). */
export interface AlertOptions {
  title: string;
  message: string;
  /** Comando que se muestra en un bloque con botón "Copiar". */
  code?: string;
  link?: { href: string; text: string };
}

const COPY_LABEL = 'Copiar';
const COPIED_LABEL = '¡Copiado!';

const getDialog = () => document.querySelector<HTMLDialogElement>('[data-alert-dialog]');

export function openAlert({ title, message, code, link }: AlertOptions): void {
  const dialog = getDialog();
  if (!dialog || typeof dialog.showModal !== 'function') {
    alert(code ? `${message}\n\n${code}` : message);
    return;
  }

  const titleEl = document.getElementById(dialog.getAttribute('aria-labelledby') ?? '');
  const messageEl = dialog.querySelector('[data-alert-message]');
  const codeBox = dialog.querySelector<HTMLElement>('[data-alert-code]');
  const codeEl = dialog.querySelector('[data-alert-code-text]');
  const copyBtn = dialog.querySelector<HTMLButtonElement>('[data-alert-copy]');
  const linkEl = dialog.querySelector<HTMLAnchorElement>('[data-alert-link]');

  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  if (codeBox && codeEl) {
    codeBox.hidden = !code;
    codeEl.textContent = code ?? '';
  }
  if (copyBtn) copyBtn.textContent = COPY_LABEL;
  if (linkEl) {
    linkEl.hidden = !link;
    if (link) {
      linkEl.href = link.href;
      linkEl.textContent = link.text;
    }
  }
  dialog.showModal();
}

/** Copia el texto al portapapeles; si no hay permiso, lo deja seleccionado. */
async function copyText(text: string, fallbackEl: Element): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const range = document.createRange();
    range.selectNodeContents(fallbackEl);
    getSelection()?.removeAllRanges();
    getSelection()?.addRange(range);
    return false;
  }
}

/** Conecta cerrar, clic fuera del diálogo y el botón "Copiar". */
export function initAlertDialog(): void {
  const dialog = getDialog();
  if (!dialog) return;

  dialog.querySelector('[data-window-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });

  const codeEl = dialog.querySelector('[data-alert-code-text]');
  const copyBtn = dialog.querySelector<HTMLButtonElement>('[data-alert-copy]');
  copyBtn?.addEventListener('click', async () => {
    if (!codeEl) return;
    const copied = await copyText(codeEl.textContent ?? '', codeEl);
    copyBtn.textContent = copied ? COPIED_LABEL : COPY_LABEL;
    if (copied) setTimeout(() => (copyBtn.textContent = COPY_LABEL), 1500);
  });
}
