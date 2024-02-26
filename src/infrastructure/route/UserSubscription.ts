import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { usersubscriptionController } from '../controller/UserSubscription';

const usersubscriptionRoutes = () => genericRoute({ controller: usersubscriptionController, schema: Joi.UserSubscription, name: 'UserSubscription' });

export const usersubscriptionRouter = usersubscriptionRoutes();

/**
 * GET /api/users-subscription
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Créer un UserSubscription (getAllUserSubscription)
 * @param {UserSubscriptionRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/user-subscription/{id}
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Créer un UserSubscription (deleteUserSubscription)
 * @param {UserSubscriptionRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/user-subscription/{id}
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Créer un UserSubscription (updateUserSubscription)
 * @param {UserSubscriptionRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/user-subscription/{id}
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Créer un UserSubscription (getUserSubscription)
 * @param {UserSubscriptionRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/user-subscription
 * @tags UserSubscription
 * @security BearerAuth
 * @summary Créer un UserSubscription (addUserSubscription)
 * @param {UserSubscriptionRequestDTO} request.body
 * @return {UserSubscriptionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

