import { useContext } from 'react';

import { TableContext } from '../../context/TableContext';
import { CheckIcon } from '../../icons/CheckIcon';

type TableCheckbox = {
	className?: {
		tableCheckboxCell?: string;
		tableCheckbox?: string;
		tableCheckboxContent?: string;
	};
	rowID?: string;
};

export const TableCheckbox: React.FC<TableCheckbox> = ({
	className,
	rowID = '',
}) => {
	const { maxSelectableRows, selectedRowIDs } = useContext(TableContext);

	const isSelected = selectedRowIDs?.includes(rowID);

	if (maxSelectableRows === null) return null;

	return (
		<td className={className?.tableCheckboxCell}>
			<div className={className?.tableCheckboxContent}>
				<span
					className={className?.tableCheckbox}
					data-checked={isSelected}
				>
					{isSelected && (
						<CheckIcon
							color='var(--background)'
							size={16}
							strokeWidth={3}
						/>
					)}
				</span>
			</div>
		</td>
	);
};
