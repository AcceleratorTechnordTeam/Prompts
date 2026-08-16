export const getSafeFontSize = (fontSize: number) => {
	if (
		!fontSize ||
		fontSize <= 0 ||
		fontSize > 10 ||
		typeof fontSize !== 'number'
	)
		return 1;
	
return `${fontSize}rem`;
};
