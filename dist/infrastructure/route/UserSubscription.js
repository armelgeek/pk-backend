"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersubscriptionRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const UserSubscription_1 = require("../controller/UserSubscription");
const usersubscriptionRoutes = () => {
    const router = (0, generic_route_1.genericRoute)({
        controller: UserSubscription_1.usersubscriptionController,
        schema: joi_1.default.UserSubscription,
        name: 'UserSubscription',
    });
    router.get('/current/user', UserSubscription_1.usersubscriptionController.getSubscriptionByUser);
    router.get('/payment/config', UserSubscription_1.usersubscriptionController.paymentConfig);
    router.post('/payment/createCustomer', UserSubscription_1.usersubscriptionController.createCustomer);
    // For no auto renewed subscription
    router.post('/payment/create-payment-intent', UserSubscription_1.usersubscriptionController.createPaymentIntent);
    router.post('/payment/webhook', UserSubscription_1.usersubscriptionController.webhook);
    // For aut renewed subscription
    router.post('/payment/create-subscription', UserSubscription_1.usersubscriptionController.createPaymentSubscription);
    router.get('/payment/invoice-preview', UserSubscription_1.usersubscriptionController.invoicePreview);
    router.post('/payment/cancel-subscription', UserSubscription_1.usersubscriptionController.cancelSubscription);
    router.post('/payment/update-subscription', UserSubscription_1.usersubscriptionController.updateSubscription);
    router.get('/payment/subscriptions', UserSubscription_1.usersubscriptionController.subscriptions);
    router.post('/payment/subscription-webhook', UserSubscription_1.usersubscriptionController.subscriptionWebhook);
    return router;
};
exports.usersubscriptionRouter = usersubscriptionRoutes();
/**
 * GET /api/user-subscription
 * @tags UserSubscription
 * @security BearerAuth
 * @summary List UserSubscription (getAllUserSubscription)
 
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
 * @summary Remove UserSubscription (deleteUserSubscription)
 
 * @param {string} id.path.required
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
 
 * @param {string} id.path.required
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
//# sourceMappingURL=UserSubscription.js.map