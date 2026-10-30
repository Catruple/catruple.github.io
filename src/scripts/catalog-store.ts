import { ALL_CATEGORY, type CategoryId } from '@/data/categories';

/**
 * Estado compartido del repositorio (filtro + búsqueda).
 * Lo modifican el menú, los chips, el buscador y el panel;
 * cada componente se suscribe y actualiza solo su parte del DOM.
 */
export interface CatalogState {
  filter: CategoryId;
  query: string;
  /** true si el filtro se eligió desde el menú superior. */
  fromNav: boolean;
  visibleCount: number;
}

type Listener = (state: CatalogState) => void;

let state: CatalogState = { filter: ALL_CATEGORY, query: '', fromNav: false, visibleCount: 10 };
const listeners = new Set<Listener>();

export const normalizeQuery = (text: string) => text.trim().toLowerCase();

function update(patch: Partial<CatalogState>) {
  state = { ...state, ...patch };
  listeners.forEach((fn) => fn(state));
}

/** Registra un oyente y lo ejecuta de inmediato con el estado actual. */
export function subscribe(fn: Listener): () => void {
  listeners.add(fn);
  fn(state);
  return () => listeners.delete(fn);
}

export const setFilter = (filter: CategoryId, fromNav = false) => update({ filter, fromNav, visibleCount: 10 });

export const setQuery = (text: string) => update({ query: normalizeQuery(text), visibleCount: 10 });

export const resetCatalog = () => update({ filter: ALL_CATEGORY, query: '', fromNav: false, visibleCount: 10 });

export const showLess = () => update({ visibleCount: 10 });

export const showMore = () => update({ visibleCount: state.visibleCount + 10 });

export function revealCatalogCard(id: string) {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-category]')];
  const index = cards.findIndex(card => card.id === id);
  if (index >= state.visibleCount) update({ visibleCount: Math.ceil((index + 1) / 10) * 10 });
}
