export type PublicationResponseDTO = {
   content?: string;
   imageUrls?: string[];
   videoUrls?: string[];
   profileId?: string;
   location?: LocationRequestDTO;
   private?: boolean;
   like?: string[];
   share?: string[];
   actif?: boolean;
   tags?: string[];
   pageId?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} PublicationResponseDTO
 * @property {string} content
 * @property {array<string>} imageUrls
 * @property {array<string>} videoUrls
 * @property {string} profileId
 * @property {LocationRequestDTO} location
 * @property {boolean} private
 * @property {array<string>} like
 * @property {array<string>} share
 * @property {boolean} actif
 * @property {array<string>} tags
 * @property {string} pageId
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

