export interface InscriptionRequestDTO {
  googleId: string;
  facebookId: string;
  appleId: string;
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
 * @property {string} googleId
 * @property {string} facebookId
 * @property {string} appleId
 * @property {object} image - de type file
 */
