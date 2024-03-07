export type UserSubscriptionResponseDTO = {
   isAutoRenewed: boolean;
   start: string;
   end: string;
   paymentStatus: string;
   userId: string;
   subscriptionOfferId: string;
   pageId: string;
   codeParrainId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} UserSubscriptionResponseDTO
 * @property {boolean} isAutoRenewed
 * @property {string} start
 * @property {string} end
 * @property {string} paymentStatus
 * @property {string} userId
 * @property {string} subscriptionOfferId
 * @property {string} pageId
 * @property {string} codeParrainId
 * @property {string} id
 * @property {Date} updatedAt
 * @property {Date} createdAt
 */

