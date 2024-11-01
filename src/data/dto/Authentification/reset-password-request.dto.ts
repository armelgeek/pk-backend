export interface ResetPasswordRequestDTO {
  email: string;
  phone: PhoneRequestDTO;
}

export interface ResetPasswordConfirmRequestDTO {
  id: string;
  password: string;
}

/**
 * @typedef {object} ResetPasswordRequestDTO
 * @property {string} email
 * @property {PhoneRequestDTO} phone
 */

/**
 * @typedef {object} ResetPasswordConfirmRequestDTO
 * @property {string} id.required
 * @property {string} password.required
 */
