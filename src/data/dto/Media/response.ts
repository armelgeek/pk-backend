export type MediaResponseDTO = {
   type?: string;
   url?: string;
   size?: string[];
   profileId?: string;
   pageId?: string;
   category?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} MediaResponseDTO
 * @property {string} type
 * @property {string} url
 * @property {array<string>} size
 * @property {string} profileId
 * @property {string} pageId
 * @property {string} category
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

