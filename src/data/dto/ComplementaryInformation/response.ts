export type ComplementaryInformationResponseDTO = {
   nationality?: string;
   langue?: string;
   email?: string;
   phone?: PhoneRequestDTO;
   job?: string;
   headonmob?: number;
   nbTitle?: number;
   rangTimeMoney?: string;
   period?: string;
   nbBracelet?: number;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} ComplementaryInformationResponseDTO
 * @property {string} nationality
 * @property {string} langue
 * @property {string} email
 * @property {PhoneRequestDTO} phone
 * @property {string} job
 * @property {number} headonmob
 * @property {number} nbTitle
 * @property {string} rangTimeMoney
 * @property {string} period
 * @property {number} nbBracelet
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

