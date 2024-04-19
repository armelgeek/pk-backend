export type EventRequestDTO = {
   name?: string;
   participants?: number;
   shortDescription?: string;
   location?: LocationRequestDTO;
   startDate?: Date;
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
   profileId?: string;
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
   massage?: boolean;
   hotel?: boolean;
   qualification?: boolean;
   titleDay?: string;
   startDateDay?: Date;
   startTimeDay?: string;
   lateReg?: string;
   limitRegEntry?: string;
   durationDay?: number;
   levels?: string[];
   duration?: string;
   type?: string;
   limitRegBuy?: string;
   status?: boolean;
   pageId?: string;
   eventId?: string;
   mainTournament?: number;
   nbParticipantPerTable?: number;
   cashBigBlind?: string;
   cashSmallBlind?: string;
   cashEntryMax?: number;
   cashEntryMin?: number;
   days?: string[];
   finish?: boolean;
}

/**
 * @typedef {object} EventRequestDTO
 * @property {string} name
 * @property {number} participants
 * @property {string} shortDescription
 * @property {LocationRequestDTO} location
 * @property {Date} startDate
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
 * @property {string} profileId
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
 * @property {boolean} massage
 * @property {boolean} hotel
 * @property {boolean} qualification
 * @property {string} titleDay
 * @property {Date} startDateDay
 * @property {string} startTimeDay
 * @property {string} lateReg
 * @property {string} limitRegEntry
 * @property {number} durationDay
 * @property {array<string>} levels
 * @property {string} duration
 * @property {string} type
 * @property {string} limitRegBuy
 * @property {boolean} status
 * @property {string} pageId
 * @property {string} eventId
 * @property {number} mainTournament
 * @property {number} nbParticipantPerTable
 * @property {string} cashBigBlind
 * @property {string} cashSmallBlind
 * @property {number} cashEntryMax
 * @property {number} cashEntryMin
 * @property {array<string>} days
 * @property {boolean} finish
 */

