import { useContext } from 'react';

import { TableContext } from '../../context/TableContext';
import { CheckIcon } from '../../icons/CheckIcon';

type TableHeaderCheckbox = {
	className?: {
		tableHeaderCell?: string;
		tableCheckboxContent?: string;
		tableHeaderCheckbox?: string;
	};
	handleCheck?: () => void;
};

export const TableHeaderCheckbox = ({
	className,
	handleCheck,
}: TableHeaderCheckbox) => {
	const { maxSelectableRows, isAllSelected } = useContext(TableContext);

	const handleCheckbox = () => {
		if (maxSelectableRows === 0) {
			handleCheck?.();
		}
	};

	if (maxSelectableRows === null) return null;

	return (
		<th className={className?.tableHeaderCell}>
			<div className={className?.tableCheckboxContent}>
				<button
					className={className?.tableHeaderCheckbox}
					data-checked={isAllSelected}
					disabled={maxSelectableRows !== 0}
					type='button'
					onClick={handleCheckbox}
				>
					{isAllSelected && (
						<CheckIcon
							color='var(--background)'
							size={16}
							strokeWidth={3}
						/>
					)}
				</button>
			</div>
		</th>
	);
};
