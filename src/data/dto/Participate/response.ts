export type ParticipateResponseDTO = {
   profileId?: string;
   eventId?: string;
   pageId?: string;
   isMemberClub?: boolean;
   payement?: boolean;
   hourRegistry?: Date;
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
   dateEliminate?: Date;
   hourEliminate?: Date;
   dateRegistry?: Date;
   country?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} ParticipateResponseDTO
 * @property {string} profileId
 * @property {string} eventId
 * @property {string} pageId
 * @property {boolean} isMemberClub
 * @property {boolean} payement
 * @property {Date} hourRegistry
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
 * @property {Date} dateEliminate
 * @property {Date} hourEliminate
 * @property {Date} dateRegistry
 * @property {string} country
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

