import { revealCatalogCard } from './catalog-store';

/** Lleva la vista hasta una tarjeta del repositorio y la hace parpadear. */
export function highlightCard(id: string): void {
  const card = document.getElementById(id);
  if (!card) return;
  revealCatalogCard(id);
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.classList.remove('flash');
  void card.offsetWidth; // reinicia la animación
  card.classList.add('flash');
}
