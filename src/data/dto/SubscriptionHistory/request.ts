export type SubscriptionHistoryRequestDTO = {
   start: string;
   end: string;
   userId: string;
   subscriptionOfferId: string;
   pageId: string;
   codeParrainId?: string;
   subscriptionStripeId?: string;
}

/**
 * @typedef {object} SubscriptionHistoryRequestDTO
 * @property {string} start
 * @property {string} end
 * @property {string} userId
 * @property {string} subscriptionOfferId
 * @property {string} pageId
 * @property {string} codeParrainId
 * @property {string} subscriptionStripeId
 */

