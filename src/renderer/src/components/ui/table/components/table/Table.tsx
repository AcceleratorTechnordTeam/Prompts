type TableProps = { className?: string; children: React.ReactNode };

export const Table = ({ children, className = '' }: TableProps) => {
	return <table className={className}>{children}</table>;
};
