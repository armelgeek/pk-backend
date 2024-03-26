export type PartenariatRequestDTO = {
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
}

/**
 * @typedef {object} PartenariatRequestDTO
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
 */

