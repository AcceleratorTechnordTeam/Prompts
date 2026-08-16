import React from 'react';

export const GridIcon: React.FC<IconsProps> = ({
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
		<g
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={strokeWidth}
		>
			<rect height='18' rx='2' width='18' x='3' y='3' />
			<path d='M3 12h18m-9-9v18' />
		</g>
	</svg>
);
