export type SessionResponseDTO = {
   address?: string;
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
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} SessionResponseDTO
 * @property {string} address
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
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

