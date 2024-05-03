export type PartenerRequestDTO = {
   name?: string;
   logo?: string;
   description?: string;
   phone?: PhoneRequestDTO;
   verification?: string;
   link?: string[];
   profileId?: string;
   price?: number;
   autoRenewed?: boolean;
   subscriptionStripeId?: string;
   title?: string;
   hendonmob?: number;
   rangAllTimeMoney?: string;
   bracelet?: number;
   job?: string;
   type?: string;
   message?: string;
}

/**
 * @typedef {object} PartenerRequestDTO
 * @property {string} name
 * @property {string} logo
 * @property {string} description
 * @property {PhoneRequestDTO} phone
 * @property {string} verification
 * @property {array<string>} link
 * @property {string} profileId
 * @property {number} price
 * @property {boolean} autoRenewed
 * @property {string} subscriptionStripeId
 * @property {string} title
 * @property {number} hendonmob
 * @property {string} rangAllTimeMoney
 * @property {number} bracelet
 * @property {string} job
 * @property {string} type
 * @property {string} message
 */

