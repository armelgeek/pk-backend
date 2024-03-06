export type UserCredentialRequestDTO = {
   carteNumber: string;
   cvv: string;
   exp: string;
   userId: string;
   paymentTypeId: string;
   customerId?: string;
}

/**
 * @typedef {object} UserCredentialRequestDTO
 * @property {string} carteNumber
 * @property {string} cvv
 * @property {string} exp
 * @property {string} userId
 * @property {string} paymentTypeId
 * @property {string} customerId
 */

