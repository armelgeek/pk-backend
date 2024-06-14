export type IdentityVerificationRequestDTO = {
   profileId?: string;
   verifications?: string[];
   validate?: boolean;
   description?: string;
   pageId?: string;
   badge?: string;
   partenariatId?: string;
   partnerId?: string;
   type?: string;
   status?: string;
   commentaire?: string;
}

/**
 * @typedef {object} IdentityVerificationRequestDTO
 * @property {string} profileId
 * @property {array<string>} verifications
 * @property {boolean} validate
 * @property {string} description
 * @property {string} pageId
 * @property {string} badge
 * @property {string} partenariatId
 * @property {string} partnerId
 * @property {string} type
 * @property {string} status
 * @property {string} commentaire
 */

