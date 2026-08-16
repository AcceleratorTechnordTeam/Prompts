import { useContext } from 'react';

import { TableContext } from '../../../context/TableContext';
import { exportToCSV } from '../../../functions/exportToCSV';
import { DownloadCSVIcon } from '../../../icons/DownloadCSVIcon';

type TableCSVExportButtonProps = {
	rows?: SuperTableRow[];
	className?: string;
	iconSize?: number;
	iconStrokeWidth?: number;
};

export const TableCSVExportButton: React.FC<TableCSVExportButtonProps> = ({
	rows = [],
	className,
	iconSize = 20,
	iconStrokeWidth = 1.8,
}) => {
	const { tableID } = useContext(TableContext);

	const handleExportToCSV = () => {
		if (!rows || rows.length === 0) return;

		exportToCSV(rows, tableID);
	};

	return (
		<button className={className} type='button' onClick={handleExportToCSV}>
			<DownloadCSVIcon size={iconSize} strokeWidth={iconStrokeWidth} />
		</button>
	);
};
