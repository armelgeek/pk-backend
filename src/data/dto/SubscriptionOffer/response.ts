export type SubscriptionOfferResponseDTO = {
   name: string;
   description: string;
   price?: number;
   isPopular?: boolean;
   isActive: boolean;
   duration?: number;
   type?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} SubscriptionOfferResponseDTO
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {boolean} isPopular
 * @property {boolean} isActive
 * @property {number} duration
 * @property {string} type
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

