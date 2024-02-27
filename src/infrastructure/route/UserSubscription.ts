import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { usersubscriptionController } from '../controller/UserSubscription';

const usersubscriptionRoutes = () => genericRoute({ controller: usersubscriptionController, schema: Joi.UserSubscription, name: 'UserSubscription' });

export const usersubscriptionRouter = usersubscriptionRoutes();

/**
 * GET /api/user-subscription
 * @tags UserSubscription
 * @security BearerAuth
 * @summary List UserSubscription (getAllUserSubscription) 
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/user-subscription/{id}
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Remove UserSubscription (deleteUserSubscription) 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/user-subscription/partialUpdate/{id}
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Update UserSubscription (updateUserSubscription)
 * @param {UserSubscriptionRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/user-subscription/{id}
 * @tags UserSubscription
 * @security BearerAuth
 * @summary List UserSubscription (getUserSubscription) 
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/user-subscription
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Create UserSubscription (addUserSubscription)
 * @param {UserSubscriptionRequestDTO} request.body 
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

