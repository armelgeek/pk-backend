"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionofferRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const SubscriptionOffer_1 = require("../controller/SubscriptionOffer");
const subscriptionofferRoutes = () => (0, generic_route_1.genericRoute)({ controller: SubscriptionOffer_1.subscriptionofferController, schema: joi_1.default.SubscriptionOffer, name: 'SubscriptionOffer' });
exports.subscriptionofferRouter = subscriptionofferRoutes();
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
//# sourceMappingURL=SubscriptionOffer.js.map