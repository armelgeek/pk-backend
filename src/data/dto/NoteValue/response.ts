export type NoteValueResponseDTO = {
   content?: string;
   imageUrl?: string;
   type?: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} NoteValueResponseDTO
 * @property {string} content
 * @property {string} imageUrl
 * @property {string} type
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

