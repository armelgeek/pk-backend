export type AvisResponseDTO = {
   profileId?: string;
   content?: string;
   phone?: PhoneRequestDTO;
   object?: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} AvisResponseDTO
 * @property {string} profileId
 * @property {string} content
 * @property {PhoneRequestDTO} phone
 * @property {string} object
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

