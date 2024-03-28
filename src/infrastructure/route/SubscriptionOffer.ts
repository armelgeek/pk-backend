import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { subscriptionofferController } from '../controller/SubscriptionOffer';

const subscriptionofferRoutes = () => genericRoute({ controller: subscriptionofferController, schema: Joi.SubscriptionOffer, name: 'SubscriptionOffer' });

export const subscriptionofferRouter = subscriptionofferRoutes();

/**
 * GET /api/subscription-offer
 * @tags SubscriptionOffer
 * @security BearerAuth
 * @summary List SubscriptionOffer (getAllSubscriptionOffer)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {SubscriptionOfferResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/subscription-offer/{id}
 * @tags SubscriptionOffer
 * @security BearerAuth
 * @summary Remove SubscriptionOffer (deleteSubscriptionOffer)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/subscription-offer/partialUpdate/{id}
 * @tags SubscriptionOffer
 * @security BearerAuth
 * @summary Update SubscriptionOffer (updateSubscriptionOffer)
 * @param {SubscriptionOfferRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/subscription-offer/{id}
 * @tags SubscriptionOffer
 * @security BearerAuth
 * @summary List SubscriptionOffer (getSubscriptionOffer)
 
 * @param {string} id.path.required 
 * @return {SubscriptionOfferResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/subscription-offer
 * @tags SubscriptionOffer
 * @security BearerAuth
 * @summary Create SubscriptionOffer (addSubscriptionOffer)
 * @param {SubscriptionOfferRequestDTO} request.body 
 * @return {SubscriptionOfferResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

