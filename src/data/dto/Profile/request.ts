export type ProfileRequestDTO = {
   info?: string;
   photo?: string;
   cover?: string;
   type?: string;
   email?: string;
   phone?: PhoneRequestDTO;
   date_of_birth?: string;
   gender?: string;
   prenom?: string;
   imageUrls?: string[];
   country?: string;
   city?: string;
   children?: string;
   description?: string;
   nom?: string;
}

/**
 * @typedef {object} ProfileRequestDTO
 * @property {string} info
 * @property {string} photo
 * @property {string} cover
 * @property {string} type
 * @property {string} email
 * @property {PhoneRequestDTO} phone
 * @property {string} date_of_birth
 * @property {string} gender
 * @property {string} prenom
 * @property {array<string>} imageUrls
 * @property {string} country
 * @property {string} city
 * @property {string} children
 * @property {string} description
 * @property {string} nom
 */

