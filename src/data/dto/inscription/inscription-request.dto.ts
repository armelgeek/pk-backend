export interface InscriptionRequestDTO {
  nom: string;
  prenom: string;
  imageUrl: string;
  telephone: string;
  email: string;
  ville: string;
  adresse: string;
  password: string;
  role: string;
}

/**
 * @typedef {object} InscriptionRequestDTO
 * @property {string} nom
 * @property {string} prenom
 * @property {string} telephone
 * @property {string} email
 * @property {string} ville
 * @property {string} adresse
 * @property {string} role
 * @property {string} password
 * @property {object} image - de type file
 */
