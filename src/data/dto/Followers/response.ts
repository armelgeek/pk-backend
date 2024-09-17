export type FollowersResponseDTO = {
   follow?: string;
   follower?: string;
   friends?: boolean;
   confirmed?: boolean;
   cancel?: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} FollowersResponseDTO
 * @property {string} follow
 * @property {string} follower
 * @property {boolean} friends
 * @property {boolean} confirmed
 * @property {boolean} cancel
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

