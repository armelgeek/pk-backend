export type PartenariatResponseDTO = {
   photo?: string;
   name?: string;
   title?: string;
   hendonmob?: number;
   rangAllTimeMoney?: string;
   bracelet?: number;
   job?: string;
   socialNetwork?: string[];
   verifUser?: string;
   verifPartenariat?: string;
   description?: string;
   numberPhone?: PhoneRequestDTO;
   message?: string;
   profileId?: string;
   entityVerif?: string;
   type?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} PartenariatResponseDTO
 * @property {string} photo
 * @property {string} name
 * @property {string} title
 * @property {number} hendonmob
 * @property {string} rangAllTimeMoney
 * @property {number} bracelet
 * @property {string} job
 * @property {array<string>} socialNetwork
 * @property {string} verifUser
 * @property {string} verifPartenariat
 * @property {string} description
 * @property {PhoneRequestDTO} numberPhone
 * @property {string} message
 * @property {string} profileId
 * @property {string} entityVerif
 * @property {string} type
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

