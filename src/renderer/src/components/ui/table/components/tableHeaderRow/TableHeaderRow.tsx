type TableHeaderRowProps = {
	children: React.ReactNode;
	className?: string;
};

export const TableHeaderRow = ({
	children,
	className = '',
}: TableHeaderRowProps) => {
	return <tr className={className}>{children}</tr>;
};
