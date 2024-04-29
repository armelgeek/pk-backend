export type MediasResponseDTO = {
   type?: string;
   url?: string;
   size?: string[];
   profileId?: string;
   pageId?: string;
   category?: string;
   eventId?: string;
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
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

