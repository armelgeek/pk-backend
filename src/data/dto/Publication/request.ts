export type PublicationRequestDTO = {
   content?: string;
   imageUrls?: string[];
   videoUrls?: string[];
   profileId?: string;
   location?: string;
   private?: boolean;
}

/**
 * @typedef {object} PublicationRequestDTO
 * @property {string} content
 * @property {array<string>} imageUrls
 * @property {array<string>} videoUrls
 * @property {string} profileId
 * @property {string} location
 * @property {boolean} private
 */

