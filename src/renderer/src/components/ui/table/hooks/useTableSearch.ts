import { useState, useMemo } from 'react';

// Définition des types
type SearchableObject = {
	[key: string]: unknown;
};

type SearchResults<T> = {
	searchTerm: string;
	searchResults: T[];
	handleSearch: (value: string) => void;
	resetSearch: () => void;
};

/**
 * Hook personnalisé pour effectuer une recherche globale dans un tableau d'objets.
 * Recherche dans toutes les valeurs de chaque objet, quelle que soit leur structure.
 *
 * @template T - Type d'objet dans le tableau (doit étendre SearchableObject)
 * @param {T[]} data - Tableau d'objets dans lequel effectuer la recherche
 * @returns {SearchResults<T>} Objet contenant les résultats et les fonctions de contrôle
 *
 * @example
 * const users = [
 *   { id: 1, name: 'John', email: 'john@example.com' },
 *   { id: 2, name: 'Jane', email: 'jane@example.com' }
 * ];
 * const { searchResults, handleSearch, resetSearch } = useGlobalSearch(users);
 * handleSearch('john'); // Recherche 'john' dans tous les champs
 */
export const useTableSearch = <T extends SearchableObject>(
	data: T[],
): SearchResults<T> => {
	// État pour le terme de recherche
	const [searchTerm, setSearchTerm] = useState<string>('');

	// Calcul des résultats filtrés avec mémoïsation
	const searchResults = useMemo(() => {
		// Retourne toutes les données si le terme de recherche est vide
		if (!searchTerm.trim()) {
			return data;
		}

		return data.filter((item) => {
			// Convertit l'objet en tableau de valeurs
			const values = Object.values(item);

			// Vérifie si une des valeurs correspond au terme de recherche
			return values.some((value) => {
				// Ignore les valeurs null ou undefined
				if (
					value === null ||
					value === undefined ||
					typeof value !== 'string'
				) {
					return false;
				}

				// Convertit la valeur en string pour la recherche
				const stringValue = value.toLowerCase().trim();
				const searchTermLower = searchTerm.toLowerCase().trim();

				return stringValue.includes(searchTermLower);
			});
		});
	}, [data, searchTerm]);

	// Fonction pour mettre à jour le terme de recherche
	const handleSearch = (value: string): void => {
		setSearchTerm(value);
	};

	// Fonction pour réinitialiser la recherche
	const resetSearch = (): void => {
		setSearchTerm('');
	};

	return {
		searchTerm,
		searchResults,
		handleSearch,
		resetSearch,
	};
};
