import { useContext } from 'react';

import { TableContext } from '../../../context/TableContext';

type TableColumnSelectorsProps = {
	columns: SuperTableColumn[];
	label?: string;
	placeholder?: string;
	className?: {
		tableColumnSelectorsContainer?: string;
		tableColumnSelectorsLabel?: string;
		tableColumnSelectorsSelect?: string;
		tableColumnSelectorsOption?: string;
		tableColumnSelectorsFirstOption?: string;
	};
	hideableColumnIDs?: string[];
	onHideColumn?: (columnID: string) => void;
};

export const TableColumnSelectors = ({
	columns,
	label,
	placeholder,
	className,
	hideableColumnIDs,
	onHideColumn,
}: TableColumnSelectorsProps) => {
	const { disabled, tableID } = useContext(TableContext);

	const handleChangeColumnToHide = (columnID: string) => {
		if (!columnID) return;
		onHideColumn?.(columnID);
	};

	return (
		<div className={className?.tableColumnSelectorsContainer}>
			{label && (
				<label
					className={className?.tableColumnSelectorsLabel}
					htmlFor={`${tableID}-column-selector`}
				>
					{label}
				</label>
			)}
			<select
				className={className?.tableColumnSelectorsSelect}
				disabled={disabled}
				id={`${tableID}-column-selector`}
				onChange={(e) => handleChangeColumnToHide(e.target.value)}
			>
				{placeholder && (
					<option
						className={className?.tableColumnSelectorsFirstOption}
						value=''
					>
						{placeholder}
					</option>
				)}
				{columns.map((col) => {
					const isHideable = col?.hideable;
					if (isHideable)
						return (
							<option
								className={
									className?.tableColumnSelectorsOption
								}
								data-selected={hideableColumnIDs?.includes(
									col.key,
								)}
								key={`${tableID}-column-selector-option-${col.key}`}
								value={col.key}
							>
								{col.label}
							</option>
						);

					return null;
				})}
			</select>
		</div>
	);
};
