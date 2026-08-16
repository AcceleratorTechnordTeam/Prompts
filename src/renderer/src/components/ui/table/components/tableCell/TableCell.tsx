import { useContext } from 'react';

import { TableContext } from '../../context/TableContext';
import { getMinMaxCellWidth } from '../../functions/getMinMaxCellWidth';
import { getSafeFontSize } from '../../functions/getSafeFontSize';

type TableCellProps = {
	children: React.ReactNode;
	highlighted?: string;
	className?: string;
	cellWidth?: [number, number];
};

export const TableCell = ({
	children = '',
	highlighted = '',
	className = '',
	cellWidth,
}: TableCellProps) => {
	const { fontSize } = useContext(TableContext);

	const cellWidthStyle = getMinMaxCellWidth(cellWidth);

	const style = {
		color: highlighted,
		fontSize: getSafeFontSize(fontSize),
		...cellWidthStyle,
	};

	return (
		<td className={className} style={{ ...style }}>
			{children}
		</td>
	);
};
