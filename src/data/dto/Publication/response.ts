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
   tags?: string;
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
 * @property {string} tags
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

