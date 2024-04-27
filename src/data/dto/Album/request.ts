export type AlbumRequestDTO = {
   type?: string;
   title?: string;
   media?: string[];
   profileId?: string;
   like?: string[];
   share?: string[];
   comments?: string[];
}

/**
 * @typedef {object} AlbumRequestDTO
 * @property {string} type
 * @property {string} title
 * @property {array<string>} media
 * @property {string} profileId
 * @property {array<string>} like
 * @property {array<string>} share
 * @property {array<string>} comments
 */

