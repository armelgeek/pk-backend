export type CommentRequestDTO = {
   content?: string;
   parent?: string;
   hideFor?: string[];
   target?: string;
   profileId?: string;
   happy?: string[];
   love?: string[];
   sad?: string[];
   veryhappy?: string[];
   media?: string;
   type?: string;
   activityDate?: string;
}

/**
 * @typedef {object} CommentRequestDTO
 * @property {string} content
 * @property {string} parent
 * @property {array<string>} hideFor
 * @property {string} target
 * @property {string} profileId
 * @property {array<string>} happy
 * @property {array<string>} love
 * @property {array<string>} sad
 * @property {array<string>} veryhappy
 * @property {string} media
 * @property {string} type
 * @property {string} activityDate
 */

