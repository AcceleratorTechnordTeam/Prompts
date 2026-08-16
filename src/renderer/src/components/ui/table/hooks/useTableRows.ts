import { useMemo } from 'react';
import { formatCellValues } from '../functions/formatCellValues';

type RowsValidationResult = {
	safeRows: SuperTableRow[];
	idsList: string[];
	isValid: boolean;
};

// Hook pour valider et traiter les lignes d'une table.

//- Vérification du format du tableau
//- Validation de chaque ligne comme objet
//- Vérification des valeurs null/undefined (renvoie une chaîne vide)

export const useTableRows = (rows?: SuperTableRow[]): RowsValidationResult => {
    return useMemo(() => {
        // Early return pour les cas invalides
        if (!rows?.length) {
            return { safeRows: [], idsList: [], isValid: !rows };
        }

        try {
            const safeRows: SuperTableRow[] = [];
            const idsList: string[] = [];

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                
                if (!row || typeof row !== 'object') {
                    throw new Error(`Invalid row at index ${i}`);
                }

                formatCellValues(row);
                safeRows.push(row);
                idsList.push(row.ID);
            }

            return { safeRows, idsList, isValid: true };
        } catch (error) {
            console.error('Table validation error:', error);
            return { safeRows: [], idsList: [], isValid: false };
        }
    }, [rows]);
};
