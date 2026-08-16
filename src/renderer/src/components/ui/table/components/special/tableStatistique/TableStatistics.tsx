type TableStatisticsProps = {
	rows?: SuperTableRow[];
	className?: {
		TableStatisticsContainer?: string;
		TableStatisticsRow?: string;
	};
};

export const TableStatistics = ({
	rows = [],
	className,
}: TableStatisticsProps) => {
	const totalRows = rows.length;

	return (
		<div className={className?.TableStatisticsContainer}>
			<span className={className?.TableStatisticsRow}>
				{totalRows} rows
			</span>
		</div>
	);
};
