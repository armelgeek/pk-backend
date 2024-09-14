import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { twofactorauthenticationController } from '../controller/TwoFactorAuthentication';

const twofactorauthenticationRoutes = () => genericRoute({ controller: twofactorauthenticationController, schema: Joi.TwoFactorAuthentication, name: 'TwoFactorAuthentication' });

export const twofactorauthenticationRouter = twofactorauthenticationRoutes();

/**
 * GET /api/two-factor-authentication
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary List TwoFactorAuthentication (getAllTwoFactorAuthentication)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:type
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<TwoFactorAuthenticationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/two-factor-authentication/{id}
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary Remove TwoFactorAuthentication (deleteTwoFactorAuthentication)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/two-factor-authentication/partialUpdate/{id}
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary Update TwoFactorAuthentication (updateTwoFactorAuthentication)
 * @param {TwoFactorAuthenticationRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/two-factor-authentication/{id}
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary List TwoFactorAuthentication (getTwoFactorAuthentication)
 
 * @param {string} id.path.required 
 * @return {TwoFactorAuthenticationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/two-factor-authentication
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary Create TwoFactorAuthentication (addTwoFactorAuthentication)
 * @param {TwoFactorAuthenticationRequestDTO} request.body 
 * @return {TwoFactorAuthenticationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

