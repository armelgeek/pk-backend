export type CommentResponseDTO = {
   content?: string;
   createdAt?: string;
   parent?: string;
   reaction?: string[];
   publicationId?: string;
   prifileId?: string;
  id: string;
}

/**
 * @typedef {object} CommentResponseDTO
 * @property {string} content
 * @property {string} createdAt
 * @property {string} parent
 * @property {array<string>} reaction
 * @property {string} publicationId
 * @property {string} prifileId
 */

