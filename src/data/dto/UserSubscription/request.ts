export type UserSubscriptionRequestDTO = {
   isAutoRenewed: boolean;
   start: string;
   end: string;
   paymentStatus: string;
   userId: string;
   subscriptionOfferId: string;
}

/**
 * @typedef {object} UserSubscriptionRequestDTO
 * @property {boolean} isAutoRenewed
 * @property {string} start
 * @property {string} end
 * @property {string} paymentStatus
 * @property {string} userId
 * @property {string} subscriptionOfferId
 */
