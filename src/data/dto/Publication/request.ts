export type PublicationRequestDTO = {
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
}

/**
 * @typedef {object} PublicationRequestDTO
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
 */

