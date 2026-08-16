type TableTitleProps = {
	title?: string;
	className?: {
		tableTitleContainer?: string;
		tableTitle?: string;
	};
};

export const TableTitle = ({ title, className }: TableTitleProps) => {
	if (!title) return null;

	return (
		<div className={className?.tableTitleContainer}>
			<span className={className?.tableTitle}>{title}</span>
		</div>
	);
};
