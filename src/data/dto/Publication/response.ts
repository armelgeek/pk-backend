export type PublicationResponseDTO = {
   content?: string;
   imageUrls?: string[];
   videoUrls?: string[];
   profileId?: string;
   location?: LocationRequestDTO;
   private?: boolean;
   like?: string[];
   share?: string[];
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
 * @property {string} id
 * @property {Date} updatedAt
 * @property {Date} createdAt
 */

