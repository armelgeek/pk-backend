export type CasinoProfileAdditionalResponseDTO = {
   monday?: string;
   tuesday?: string;
   wednesday?: string;
   thursday?: string;
   friday?: string;
   saturday?: string;
   sunday?: string;
   members?: number;
   cardMember?: boolean;
   restaurant?: boolean;
   hotel?: boolean;
   parking?: boolean;
   sponsors?: string[];
   parteners?: string[];
   links?: string[];
   profileId?: string;
   type?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} CasinoProfileAdditionalResponseDTO
 * @property {string} monday
 * @property {string} tuesday
 * @property {string} wednesday
 * @property {string} thursday
 * @property {string} friday
 * @property {string} saturday
 * @property {string} sunday
 * @property {number} members
 * @property {boolean} cardMember
 * @property {boolean} restaurant
 * @property {boolean} hotel
 * @property {boolean} parking
 * @property {array<string>} sponsors
 * @property {array<string>} parteners
 * @property {array<string>} links
 * @property {string} profileId
 * @property {string} type
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

