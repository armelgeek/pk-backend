export type BankRollResponseDTO = {
   name?: string;
   capital?: number;
   devise?: string;
   description?: string;
   sessions?: string[];
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} BankRollResponseDTO
 * @property {string} name
 * @property {number} capital
 * @property {string} devise
 * @property {string} description
 * @property {array<string>} sessions
 * @property {string} id
 * @property {Date} updatedAt
 * @property {Date} createdAt
 */

