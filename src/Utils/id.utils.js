// src/Utils/id.utils.js

/**
 * Extrait l'ID de la chaîne de requête de l'URL.
 * @param {URLSearchParams} searchParams - Les paramètres de recherche de l'URL.
 * @returns {string|null} - L'ID extrait ou null si non trouvé.
 */
export const extractIdFromUrl = (searchParams) => {
    try {
        // Récupère la chaîne de requête après le '?'
        const queryString = searchParams.toString();

        if (queryString) {
            // Extrait l'ID directement du début de la chaîne de requête
            const id = queryString.split('-')[0];
            console.log('ID : ', id);
            return id;
        }

        console.error('ID parameter not found in URL');
        return null;
    } catch (error) {
        console.error('Error extracting ID from URL:', error);
        return null;
    }
};
