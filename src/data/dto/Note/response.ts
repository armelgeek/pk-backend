export type NoteResponseDTO = {
   nom?: string;
   prenom?: string;
   friends?: number;
   city?: string;
   country?: string;
   status?: string;
   shareBy?: string[];
   photo?: string;
   profileId?: string;
   createdBy?: string;
   bluff?: number;
   level?: number;
   large?: number;
   passif?: number;
   callingstation?: number;
   gaugesId?: string[];
   strategyId?: string[];
   noteValueId?: string[];
   noticedId?: string[];
   isPin?: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} NoteResponseDTO
 * @property {string} nom
 * @property {string} prenom
 * @property {number} friends
 * @property {string} city
 * @property {string} country
 * @property {string} status
 * @property {array<string>} shareBy
 * @property {string} photo
 * @property {string} profileId
 * @property {string} createdBy
 * @property {number} bluff
 * @property {number} level
 * @property {number} large
 * @property {number} passif
 * @property {number} callingstation
 * @property {array<string>} gaugesId
 * @property {array<string>} strategyId
 * @property {array<string>} noteValueId
 * @property {array<string>} noticedId
 * @property {boolean} isPin
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

