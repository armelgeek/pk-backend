import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { subscriptionhistoryController } from '../controller/SubscriptionHistory';

const subscriptionhistoryRoutes = () => genericRoute({ controller: subscriptionhistoryController, schema: Joi.SubscriptionHistory, name: 'SubscriptionHistory' });

export const subscriptionhistoryRouter = subscriptionhistoryRoutes();

/**
 * GET /api/subscriptions-history
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary Créer un SubscriptionHistory (getAllSubscriptionHistory)
 * @param {SubscriptionHistoryRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {SubscriptionHistoryResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/subscription-history/{id}
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary Créer un SubscriptionHistory (deleteSubscriptionHistory)
 * @param {SubscriptionHistoryRequestDTO} request.body
 * @param {string} id.path.required
 * @return {SubscriptionHistoryResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/subscription-history/{id}
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary Créer un SubscriptionHistory (updateSubscriptionHistory)
 * @param {SubscriptionHistoryRequestDTO} request.body
 * @param {string} id.path.required
 * @return {SubscriptionHistoryResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/subscription-history/{id}
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary Créer un SubscriptionHistory (getSubscriptionHistory)
 * @param {SubscriptionHistoryRequestDTO} request.body
 * @param {string} id.path.required
 * @return {SubscriptionHistoryResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/subscription-history
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary Créer un SubscriptionHistory (addSubscriptionHistory)
 * @param {SubscriptionHistoryRequestDTO} request.body
 * @return {SubscriptionHistoryResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

