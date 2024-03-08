export type UserSubscriptionRequestDTO = {
   isAutoRenewed: boolean;
   start: string;
   end: string;
   paymentStatus: string;
   userId: string;
   subscriptionOfferId: string;
   pageId: string;
   codeParrainId?: string;
   subscriptionStripeId?: string;
}

/**
 * @typedef {object} UserSubscriptionRequestDTO
 * @property {boolean} isAutoRenewed
 * @property {string} start
 * @property {string} end
 * @property {string} paymentStatus
 * @property {string} userId
 * @property {string} subscriptionOfferId
 * @property {string} pageId
 * @property {string} codeParrainId
 * @property {string} subscriptionStripeId
 */

