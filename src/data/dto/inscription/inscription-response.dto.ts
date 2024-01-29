export interface InscriptionResponseDTO {
  id: string;
  nom: string;
  prenom: string;
  imageUrl: string;
  phone: string;
  email: string;
  username: string;
  ville: string;
  adresse: string;
  role: string;
}

/**
 * @typedef {object} InscriptionResponseDTO
 * @property {string} id
 * @property {string} nom
 * @property {string} prenom
 * @property {string} phone
 * @property {string} email
 * @property {string} username
 * @property {string} ville
 * @property {string} adresse
 * @property {string} role
 * @property {object} image - de type file
 */
