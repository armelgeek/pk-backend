export type IdentityVerificationResponseDTO = {
   profileId?: string;
   verifications?: string[];
   validate?: boolean;
   description?: string;
   pageId?: string;
   badge?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} IdentityVerificationResponseDTO
 * @property {string} profileId
 * @property {array<string>} verifications
 * @property {boolean} validate
 * @property {string} description
 * @property {string} pageId
 * @property {string} badge
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

