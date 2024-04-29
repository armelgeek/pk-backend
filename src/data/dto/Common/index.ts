export type DeleteResponseDTO = {
   remove: boolean
   id: string;
}

/**
 * @typedef {object} DeleteResponseDTO
 * @property {boolean} remove
 * @property {string} id
 */

export type UpdateResponseDTO = {
   update: boolean
   id: string;
}

/**
 * @typedef {object} UpdateResponseDTO
 * @property {boolean} update
 * @property {string} id
 */

export type CountResponseDTO = {
   data: number;
}

/**
 * @typedef {object} CountResponseDTO
 * @property {number} count
 */
