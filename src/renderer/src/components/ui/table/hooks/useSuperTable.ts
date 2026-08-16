import { useMemo } from 'react';

import { usePagination } from './usePagination';
import { useSortTable } from './useSortTable';
import { useTableRows } from './useTableRows';
import { useTableSearch } from './useTableSearch';

type UseSuperTableProps<T extends SuperTableRow> = {
	rowData: T[];
	columnData: SuperTableColumn[];
	maxRowPerPage?: number;
};

export const useSuperTable = <T extends SuperTableRow = SuperTableRow>({
	rowData = [] as T[],
	columnData = [],
	maxRowPerPage = 5,
}: UseSuperTableProps<T>) => {
	// Hook pour verifier les lignes du tableau
	const { safeRows, idsList, isValid } = useTableRows(rowData);

	// Hook pour gérer la recherche
	const { searchTerm, searchResults, handleSearch, resetSearch } =
		useTableSearch(safeRows);

	// Utilise les résultats de recherche s'ils existent, sinon utilise les lignes validées
	const effectiveRows = useMemo(() => {
		return searchResults && searchResults.length > 0
			? searchResults
			: safeRows;
	}, [searchResults, safeRows]);

	// Hook pour trier les données
	const { sortedData, currentSortColumn, currentSortDirection, sortBy } =
		useSortTable(effectiveRows);

	// Hook pour gérer la pagination
	const { currentPageData, totalPages, currentPage, setCurrentPage } =
		usePagination(sortedData, maxRowPerPage);

	// Vérifie si le tableau est vide
	const isEmpty = useMemo(() => {
		return currentPageData.length > 0;
	}, [currentPageData]);

	return {
		rows: currentPageData,
		columns: columnData,
		idsList,
		isValid,
		//
		searchResults,
		searchTerm,
		handleSearch,
		resetSearch,
		//
		originalRows: safeRows,
		//
		currentPageData,
		totalPages,
		currentPage,
		setCurrentPage,
		//
		sortedData,
		currentSortColumn,
		currentSortDirection,
		sortBy,
		//
		isEmpty,
	};
};
