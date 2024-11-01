export type BaseInformationResponseDTO = {
   pays?: string;
   email?: string;
   phone?: PhoneRequestDTO;
   date_of_birth?: string;
   gender?: string;
   nom?: string;
   prenom?: string;
   imageUrl?: string;
   country?: string;
   city?: string;
   situation?: string;
   children?: string;
   description?: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} BaseInformationResponseDTO
 * @property {string} pays
 * @property {string} email
 * @property {PhoneRequestDTO} phone
 * @property {string} date_of_birth
 * @property {string} gender
 * @property {string} nom
 * @property {string} prenom
 * @property {string} imageUrl
 * @property {string} country
 * @property {string} city
 * @property {string} situation
 * @property {string} children
 * @property {string} description
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

