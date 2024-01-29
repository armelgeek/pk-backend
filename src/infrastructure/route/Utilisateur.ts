import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { utilisateurController } from '../controller/Utilisateur';

const utilisateurRoutes = () => genericRoute({ controller: utilisateurController, schema: Joi.Utilisateur, name: 'Utilisateur' });

export const utilisateurRouter = utilisateurRoutes();

/**
 * GET /api/utilisateur/{TemplateParameter1}
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (getAllUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} data.query
 * @param {string} TemplateParameter1.path.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/utilisateur/
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (deleteUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/utilisateur/partialUpdate/
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (updateUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/utilisateur/
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (getUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/utilisateur/count
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (countUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/inscrition/{array}
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (addUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @param {string} data.query
 * @param {string} Parameter1.query
 * @param {string} array.path.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/inscription
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (inscriptionUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/authentification
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (signinUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/users/to-active
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Créer un Utilisateur (toActiveUtilisateur)
 * @param {UtilisateurRequestDTO} request.body.required
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

