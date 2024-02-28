export type PublicationResponseDTO = {
   content?: string;
   imageUrls?: string[];
   videoUrls?: string[];
   profileId?: string;
   location?: string;
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
 * @property {string} location
 * @property {boolean} private
 * @property {array<string>} like
 * @property {array<string>} share
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

