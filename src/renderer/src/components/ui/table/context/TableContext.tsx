import { createContext } from 'react';

type TableContextType = {
	disabled?: boolean;
	isLoading?: boolean;
	selectedRowIDs?: string[];
	maxSelectableRows: number | null;
	currentSortDirection?: SortDirection;
	currentSortColumn?: string;
	fontSize: number;
	tableID: string;
	isAllSelected: boolean;
};

export const TableContext = createContext<TableContextType>({
	disabled: false,
	isLoading: false,
	selectedRowIDs: [],
	maxSelectableRows: null,
	currentSortDirection: undefined,
	currentSortColumn: undefined,
	fontSize: 1,
	tableID: '',
	isAllSelected: false,
});
