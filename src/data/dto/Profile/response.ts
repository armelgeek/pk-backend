export type ProfileResponseDTO = {
   info?: string;
   photo?: string;
   cover?: string;
   type?: string;
   email?: string;
   phone?: string;
   date_of_birth?: string;
   gender?: string;
   prenom?: string;
   imageUrls?: string[];
   country?: string;
   city?: string;
   children?: string;
   description?: string;
   nom?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} ProfileResponseDTO
 * @property {string} info
 * @property {string} photo
 * @property {string} cover
 * @property {string} type
 * @property {string} email
 * @property {string} phone
 * @property {string} date_of_birth
 * @property {string} gender
 * @property {string} prenom
 * @property {array<string>} imageUrls
 * @property {string} country
 * @property {string} city
 * @property {string} children
 * @property {string} description
 * @property {string} nom
 * @property {string} id
 * @property {Date} updatedAt
 * @property {Date} createdAt
 */

