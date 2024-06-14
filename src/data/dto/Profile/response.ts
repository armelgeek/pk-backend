export type ProfileResponseDTO = {
   info?: string;
   photo?: string;
   cover?: string;
   type?: string;
   email?: string;
   phone?: PhoneRequestDTO;
   date_of_birth?: Date;
   gender?: string;
   prenom?: string;
   imageUrls?: string[];
   country?: string;
   city?: string;
   children?: string;
   description?: string;
   nom?: string;
   verification?: string;
   currency?: CurrencyRequestDTO;
   friends?: string[];
   followed?: string[];
   situation?: string;
   location?: LocationRequestDTO;
   filter?: string;
   verified?: boolean;
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
 * @property {PhoneRequestDTO} phone
 * @property {Date} date_of_birth
 * @property {string} gender
 * @property {string} prenom
 * @property {array<string>} imageUrls
 * @property {string} country
 * @property {string} city
 * @property {string} children
 * @property {string} description
 * @property {string} nom
 * @property {string} verification
 * @property {CurrencyRequestDTO} currency
 * @property {array<string>} friends
 * @property {array<string>} followed
 * @property {string} situation
 * @property {LocationRequestDTO} location
 * @property {string} filter
 * @property {boolean} verified
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

