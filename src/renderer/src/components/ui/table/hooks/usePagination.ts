import { useMemo, useState } from 'react';

type TableRows<T = SuperTableRow> = T[];

type UsePaginatedRowsReturn = {
	currentPageData: TableRows;
	totalPages: number;
	setCurrentPage: (page: number) => void;
	currentPage: number;
};

/**
 * Hook personnalisé pour gérer la pagination des données d'un tableau.
 *
 * Ce hook permet de :
 * - Diviser un ensemble de données en pages
 * - Gérer la navigation entre les pages
 * - Calculer automatiquement le nombre total de pages
 * - Mémoriser les calculs pour optimiser les performances
 *
 * @param {TableRows} data - Tableau de données avec identifiants uniques
 * @param {number} rowsPerPage - Nombre de lignes à afficher par page (défaut: 5)
 * @returns {UsePaginatedRowsReturn} Objet contenant les données et contrôles de pagination
 *
 * @example
 * const data = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' }
 * ];
 * const { currentPageData, totalPages, setCurrentPage, currentPage } =
 *   usePaginatedRows(data, 1);
 */
export const usePagination = <T extends SuperTableRow>(
	data: T[],
	rowsPerPage: number = 5
): UsePaginatedRowsReturn => {
	// Gestion de l'état de la page courante
	const [currentPage, setCurrentPage] = useState(0);

	// Calcul mémorisé du nombre total de pages
	const totalPages = useMemo(() => {
		return Math.ceil(data.length / rowsPerPage);
	}, [data.length, rowsPerPage]);

	// Division mémorisée des données en pages
	const paginatedData = useMemo(() => {
		const splittedData: TableRows[] = [];

		for (let i = 0; i < totalPages; i++) {
			const startIndex = i * rowsPerPage;
			const endIndex = Math.min(startIndex + rowsPerPage, data.length);
			// Extrait une portion des données pour chaque page
			splittedData.push(data.slice(startIndex, endIndex));
		}

		return splittedData;
	}, [data, rowsPerPage, totalPages]);

	// Récupération mémorisée des données de la page courante
	const currentPageData = useMemo(() => {
		return paginatedData[currentPage] || [];
	}, [paginatedData, currentPage]);

	return {
		currentPageData,
		totalPages,
		setCurrentPage,
		currentPage,
	};
};
