export type NoteResponseDTO = {
   nom?: string;
   prenom?: string;
   friends?: number;
   city?: string;
   country?: string;
   status?: string;
   shareBy?: string[];
   photo?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} NoteResponseDTO
 * @property {string} nom
 * @property {string} prenom
 * @property {number} friends
 * @property {string} city
 * @property {string} country
 * @property {string} status
 * @property {array<string>} shareBy
 * @property {string} photo
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

