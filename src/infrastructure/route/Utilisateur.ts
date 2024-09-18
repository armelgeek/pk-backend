import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { utilisateurController } from '../controller/Utilisateur';

const utilisateurRoutes = () => genericRoute({ controller: utilisateurController, schema: Joi.Utilisateur, name: 'Utilisateur' });

export const utilisateurRouter = utilisateurRoutes();

/**
 * GET /api/utilisateur
 * @tags Utilisateur
 * @security BearerAuth
 * @summary List Utilisateur (getAllUtilisateur)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,nom,prenom,email,role,password,adresse,dateInscription,dateNaissance,socketId,nomPrenom,code,googleId,facebookId,appleId,username,deletionDate,firstNotificationDate,deletionState,secondNotificationDate,reactivateCode,reactivateExpiredDate
 * @param {string} order.query - enum:ASC,DESC
 * @param {string} data.query
 * @param {string} TemplateParameter1.path.required 
 * @return {array<UtilisateurResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/utilisateur/
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Remove Utilisateur (deleteUtilisateur)
  
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/utilisateur/partialUpdate/
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Update Utilisateur (updateUtilisateur)
 * @param {UtilisateurRequestDTO} request.body 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/utilisateur/
 * @tags Utilisateur
 * @security BearerAuth
 * @summary List Utilisateur (getUtilisateur)
  
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/utilisateur/count
 * @tags Utilisateur
 * @security BearerAuth
 * @summary List Utilisateur (countUtilisateur)
  
 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/inscription
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Create Utilisateur (inscriptionUtilisateur)
 * @param {UtilisateurRequestDTO} request.body 
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/authentification
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Create Utilisateur (signinUtilisateur)
 * @param {SignInRequestDTO} request.body 
 * @return {UtilisateurResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/users/to-active
 * @tags Utilisateur
 * @security BearerAuth
 * @summary Update Utilisateur (toActiveUtilisateur)
 * @param {UtilisateurRequestDTO} request.body 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

