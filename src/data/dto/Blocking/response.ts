export type BlockingResponseDTO = {
   profileId?: string;
   blockingProfile?: string;
   reason?: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} BlockingResponseDTO
 * @property {string} profileId
 * @property {string} blockingProfile
 * @property {string} reason
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

