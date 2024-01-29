export interface InscriptionRequestDTO {
  nom: string;
  prenom: string;
  imageUrl: string;
  phone: string;
  email: string;
  username: string;
  ville: string;
  adresse: string;
  password: string;
  role: string;
}

/**
 * @typedef {object} InscriptionRequestDTO
 * @property {string} nom
 * @property {string} prenom
 * @property {string} phone
 * @property {string} email
 * @property {string} username
 * @property {string} ville
 * @property {string} adresse
 * @property {string} role
 * @property {string} password
 * @property {object} image - de type file
 */
