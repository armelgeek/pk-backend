export type AlbumResponseDTO = {
   type?: string;
   title?: string;
   media?: string[];
   profileId?: string;
   like?: string[];
   share?: string[];
   comments?: string[];
   description?: string;
   cover?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} AlbumResponseDTO
 * @property {string} type
 * @property {string} title
 * @property {array<string>} media
 * @property {string} profileId
 * @property {array<string>} like
 * @property {array<string>} share
 * @property {array<string>} comments
 * @property {string} description
 * @property {string} cover
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

