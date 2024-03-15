export type NotificationResponseDTO = {
   titre?: string;
   message?: string;
   tous?: boolean;
   usersIds?: string[];
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} NotificationResponseDTO
 * @property {string} titre
 * @property {string} message
 * @property {boolean} tous
 * @property {array<string>} usersIds
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

