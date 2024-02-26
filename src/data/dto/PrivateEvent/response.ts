export type PrivateEventResponseDTO = {
   name?: string;
   participants?: number;
   shortDescription?: string;
   location?: string;
   startDate?: string;
   startTime?: string;
   contact?: string;
   description?: string;
   parking?: boolean;
   restauration?: boolean;
   reglements?: string;
   photos?: string[];
   videos?: string[];
   private?: boolean;
   userList?: string[];
   profile?: string;
  id: string;
}

/**
 * @typedef {object} PrivateEventResponseDTO
 * @property {string} name
 * @property {number} participants
 * @property {string} shortDescription
 * @property {string} location
 * @property {string} startDate
 * @property {string} startTime
 * @property {string} contact
 * @property {string} description
 * @property {boolean} parking
 * @property {boolean} restauration
 * @property {string} reglements
 * @property {array<string>} photos
 * @property {array<string>} videos
 * @property {boolean} private
 * @property {array<string>} userList
 * @property {string} profile
 */

