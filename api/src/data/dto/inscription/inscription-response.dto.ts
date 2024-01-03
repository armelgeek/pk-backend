export interface InscriptionResponseDTO {
  id: string;
  nom: string;
  prenom: string;
  imageUrl: string;
  telephone: string;
  email: string;
  ville: string;
  adresse: string;
  role: string;
}

/**
 * @typedef {object} InscriptionResponseDTO
 * @property {string} id
 * @property {string} nom
 * @property {string} prenom
 * @property {string} telephone
 * @property {string} email
 * @property {string} ville
 * @property {string} adresse
 * @property {string} role
 * @property {object} image - de type file
 */
