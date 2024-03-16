export type IdentityVerificationRequestDTO = {
   profileId?: string;
   verifications?: string[];
   validate?: boolean;
   description?: string;
   pageId?: string;
   badge?: string;
}

/**
 * @typedef {object} IdentityVerificationRequestDTO
 * @property {string} profileId
 * @property {array<string>} verifications
 * @property {boolean} validate
 * @property {string} description
 * @property {string} pageId
 * @property {string} badge
 */

