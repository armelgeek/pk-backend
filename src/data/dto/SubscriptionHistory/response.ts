export type SubscriptionHistoryResponseDTO = {
   start: string;
   end: string;
   userId: string;
   pageId: string;
   codeParrainId?: string;
   subscriptionStripeId?: string;
   subscriptionOfferId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} SubscriptionHistoryResponseDTO
 * @property {string} start
 * @property {string} end
 * @property {string} userId
 * @property {string} pageId
 * @property {string} codeParrainId
 * @property {string} subscriptionStripeId
 * @property {string} subscriptionOfferId
 * @property {string} id
 * @property {Date} updatedAt
 * @property {Date} createdAt
 */

