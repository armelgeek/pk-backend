export type DayResponseDTO = {
   qualification?: boolean;
   titleDay?: string;
   startDateDay?: string;
   startTimeDay?: string;
   lateReg?: string;
   limitRegEntry?: string;
   limitRegBuy?: string;
   durationDay?: string;
   nbTableDay?: string;
   duration?: string;
   levels?: string[];
   photos?: string[];
   videos?: string[];
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} DayResponseDTO
 * @property {boolean} qualification
 * @property {string} titleDay
 * @property {string} startDateDay
 * @property {string} startTimeDay
 * @property {string} lateReg
 * @property {string} limitRegEntry
 * @property {string} limitRegBuy
 * @property {string} durationDay
 * @property {string} nbTableDay
 * @property {string} duration
 * @property {array<string>} levels
 * @property {array<string>} photos
 * @property {array<string>} videos
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

