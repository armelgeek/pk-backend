export type IdentityVerificationResponseDTO = {
   profileId?: string;
   verifications?: string[];
   validate?: boolean;
   description?: string;
   pageId?: string;
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
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

