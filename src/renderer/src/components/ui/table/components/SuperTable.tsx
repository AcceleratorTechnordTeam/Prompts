import { ReactNode, useMemo } from 'react';

import { TableContext } from '../context/TableContext';

type SuperTableProps = {
	disabled?: boolean;
	isLoading?: boolean;
	selectedRowIDs?: string[];
	maxSelectableRows: number | null;
	children: ReactNode;
	className?: string;
	currentSortDirection?: SortDirection;
	currentSortColumn?: string;
	fontSize: number;
	tableID: string;
	isAllSelected: boolean;
};

export const SuperTable: React.FC<SuperTableProps> = ({
	disabled,
	isLoading,
	className,
	children,
	maxSelectableRows,
	selectedRowIDs,
	currentSortDirection,
	currentSortColumn,
	fontSize,
	tableID,
	isAllSelected,
}) => {
	const contextValue = useMemo(
		() => ({
			disabled,
			isLoading,
			maxSelectableRows,
			selectedRowIDs,
			currentSortDirection,
			currentSortColumn,
			fontSize,
			tableID,
			isAllSelected,
		}),
		[
			disabled,
			isLoading,
			maxSelectableRows,
			selectedRowIDs,
			currentSortDirection,
			currentSortColumn,
			fontSize,
			tableID,
			isAllSelected,
		],
	);

	return (
		<TableContext.Provider value={contextValue}>
			<div className={className} data-is-empty={disabled}>
				{children}
			</div>
		</TableContext.Provider>
	);
};
