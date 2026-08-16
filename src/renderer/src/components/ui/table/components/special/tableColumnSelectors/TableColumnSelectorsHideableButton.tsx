import { EyeIcon } from 'lucide-react';

type TableColumnSelectorsHideableButtonProps = {
	size?: number;
	strokeWidth?: number;
	className?: {
		tableHeaderCellIconButton?: string;
	};
	onClickHide?: () => void;
};

export const TableColumnSelectorsHideableButton = ({
	className,
	size = 16,
	strokeWidth = 1.8,
	onClickHide,
}: TableColumnSelectorsHideableButtonProps) => {
	return (
		<button
			className={className?.tableHeaderCellIconButton}
			type="button"
			onClick={onClickHide}
		>
			<EyeIcon size={size} strokeWidth={strokeWidth} />
		</button>
	);
};
