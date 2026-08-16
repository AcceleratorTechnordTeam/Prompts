import { useCallback, useMemo, useState } from 'react';

import { getSortDate } from '../functions/getSortDate';
import { getSortNumber } from '../functions/getSortNumber';
import { getSortString } from '../functions/getSortString';

type SortConfig = {
	columnId: string;
	direction: SortDirection;
};

// Hook personnalisé pour trier les données d'un tableau
export const useSortTable = <T extends SuperTableRow>(data: T[]) => {
	const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

	// Fonction pour activer le tri sur une colonne
	const sortBy = useCallback((columnId: string) => {
		setSortConfig((prevConfig) => {
			// Si on clique sur la même colonne, on inverse la direction (asc <-> desc)
			if (prevConfig?.columnId === columnId) {
				return {
					columnId,
					direction: prevConfig.direction === 'asc' ? 'desc' : 'asc',
				};
			}

			// Si on clique sur une nouvelle colonne, on commence par l'ordre ascendant
			return {
				columnId,
				direction: 'asc',
			};
		});
	}, []);

	const sortedData = useMemo(() => {
		// Si aucun tri n'est appliqué, retourner les données initiales
		if (!sortConfig) {
			return data;
		}

		return [...data].sort((a, b) => {
			// Récupérer les valeurs à comparer
			const valA = a[sortConfig.columnId];
			const valB = b[sortConfig.columnId];

			// Gérer les cas où les valeurs sont nulles ou undefined
			if (valA === null || valA === undefined) return 1;
			if (valB === null || valB === undefined) return -1;
			if (valA === valB) return 0;

			let compareResult: number;

			// Déterminer le type et appliquer la fonction de tri appropriée
			switch (typeof valA) {
				case 'string':
					compareResult = getSortString(
						valA as string,
						valB as string,
					);
					break;
				case 'number':
					compareResult = getSortNumber(
						valA as number,
						valB as number,
					);
					break;
				case 'object':
					if (valA instanceof Date && valB instanceof Date) {
						compareResult = getSortDate(valA, valB);
					} else {
						// Fallback vers tri alphabétique
						compareResult = getSortString(
							String(valA),
							String(valB),
						);
					}
					break;
				default:
					// Fallback vers tri alphabétique
					compareResult = getSortString(String(valA), String(valB));
					break;
			}

			// Inverser le résultat si l'ordre est descendant
			return sortConfig.direction === 'asc'
				? compareResult
				: -compareResult;
		});
	}, [data, sortConfig]);

	return {
		sortedData,
		currentSortColumn: sortConfig?.columnId,
		currentSortDirection: sortConfig?.direction,
		sortBy,
	};
};
