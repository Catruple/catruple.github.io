/** Comportamiento de las ventanas modales (components/ui/Modal.astro). */

export function openModal(id: string): HTMLDialogElement | null {
  const dialog = document.getElementById(id);
  if (!(dialog instanceof HTMLDialogElement) || typeof dialog.showModal !== 'function') return null;
  dialog.showModal();
  return dialog;
}

let ready = false;

/** Conecta el cierre de todas las modales y los disparadores data-modal-open. */
export function initModals(): void {
  if (ready) return;
  ready = true;

  document.querySelectorAll<HTMLDialogElement>('dialog[data-modal]').forEach((dialog) => {
    dialog.querySelector('[data-window-close]')?.addEventListener('click', () => dialog.close());
    // Clic en el fondo oscurecido (fuera de la ventana).
    dialog.addEventListener('click', (e) => {
      if (e.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close();
    });
  });

  document.addEventListener('click', (e) => {
    const trigger = (e.target as Element).closest<HTMLElement>('[data-modal-open]');
    if (!trigger) return;
    e.preventDefault();
    openModal(trigger.dataset.modalOpen!);
  });
}
