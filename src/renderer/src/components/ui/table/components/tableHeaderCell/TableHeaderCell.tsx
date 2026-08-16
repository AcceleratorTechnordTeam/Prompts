import { useContext } from 'react';

import { TableContext } from '../../context/TableContext';
import { getMinMaxCellWidth } from '../../functions/getMinMaxCellWidth';
import { getSafeFontSize } from '../../functions/getSafeFontSize';

import { TableHeaderCellSortableButton } from './TableHeaderCellSortableButton';

type TableHeaderCellProps = {
	children: React.ReactNode;
	highlighted?: string;
	isSortable?: boolean;
	columnID?: string;
	align?: 'left' | 'center' | 'right';
	className?: {
		tableHeaderCell?: string;
		tableHeaderCellContent?: string;
		tableHeaderCellIconButton?: string;
	};
	cellWidth?: [number, number];
	handleSort?: () => void;
};

export const TableHeaderCell = ({
	children,
	highlighted = '',
	className,
	isSortable = false,
	columnID,
	align,
	cellWidth,
	handleSort,
}: TableHeaderCellProps) => {
	const { currentSortDirection, currentSortColumn, fontSize } =
		useContext(TableContext);

	const cellWidthStyle = getMinMaxCellWidth(cellWidth);

	const style = {
		color: highlighted,
		fontSize: getSafeFontSize(fontSize),
		justifyContent: align,
		...cellWidthStyle,
	};

	return (
		<th className={className?.tableHeaderCell}>
			<div
				className={className?.tableHeaderCellContent}
				style={{ ...style }}
			>
				{children}
				{isSortable && (
					<TableHeaderCellSortableButton
						className={className?.tableHeaderCellIconButton}
						currentSortDirection={currentSortDirection}
						isCurrentlySorted={columnID === currentSortColumn}
						onClickSort={handleSort}
					/>
				)}
			</div>
		</th>
	);
};
