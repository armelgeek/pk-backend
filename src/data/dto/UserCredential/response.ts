export type UserCredentialResponseDTO = {
   carteNumber: string;
   cvv: string;
   exp: string;
   userId: string;
   paymentTypeId: string;
   customerId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} UserCredentialResponseDTO
 * @property {string} carteNumber
 * @property {string} cvv
 * @property {string} exp
 * @property {string} userId
 * @property {string} paymentTypeId
 * @property {string} customerId
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

