export type DonationResponseDTO = {
   media?: string;
   collectedFunds?: number;
   donorsCount?: number[];
   profileId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} DonationResponseDTO
 * @property {string} media
 * @property {number} collectedFunds
 * @property {array<number>} donorsCount
 * @property {string} profileId
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

