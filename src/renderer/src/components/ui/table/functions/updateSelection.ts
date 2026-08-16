// Fonctions utilitaires pures et réutilisables
export const updateSelection = (
	currentSelection: string[],
	id: string,
	maxItems: number,
): string[] => {
	if (currentSelection.includes(id)) {
		// Désélection
		return currentSelection.filter((rowId) => rowId !== id);
	} else {
		// Sélection avec limite
		return [...currentSelection, id].slice(-maxItems);
	}
};
