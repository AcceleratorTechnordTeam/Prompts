// Filtre les données d'un tableau en fonction des IDs fournis.
export const getColumnByIDs = (
	columns: SuperTableColumn[],
	IDs: string[],
): SuperTableColumn[] => {
	if (!IDs || IDs.length === 0) return [];
	if (!columns || columns.length === 0) return [];
	
return columns.filter((col) => !IDs.includes(col.key));
};
