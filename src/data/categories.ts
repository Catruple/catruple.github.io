/** Categorías del repositorio: alimentan los filtros, el menú y las insignias. */
export const CATEGORIES = [
  { id: 'all', label: 'Todo' },
  { id: 'sistema', label: 'Sistema' },
  { id: 'utilidad', label: 'Utilidad' },
  { id: 'script', label: 'Script' },
  { id: 'web', label: 'Web dev' },
  { id: 'labs', label: 'Labs' },
  { id: 'config', label: 'Config' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];
export type ProjectCategory = Exclude<CategoryId, 'all'>;

export const ALL_CATEGORY: CategoryId = 'all';

export function categoryLabel(id: CategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

/** Enlaces de la barra de menú superior (cada uno aplica un filtro). */
export const NAV_ITEMS: { label: string; filter: CategoryId }[] = [
  { label: 'Sistemas', filter: 'sistema' },
  { label: 'Utilidades', filter: 'utilidad' },
  { label: 'Scripts', filter: 'script' },
  { label: 'Repositorio', filter: 'all' },
];
