export type SoftbanResponseDTO = {
   niveau?: number;
   titre?: string;
   duration?: number;
   restrictions?: string[];
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} SoftbanResponseDTO
 * @property {number} niveau
 * @property {string} titre
 * @property {number} duration
 * @property {array<string>} restrictions
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

