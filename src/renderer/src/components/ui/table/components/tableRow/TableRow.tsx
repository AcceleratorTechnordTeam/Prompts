import { ReactNode, useContext } from 'react';

import { TableContext } from '../../context/TableContext';

type TableRowProps = {
	children: ReactNode;
	className?: string;
	rowID?: string;
	onSelectedRow: () => void;
};

export const TableRow = ({
	children,
	className = '',
	rowID = '',
	onSelectedRow,
}: TableRowProps) => {
	const { selectedRowIDs, maxSelectableRows } = useContext(TableContext);

	const isSelectable = maxSelectableRows !== null;

	const handleSelectedRow = (
		event: React.MouseEvent<HTMLTableRowElement>,
	) => {
		event.stopPropagation();
		onSelectedRow();
	};

	return (
		<tr
			className={className}
			data-selectable={isSelectable}
			data-selected={selectedRowIDs?.includes(rowID)}
			onClick={handleSelectedRow}
		>
			{children}
		</tr>
	);
};
