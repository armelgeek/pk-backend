export type PageRequestDTO = {
   photoCover?: string;
   photo?: string;
   name?: string;
   country?: string;
   phone?: PhoneRequestDTO;
   address?: string;
   email?: string;
   description?: string;
   profileId?: string;
   type?: string;
   verification?: string;
   pageId?: string;
   additionalInfo?: string;
   location?: LocationRequestDTO;
}

/**
 * @typedef {object} PageRequestDTO
 * @property {string} photoCover
 * @property {string} photo
 * @property {string} name
 * @property {string} country
 * @property {PhoneRequestDTO} phone
 * @property {string} address
 * @property {string} email
 * @property {string} description
 * @property {string} profileId
 * @property {string} type
 * @property {string} verification
 * @property {string} pageId
 * @property {string} additionalInfo
 * @property {LocationRequestDTO} location
 */

