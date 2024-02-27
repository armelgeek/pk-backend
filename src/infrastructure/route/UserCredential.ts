import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { usercredentialController } from '../controller/UserCredential';

const usercredentialRoutes = () => genericRoute({ controller: usercredentialController, schema: Joi.UserCredential, name: 'UserCredential' });

export const usercredentialRouter = usercredentialRoutes();

/**
 * GET /api/users-credential
 * @tags UserCredential
 * @security BearerAuth
 * @summary Créer un UserCredential (getAllUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/user-credential/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary Créer un UserCredential (deleteUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/user-credential/partialUpdate/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary Créer un UserCredential (updateUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/user-credential/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary Créer un UserCredential (getUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/user-credential
 * @tags UserCredential
 * @security BearerAuth
 * @summary Créer un UserCredential (addUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

