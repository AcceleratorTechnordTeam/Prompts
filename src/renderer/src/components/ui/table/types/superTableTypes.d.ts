// Basic types for SuperTable
type SortDirection = 'asc' | 'desc';
type CellValue =
	| string
	| number
	| boolean
	| null
	| undefined
	| ReactNode
	| Date;

// Super Table Row and Column Types
type SuperTableRow = Record<string, CellValue>;
 
type SuperTableColumn = {
	key: string;
	label: string;
	width?: [number, number];
	sortable?: boolean;
	hideable?: boolean;
	highlighted?: string;
	align?: 'left' | 'center' | 'right';
};

type SuperTableColumnOptions = {
	width: [number, number] | undefined;
	sortable: boolean;
	hideable: boolean;
	highlighted: string;
	align?: 'left' | 'center' | 'right';
};
