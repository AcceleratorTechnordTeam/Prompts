import { useCallback, useState } from 'react';

type UseMultiSelectionProps<T extends Record<string, unknown>> = {
	maxSelectableRows: number | null;
	rows: T[];
	onSelectedRowChange?: (rows: T[]) => void;
};

export const useMultiSelection = <T extends Record<string, unknown>>({
	maxSelectableRows,
	rows,
	onSelectedRowChange,
}: UseMultiSelectionProps<T>) => {
	const [selectedRows, setSelectedRows] = useState<T[]>([]);
	const [isAllSelected, setIsAllSelected] = useState(false);

	const handleMultiSelection = useCallback(
		(row: T) => {
			if (maxSelectableRows === null) return;

			const updatedRows = selectedRows.find((r) => r.ID === row.ID)
				? selectedRows.filter((r) => r.ID !== row.ID)
				: [...selectedRows, row].slice(-maxSelectableRows);

			setSelectedRows(updatedRows);
			onSelectedRowChange?.(updatedRows);
		},
		[maxSelectableRows, selectedRows, onSelectedRowChange],
	);

	const handleSelectAll = useCallback(() => {
		if (!rows?.length || maxSelectableRows === null) return;
		if (isAllSelected) {
			setSelectedRows([]);
			onSelectedRowChange?.([]);
			setIsAllSelected(false);
		} else {
			setSelectedRows(rows);
			onSelectedRowChange?.(rows);
			setIsAllSelected(true);
		}
	}, [rows, maxSelectableRows, onSelectedRowChange, isAllSelected]);

	const selectedRowIDs = selectedRows.map((r) => r.ID as string);

	return {
		selectedRows,
		selectedRowIDs,
		isAllSelected,
		handleMultiSelection,
		handleSelectAll,
	};
};
