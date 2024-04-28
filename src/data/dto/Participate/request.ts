export type ParticipateRequestDTO = {
   profileId?: string;
   eventId?: string;
   pageId?: string;
   isMemberClub?: boolean;
   payement?: boolean;
   hourRegistry?: Date;
   hourEliminate?: Date;
   numberTable?: number;
   numberPlace?: number;
   numberBuyIn?: number;
   numberRebuy?: number;
   payout?: number;
   nombreBounty?: number;
   chip?: string;
   gain?: string;
   eliminate?: boolean;
   flag?: string;
   message?: string;
   pseudo?: string;
   phone?: PhoneRequestDTO;
   note?: string;
   photo?: string;
}

/**
 * @typedef {object} ParticipateRequestDTO
 * @property {string} profileId
 * @property {string} eventId
 * @property {string} pageId
 * @property {boolean} isMemberClub
 * @property {boolean} payement
 * @property {Date} hourRegistry
 * @property {Date} hourEliminate
 * @property {number} numberTable
 * @property {number} numberPlace
 * @property {number} numberBuyIn
 * @property {number} numberRebuy
 * @property {number} payout
 * @property {number} nombreBounty
 * @property {string} chip
 * @property {string} gain
 * @property {boolean} eliminate
 * @property {string} flag
 * @property {string} message
 * @property {string} pseudo
 * @property {PhoneRequestDTO} phone
 * @property {string} note
 * @property {string} photo
 */

