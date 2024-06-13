import {PhoneRequestDTO} from '../Phone/request';
export interface InscriptionRequestDTO {
  googleId: string;
  facebookId: string;
  appleId: string;
  nom: string;
  prenom: string;
  imageUrl: string;
  phone: PhoneRequestDTO;
  email: string;
  username: string;
  ville: string;
  password: string;
  adresse: string;
  verified: boolean;
}

/**
 * @typedef {object} InscriptionRequestDTO
 * @property {string} nom
 * @property {string} prenom
 * @property {PhoneRequestDTO} phone
 * @property {string} email
 * @property {string} password
 * @property {string} username
 * @property {string} ville
 * @property {string} adresse
 * @property {string} role
 * @property {string} password
 * @property {string} googleId
 * @property {string} facebookId
 * @property {string} appleId
 * @property {string} imageUrl
 * @property {string} verified
 */

export interface SocialInscriptionRequestDTO {
  googleId: string;
  facebookId: string;
  appleId: string;
  nom: string;
  prenom: string;
  imageUrl: string;
  phone: string;
  email: string;
}

/**
 * @typedef {object} SocialInscriptionRequestDTO
 * @property {string} email
 * @property {string} googleId
 * @property {string} facebookId
 * @property {string} appleId
 * @property {string} imageUrl
 * @property {string} nom
 * @property {string} prenom
 * @property {string} phone
 */
