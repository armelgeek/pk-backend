export type FilterRequestDTO = {
   poste?: string[];
   profileId?: string;
   startDate?: Date;
   endDate?: Date;
   city?: string;
   status?: string[];
   perimeter?: string;
   prizePool?: string;
   buyIn?: string;
   eventType?: string[];
   gameType?: string[];
   player?: boolean;
   cashGame?: boolean;
   tournoi?: boolean;
   satellite?: boolean;
   page?: boolean;
   event?: boolean;
}

/**
 * @typedef {object} FilterRequestDTO
 * @property {array<string>} poste
 * @property {string} profileId
 * @property {Date} startDate
 * @property {Date} endDate
 * @property {string} city
 * @property {array<string>} status
 * @property {string} perimeter
 * @property {string} prizePool
 * @property {string} buyIn
 * @property {array<string>} eventType
 * @property {array<string>} gameType
 * @property {boolean} player
 * @property {boolean} cashGame
 * @property {boolean} tournoi
 * @property {boolean} satellite
 * @property {boolean} page
 * @property {boolean} event
 */

