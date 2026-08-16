import { ChangeEvent, useContext } from 'react';

import { TableContext } from '../../../context/TableContext';
import { PencilIcon } from '../../../icons/PencilIcon';
import { ResetIcon } from '../../../icons/ResetIcon';

type TableSearchBarProps = {
	placeholder?: string;
	value?: string;
	iconSize?: number;
	iconStrokeWidth?: number;
	className?: {
		tableSearchBarContainer?: string;
		tableSearchButton?: string;
		tableSearchBarInput?: string;
	};
	onSearch?: (value: string) => void;
	onReset?: () => void;
};

export const TableSearchBar = ({
	placeholder = '',
	className,
	value,
	iconSize = 18,
	iconStrokeWidth = 1.8,
	onSearch,
	onReset,
}: TableSearchBarProps) => {
	// Contexte
	const { disabled, isLoading } = useContext(TableContext);

	// Event handlers
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value || '';
		onSearch?.(value);
	};

	return (
		<div className={className?.tableSearchBarContainer}>
			<button
				className={className?.tableSearchButton}
				data-is-touched={!!value}
				type='button'
				onClick={onReset}
			>
				{value ? (
					<ResetIcon size={iconSize} strokeWidth={iconStrokeWidth} />
				) : (
					<PencilIcon size={iconSize} strokeWidth={iconStrokeWidth} />
				)}
			</button>
			<input
				className={className?.tableSearchBarInput}
				disabled={disabled || isLoading}
				placeholder={placeholder}
				type={'text'}
				value={value}
				onChange={handleSearch}
			/>
		</div>
	);
};
