export type FollowersResponseDTO = {
   follow?: string;
   follower?: string;
   friends?: boolean;
   confirmed?: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} FollowersResponseDTO
 * @property {string} follow
 * @property {string} follower
 * @property {boolean} friends
 * @property {boolean} confirmed
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

