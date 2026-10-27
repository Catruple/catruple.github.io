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
}

type Listener = (state: CatalogState) => void;

let state: CatalogState = { filter: ALL_CATEGORY, query: '', fromNav: false };
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

export const setFilter = (filter: CategoryId, fromNav = false) => update({ filter, fromNav });

export const setQuery = (text: string) => update({ query: normalizeQuery(text) });

export const resetCatalog = () => update({ filter: ALL_CATEGORY, query: '', fromNav: false });
