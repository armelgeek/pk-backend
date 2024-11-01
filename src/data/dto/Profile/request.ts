export type ProfileRequestDTO = {
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
   nbSignalement?: number;
   banDate?: string;
   endDate?: string;
}

/**
 * @typedef {object} ProfileRequestDTO
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
 * @property {number} nbSignalement
 * @property {string} banDate
 * @property {string} endDate
 */

