import {PhoneRequestDTO} from '../Phone/request';
export interface ResendCodeRequestDTO {
  email?: string;
  phone?: PhoneRequestDTO;
}

/**
 * @typedef {object} ResendCodeRequestDTO
 * @property {string} email
 * @property {PhoneRequestDTO} phone
 */

export interface ValidationCodeRequestDTO {
  email?: string;
  code: string;
  phone?: PhoneRequestDTO;
};

/**
 * @typedef {object} ValidationCodeRequestDTO
 * @property {string} email
 * @property {string} code
 * @property {PhoneRequestDTO} phone
 */
