import { useContext } from 'react';
import { TableContext } from '../../../context/TableContext';
import { ChevronLeftIcon } from '../../../icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../../../icons/ChevronRightIcon';

type TablePaginationProps = {
	currentPage?: number;
	totalPages?: number;
	size?: number;
	strokeWidth?: number;
	className?: {
		tablePaginationContainer?: string;
		tablePaginationButton?: string;
		tablePaginationValue?: string;
	};
	onPageChange?: (page: number) => void;
};

export const TablePagination = ({
	currentPage = 0,
	totalPages = 1,
	className,
	size = 24,
	strokeWidth = 1.8,
	onPageChange,
}: TablePaginationProps) => {
	const { disabled } = useContext(TableContext);

	const handlePreviousPage = () => {
		if (currentPage > 0) {
			onPageChange?.(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages - 1) {
			onPageChange?.(currentPage + 1);
		}
	};

	return (
		<div className={className?.tablePaginationContainer}>
			<button
				aria-label='Preview page'
				className={className?.tablePaginationButton}
				disabled={currentPage === 0 || disabled}
				onClick={handlePreviousPage}
			>
				<ChevronLeftIcon size={size} strokeWidth={strokeWidth} />
			</button>

			{disabled ? null : (
				<div className={className?.tablePaginationValue}>
					<span>{currentPage + 1}</span>
					<span>/</span>
					<span>{totalPages}</span>
				</div>
			)}

			<button
				aria-label='Next page'
				className={className?.tablePaginationButton}
				disabled={currentPage === totalPages - 1 || disabled}
				onClick={handleNextPage}
			>
				<ChevronRightIcon size={size} strokeWidth={strokeWidth} />
			</button>
		</div>
	);
};
