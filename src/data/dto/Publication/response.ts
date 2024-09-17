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
   isShared?: boolean;
   originalId?: string;
   activityDate?: string;
   audience?: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
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
 * @property {boolean} isShared
 * @property {string} originalId
 * @property {string} activityDate
 * @property {string} audience
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

