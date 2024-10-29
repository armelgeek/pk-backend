"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionhistoryRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const SubscriptionHistory_1 = require("../controller/SubscriptionHistory");
const subscriptionhistoryRoutes = () => {
    const router = (0, generic_route_1.genericRoute)({
        controller: SubscriptionHistory_1.subscriptionhistoryController,
        schema: joi_1.default.SubscriptionHistory,
        name: 'SubscriptionHistory',
    });
    router.get('/history/user', SubscriptionHistory_1.subscriptionhistoryController.getSubscriptionHistoryByUser);
    return router;
};
exports.subscriptionhistoryRouter = subscriptionhistoryRoutes();
/**
 * GET /api/subscriptions-history
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary List SubscriptionHistory (getAllSubscriptionHistory)
 
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
 * @summary Remove SubscriptionHistory (deleteSubscriptionHistory)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/subscription-history/partialUpdate/{id}
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary Update SubscriptionHistory (updateSubscriptionHistory)
 * @param {SubscriptionHistoryRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/subscription-history/{id}
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary List SubscriptionHistory (getSubscriptionHistory)
 
 * @param {string} id.path.required
 * @return {SubscriptionHistoryResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/subscription-history
 * @tags SubscriptionHistory
 * @security BearerAuth
 * @summary Create SubscriptionHistory (addSubscriptionHistory)
 * @param {SubscriptionHistoryRequestDTO} request.body
 * @return {SubscriptionHistoryResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=SubscriptionHistory.js.map