import React from 'react';

export const MinusIcon: React.FC<IconsProps> = ({
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
			d='M5 12h14'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		/>
	</svg>
);
