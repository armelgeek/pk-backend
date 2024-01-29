export interface ResendCodeRequestDTO {
  email: string;
}

/**
 * @typedef {object} ResendCodeRequestDTO
 * @property {string} email
 */

export interface ValidationCodeRequestDTO {
  email: string;
  code: string;
};

/**
 * @typedef {object} ValidationCodeRequestDTO
 * @property {string} email
 * @property {string} code
 */
