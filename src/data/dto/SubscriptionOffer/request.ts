export type SubscriptionOfferRequestDTO = {
   name: string;
   description: string;
   price?: number;
   isPopular?: boolean;
   isActive: boolean;
   duration?: number;
   type?: string;
}

/**
 * @typedef {object} SubscriptionOfferRequestDTO
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {boolean} isPopular
 * @property {boolean} isActive
 * @property {number} duration
 * @property {string} type
 */
