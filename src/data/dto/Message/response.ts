export type MessageResponseDTO = {
   text?: string;
   imagesUrl?: string[];
   sender?: string;
   reciever?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} MessageResponseDTO
 * @property {string} text
 * @property {array<string>} imagesUrl
 * @property {string} sender
 * @property {string} reciever
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

