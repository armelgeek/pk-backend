export type FriendsResponseDTO = {
   follow?: string;
   follower?: string;
   confirmed?: boolean;
   cancel?: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} FriendsResponseDTO
 * @property {string} follow
 * @property {string} follower
 * @property {boolean} confirmed
 * @property {boolean} cancel
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

