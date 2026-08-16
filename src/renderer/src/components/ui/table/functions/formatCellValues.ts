import { isValidElement } from 'react';

export const formatCellValues = (row: SuperTableRow) => {
	Object.entries(row).forEach(([key, value]) => {
		// Traite les nombres
		if (typeof value === 'number') {
			// Vérifie si le nombre a une partie décimale
			if (Number.isInteger(value)) {
				// Nombres entiers - pas besoin d'arrondi
				row[key] = value.toString();
			} else {
				// Nombres à virgule - arrondi à 3 décimales
				row[key] = parseFloat(row[key]).toFixed(3).toString();
			}
		}
		// Traite les booléens
		else if (typeof value === 'boolean') {
			row[key] = value.toString();
		}
		// Traite les dates
		else if (value instanceof Date) {
			row[key] = value.toDateString();
		}
		// Traite null et undefined
		else if (value === null || value === undefined) {
			row[key] = '';
		}
		// Traite les éléments React
		else if (isValidElement(value)) {
			row[key] = value;
		}
		// Cas par défaut pour tout autre type
		else {
			try {
				row[key] = String(value);
			} catch (error) {
				console.warn(
					`Impossible de convertir la valeur pour la clé ${key}`,
					error,
				);
				row[key] = '';
			}
		}
	});
};
