import React from 'react';

export const ChevronRightIcon: React.FC<IconsProps> = ({
	size = 22,
	strokeWidth = 2,
	...props
}) => (
	<svg
		height={size}
		viewBox='0 0 24 24'
		width={size}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m9 18l6-6l-6-6'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		/>
	</svg>
);
