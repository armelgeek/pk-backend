export type SettingsResponseDTO = {
   donationDescription?: string;
   donationImages?: string[];
   countries?: string[];
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} SettingsResponseDTO
 * @property {string} donationDescription
 * @property {array<string>} donationImages
 * @property {array<string>} countries
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

