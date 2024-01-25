import { ObjectID } from "typeorm";

export interface UtilisateurEditRequestDTO {
  id: ObjectID;
  telephone: string;
  username: string;
  imageUrl?: string;
  email: string;
  ville: string;
  adresse: string;
}

/**
 * @typedef {object} UtilisateurEditRequestDTO
 * @property {string} id.required
 * @property {string} telephone.required
 * @property {string} email.required
 * @property {string} ville.required
 * @property {string} adresse.required
 * @property {object} image.required - type image
 */

/**
 * @typedef {object} UtilisateurEditBORequestDTO
 * @property {string} id.required
 * @property {string} nom.required
 * @property {string} prenom.required
 * @property {string} telephone.required
 * @property {string} email.required
 * @property {string} ville.required
 * @property {string} adresse.required
 * @property {object} image.required - type image
 */
