type UseColumnManagerProps = {
	tableID?: string;
	columns?: string[];
	customizableOptions?: Record<string, Partial<SuperTableColumnOptions>>;
	options?: SuperTableColumnOptions;
	translations?: (key: string) => string;
};

const defaultOptions: SuperTableColumnOptions = {
	width: undefined,
	sortable: true,
	highlighted: '',
	hideable: true,
	align: undefined,
};

export const useColumnManager = ({
	tableID,
	columns,
	options = defaultOptions,
	customizableOptions = {},
	translations,
}: UseColumnManagerProps): SuperTableColumn[] => {
	if (!columns?.length || !tableID) return [];

	const uniqueKeyColumns = Array.from(new Set(columns));

	return uniqueKeyColumns.map((column) => {
		const label = translations?.(`${tableID}.${column}`) || column;

		const columnOptions = {
			...options,
			...customizableOptions[column],
		};

		return {
			key: column,
			label,
			...columnOptions,
		};
	});
};
