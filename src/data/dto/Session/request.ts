export type SessionRequestDTO = {
   location?: LocationRequestDTO;
   type?: string;
   mode?: string;
   gameType?: string;
   startDate?: Date;
   hourDate?: string;
   dateFin?: Date;
   hourFin?: string;
   buyIn?: number;
   cashOut?: number;
   smallBlind?: string;
   bigBlind?: string;
   note?: string;
}

/**
 * @typedef {object} SessionRequestDTO
 * @property {LocationRequestDTO} location
 * @property {string} type
 * @property {string} mode
 * @property {string} gameType
 * @property {Date} startDate
 * @property {string} hourDate
 * @property {Date} dateFin
 * @property {string} hourFin
 * @property {number} buyIn
 * @property {number} cashOut
 * @property {string} smallBlind
 * @property {string} bigBlind
 * @property {string} note
 */

