export type TwoFactorAuthenticationResponseDTO = {
   type?: string;
   actif?: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} TwoFactorAuthenticationResponseDTO
 * @property {string} type
 * @property {boolean} actif
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

