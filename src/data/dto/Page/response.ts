export type PageResponseDTO = {
   photoCover?: string;
   photo?: string;
   name?: string;
   country?: string;
   phone?: string;
   address?: string;
   email?: string;
   description?: string;
   profileId?: string;
   type?: string;
   verifications?: string[];
   pageId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} PageResponseDTO
 * @property {string} photoCover
 * @property {string} photo
 * @property {string} name
 * @property {string} country
 * @property {string} phone
 * @property {string} address
 * @property {string} email
 * @property {string} description
 * @property {string} profileId
 * @property {string} type
 * @property {array<string>} verifications
 * @property {string} pageId
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

