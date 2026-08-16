type TableHeaderProps = {
	children: React.ReactNode;
	className?: string;
};

export const TableHeader = ({ children, className = '' }: TableHeaderProps) => {
	return <thead className={className}>{children}</thead>;
};
