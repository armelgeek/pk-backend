export type MediasResponseDTO = {
   type?: string;
   url?: string;
   size?: string[];
   profileId?: string;
   pageId?: string;
   category?: string;
   eventId?: string;
   shares?: string[];
   likes?: string[];
   duration?: number;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} MediasResponseDTO
 * @property {string} type
 * @property {string} url
 * @property {array<string>} size
 * @property {string} profileId
 * @property {string} pageId
 * @property {string} category
 * @property {string} eventId
 * @property {array<string>} shares
 * @property {array<string>} likes
 * @property {number} duration
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

