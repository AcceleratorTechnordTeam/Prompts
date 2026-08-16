import { useCallback, useMemo, useState } from 'react';
import { getColumnByIDs } from '../functions/getColumnByIDs';

export const useColumnSelection = (columns: SuperTableColumn[]) => {
	const [hideableColumnIDs, setHideableColumnIDs] = useState<string[]>([]);

	const handleHideColumn = useCallback((columnID: string) => {
		setHideableColumnIDs((prev) => {
			const newSelection = prev.includes(columnID)
				? prev.filter((ID) => ID !== columnID)
				: [...prev, columnID];

			return newSelection;
		});
	}, []);

	const newColumns = useMemo(() => {
		return getColumnByIDs(columns, hideableColumnIDs);
	}, [columns, hideableColumnIDs]);

	// Utilise les résultats de recherche s'ils existent, sinon utilise les lignes validées
	const effectiveColumns = useMemo(() => {
		return newColumns && newColumns.length > 0 ? newColumns : columns;
	}, [newColumns, columns]);

	return { hideableColumnIDs, effectiveColumns, handleHideColumn };
};
