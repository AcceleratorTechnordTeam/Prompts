export const exportToCSV = (
	data: SuperTableRow[],
	fileName: string = 'table.csv',
) => {
	if (!data || data.length === 0) {
		console.warn('No data to export');
		
return;
	}

	// Récupérer les en-têtes à partir des clés du premier objet
	const headers = data[0] ? Object.keys(data[0]) : [];

	// Convertir les en-têtes en une ligne CSV
	const csvHeaders = headers.join(';') + '\n';

	// Convertir les données en lignes CSV
	const csvRows = data
		.map((row) =>
			headers
				.map((header) => {
					let cell = row[header] ?? '';
					if (typeof cell === 'string') {
						cell = cell.replace(/"/g, '""'); // Échapper les guillemets doubles
						if (cell.includes(';') || cell.includes('\n')) {
							cell = `"${cell}"`; // Encadrer avec des guillemets si nécessaire
						}
					}
					
return cell;
				})
				.join(';'),
		)
		.join('\n');

	// Fusionner les en-têtes et les lignes
	const csvContent = csvHeaders + csvRows;

	// Créer un Blob contenant le CSV
	const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

	// Créer un lien de téléchargement
	const link = document.createElement('a');
	const url = URL.createObjectURL(blob);
	link.setAttribute('href', url);
	link.setAttribute('download', fileName);
	document.body.appendChild(link);

	// Déclencher le téléchargement
	link.click();

	// Nettoyer l'URL créée
	setTimeout(() => {
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}, 100);
};
