import { ChangeEvent, useContext, useState } from 'react';

import { TableContext } from '../../../context/TableContext';

type TableRowPerPageProps = {
	rowPerPage: number[];
	label?: string;
	placeholder?: string;
	className?: {
		tableRowPerPageContainer?: string;
		tableRowPerPageSelect?: string;
		tableRowPerPageLabel?: string;
		tableRowPerPageOption?: string;
		tableRowPerPageFirstOption?: string;
	};
	maxRowPerPageDefault?: number;
	onMaxRowChange?: (value: number) => void;
};

export const TableRowPerPage: React.FC<TableRowPerPageProps> = ({
	rowPerPage = [5, 10, 15],
	label,
	placeholder,
	className,
	maxRowPerPageDefault = 5,
	onMaxRowChange,
}) => {
	// Contexte
	const { disabled, tableID } = useContext(TableContext);

	const [maxRowPerPage, setMaxRowPerPage] = useState(maxRowPerPageDefault);

	const handleSelectMaxRowChange = (
		event: ChangeEvent<HTMLSelectElement>,
	) => {
		if (!event.target.value) return;
		const maxRowNbs = parseInt(event.target.value) ?? maxRowPerPage;
		setMaxRowPerPage(maxRowNbs);
		onMaxRowChange?.(maxRowNbs);
	};

	return (
		<div className={className?.tableRowPerPageContainer}>
			{label && (
				<span className={className?.tableRowPerPageLabel}>{label}</span>
			)}
			<select
				className={className?.tableRowPerPageSelect}
				disabled={disabled}
				id={`${tableID}-row-per-page-selector`}
				onChange={handleSelectMaxRowChange}
			>
				{placeholder && (
					<option
						className={className?.tableRowPerPageFirstOption}
						value=''
					>
						{placeholder}
					</option>
				)}
				{rowPerPage.map((value, index) => {
					return (
						<option
							className={className?.tableRowPerPageOption}
							data-selected={value === maxRowPerPage}
							key={`${tableID}-row-per-page-selector-option-${index}`}
							value={value}
						>
							{value}
						</option>
					);
				})}
			</select>
		</div>
	);
};
