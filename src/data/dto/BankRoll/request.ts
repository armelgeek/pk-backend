export type BankRollRequestDTO = {
   name?: string;
   capital?: number;
   devise?: string;
   description?: string;
   sessions?: string[];
   profileId?: string;
}

/**
 * @typedef {object} BankRollRequestDTO
 * @property {string} name
 * @property {number} capital
 * @property {string} devise
 * @property {string} description
 * @property {array<string>} sessions
 * @property {string} profileId
 */

