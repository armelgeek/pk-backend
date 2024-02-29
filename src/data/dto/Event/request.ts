export type EventRequestDTO = {
   name?: string;
   participants?: number;
   shortDescription?: string;
   location?: string;
   startDate?: string;
   startTime?: string;
   contact?: string;
   description?: string;
   parking?: boolean;
   restauration?: boolean;
   reglements?: string;
   photos?: string[];
   videos?: string[];
   private?: boolean;
   userList?: string[];
   profile?: string;
   nbDay?: number;
   nbGames?: number;
   startStack?: string;
   nbRebu?: number;
   devise?: string;
   latReg?: string;
   dealer?: boolean;
   timeClock?: boolean;
   reEntry?: boolean;
   memberCard?: boolean;
   prizePool?: string;
   bounty?: boolean;
   bountyText?: string;
   othersReward?: string;
   tournamentType?: string;
   gameType?: string;
   jackpot?: boolean;
   jackpotText?: string;
   buyin?: string;
   bonus?: boolean;
   bonusText?: string;
   addon?: boolean;
   addonPrice?: string;
   nbParticipantMax?: string;
   massage?: string;
   hotel?: boolean;
   qualification?: boolean;
   titleDay?: string;
   startDateDay?: string;
   startTimeDay?: string;
   lateReg?: string;
   limitRegEntry?: string;
   durationDay?: number;
   levels?: string[];
   duration?: string;
   type?: string;
   limitRegBuy?: string;
}

/**
 * @typedef {object} EventRequestDTO
 * @property {string} name
 * @property {number} participants
 * @property {string} shortDescription
 * @property {string} location
 * @property {string} startDate
 * @property {string} startTime
 * @property {string} contact
 * @property {string} description
 * @property {boolean} parking
 * @property {boolean} restauration
 * @property {string} reglements
 * @property {array<string>} photos
 * @property {array<string>} videos
 * @property {boolean} private
 * @property {array<string>} userList
 * @property {string} profile
 * @property {number} nbDay
 * @property {number} nbGames
 * @property {string} startStack
 * @property {number} nbRebu
 * @property {string} devise
 * @property {string} latReg
 * @property {boolean} dealer
 * @property {boolean} timeClock
 * @property {boolean} reEntry
 * @property {boolean} memberCard
 * @property {string} prizePool
 * @property {boolean} bounty
 * @property {string} bountyText
 * @property {string} othersReward
 * @property {string} tournamentType
 * @property {string} gameType
 * @property {boolean} jackpot
 * @property {string} jackpotText
 * @property {string} buyin
 * @property {boolean} bonus
 * @property {string} bonusText
 * @property {boolean} addon
 * @property {string} addonPrice
 * @property {string} nbParticipantMax
 * @property {string} massage
 * @property {boolean} hotel
 * @property {boolean} qualification
 * @property {string} titleDay
 * @property {string} startDateDay
 * @property {string} startTimeDay
 * @property {string} lateReg
 * @property {string} limitRegEntry
 * @property {number} durationDay
 * @property {array<string>} levels
 * @property {string} duration
 * @property {string} type
 * @property {string} limitRegBuy
 */

