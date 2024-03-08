export type SubscriptionHistoryResponseDTO = {
  start: string;
  end: string;
  userId: string;
  subscriptionOfferId: string;
  pageId: string;
  codeParrainId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  subscriptionStripeId: string;
};

/**
 * @typedef {object} SubscriptionHistoryResponseDTO
 * @property {string} start
 * @property {string} end
 * @property {string} userId
 * @property {string} subscriptionOfferId
 * @property {string} pageId
 * @property {string} codeParrainId
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 * @property {string} subscriptionStripeId
 */
