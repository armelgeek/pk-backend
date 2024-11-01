export type ComplementaryInformationRequestDTO = {
   nationality?: string;
   langue?: string;
   email?: string;
   phone?: PhoneRequestDTO;
   job?: string;
   headonmob?: number;
   nbTitle?: number;
   rangTimeMoney?: string;
   period?: Date;
   nbBracelet?: number;
}

/**
 * @typedef {object} ComplementaryInformationRequestDTO
 * @property {string} nationality
 * @property {string} langue
 * @property {string} email
 * @property {PhoneRequestDTO} phone
 * @property {string} job
 * @property {number} headonmob
 * @property {number} nbTitle
 * @property {string} rangTimeMoney
 * @property {Date} period
 * @property {number} nbBracelet
 */

