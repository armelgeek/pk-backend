export type MediasRequestDTO = {
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
}

/**
 * @typedef {object} MediasRequestDTO
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
 */

