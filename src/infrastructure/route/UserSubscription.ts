import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { usersubscriptionController } from '../controller/UserSubscription';

const usersubscriptionRoutes = () => {
  const router = genericRoute({
    controller: usersubscriptionController,
    schema: Joi.UserSubscription,
    name: 'UserSubscription',
  });

  router.get('/user/:id', usersubscriptionController.getSubscriptionByUser);
  router.get('/payment/config', usersubscriptionController.paymentConfig);
  router.post('/payment/createCustomer', usersubscriptionController.createCustomer);
  // For no auto renewed subscription
  router.post('/payment/create-payment-intent', usersubscriptionController.createPaymentIntent);
  router.post('/payment/webhook', usersubscriptionController.webhook);

  // For aut renewed subscription
  router.post('/payment/create-subscription', usersubscriptionController.createPaymentSubscription);
  router.get('/payment/invoice-preview', usersubscriptionController.invoicePreview);
  router.post('/payment/cancel-subscription', usersubscriptionController.cancelSubscription);
  router.post('/payment/update-subscription', usersubscriptionController.updateSubscription);
  router.get('/payment/subscriptions', usersubscriptionController.subscriptions);
  router.post('/payment/subscription-webhook', usersubscriptionController.subscriptionWebhook);

  return router;
};

export const usersubscriptionRouter = usersubscriptionRoutes();

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
