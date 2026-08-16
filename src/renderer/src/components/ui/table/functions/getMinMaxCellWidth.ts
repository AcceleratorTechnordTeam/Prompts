export const getMinMaxCellWidth = (cellWidth: [number, number] | undefined) => {
	if (
		!cellWidth ||
		cellWidth?.length !== 2 ||
		!cellWidth?.at(0) ||
		!cellWidth?.at(1)
	)
		return { width: 'auto' };

	const maxValue = Math.max(...cellWidth);
	const minValue = Math.min(...cellWidth);

	if (maxValue === minValue)
		return { minWidth: `${maxValue}px`, maxWidth: `${maxValue}px` };

	return { minWidth: `${minValue}px`, maxWidth: `${maxValue}px` };
};
