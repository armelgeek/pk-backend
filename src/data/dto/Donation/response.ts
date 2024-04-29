export type DonationResponseDTO = {
   media?: string[];
   collectedFunds?: number;
   donorsCount?: number;
   profileId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} DonationResponseDTO
 * @property {array<string>} media
 * @property {number} collectedFunds
 * @property {number} donorsCount
 * @property {string} profileId
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

