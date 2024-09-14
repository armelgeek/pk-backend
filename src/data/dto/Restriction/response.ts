export type RestrictionResponseDTO = {
   type?: string;
   limit?: number;
   frequence?: number;
   action?: string;
   functionality?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} RestrictionResponseDTO
 * @property {string} type
 * @property {number} limit
 * @property {number} frequence
 * @property {string} action
 * @property {string} functionality
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

