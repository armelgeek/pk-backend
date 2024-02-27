import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { usercredentialController } from '../controller/UserCredential';

const usercredentialRoutes = () => genericRoute({ controller: usercredentialController, schema: Joi.UserCredential, name: 'UserCredential' });

export const usercredentialRouter = usercredentialRoutes();

/**
 * GET /api/users-credential
 * @tags UserCredential
 * @security BearerAuth
 * @summary List UserCredential (getAllUserCredential)
 
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
 * @summary Remove UserCredential (deleteUserCredential)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/user-credential/partialUpdate/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary Update UserCredential (updateUserCredential)
 * @param {UserCredentialRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/user-credential/{id}
 * @tags UserCredential
 * @security BearerAuth
 * @summary List UserCredential (getUserCredential)
 
 * @param {string} id.path.required 
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/user-credential
 * @tags UserCredential
 * @security BearerAuth
 * @summary Create UserCredential (addUserCredential)
 * @param {UserCredentialRequestDTO} request.body 
 * @return {UserCredentialResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

