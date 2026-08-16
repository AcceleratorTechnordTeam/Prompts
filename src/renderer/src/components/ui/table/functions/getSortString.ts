// Fonctions de tri spécialisées
export const getSortString = (a: string, b: string): number =>
	a.localeCompare(b, undefined, { sensitivity: 'base' });
