import React from 'react';

export const PencilIcon: React.FC<IconsProps> = ({
	size = 22,
	strokeWidth = 2,
	...props
}) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		height={size}
		width={size}
		viewBox='0 0 24 24'
		{...props}
	>
		<path
			d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5Zm-2 2l4 4'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		/>
	</svg>
);
