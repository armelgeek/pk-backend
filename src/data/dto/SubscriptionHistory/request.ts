export type SubscriptionHistoryRequestDTO = {
   start: string;
   end: string;
   userId: string;
   pageId: string;
   codeParrainId?: string;
   subscriptionStripeId?: string;
   subscriptionOfferId?: string;
}

/**
 * @typedef {object} SubscriptionHistoryRequestDTO
 * @property {string} start
 * @property {string} end
 * @property {string} userId
 * @property {string} pageId
 * @property {string} codeParrainId
 * @property {string} subscriptionStripeId
 * @property {string} subscriptionOfferId
 */

