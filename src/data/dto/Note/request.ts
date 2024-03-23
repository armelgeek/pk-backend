export type NoteRequestDTO = {
   nom?: string;
   prenom?: string;
   friends?: number;
   city?: string;
   country?: string;
   status?: string;
   shareBy?: string[];
   photo?: string;
}

/**
 * @typedef {object} NoteRequestDTO
 * @property {string} nom
 * @property {string} prenom
 * @property {number} friends
 * @property {string} city
 * @property {string} country
 * @property {string} status
 * @property {array<string>} shareBy
 * @property {string} photo
 */

