// Fonctions de tri spécialisées
export const getSortDate = (a: Date, b: Date): number =>
	a.getTime() - b.getTime();
