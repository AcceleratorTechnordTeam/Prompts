import React from 'react';

type SearchIconProps = {
	size?: number;
	strokeWidth?: number;
};

export const SearchIcon: React.FC<SearchIconProps> = ({
	size = 24,
	strokeWidth = 1.8,
	...props
}) => (
	<svg
		height={size}
		viewBox='0 0 32	26'
		width={size}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		/>
	</svg>
);
