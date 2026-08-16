import React from 'react';

export const EyeIcon: React.FC<IconsProps> = ({
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
			<path d='M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7Z' />
			<circle cx='12' cy='12' r='3' />
		</g>
	</svg>
);
