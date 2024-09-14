import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { paymenttypeController } from '../controller/PaymentType';

const paymenttypeRoutes = () => genericRoute({ controller: paymenttypeController, schema: Joi.PaymentType, name: 'PaymentType' });

export const paymenttypeRouter = paymenttypeRoutes();

/**
 * GET /api/payments-type
 * @tags PaymentType
 * @security BearerAuth
 * @summary List PaymentType (getAllPaymentType)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:name,logo
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<PaymentTypeResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/payment-type/partialUpdate/{id}
 * @tags PaymentType
 * @security BearerAuth
 * @summary Update PaymentType (updatePaymentType)
 * @param {PaymentTypeRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/payment-type/{id}
 * @tags PaymentType
 * @security BearerAuth
 * @summary List PaymentType (getPaymentType)
 
 * @param {string} id.path.required 
 * @return {PaymentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/payment-type/{id}
 * @tags PaymentType
 * @security BearerAuth
 * @summary Remove PaymentType (deletePaymentType)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/payments-type
 * @tags PaymentType
 * @security BearerAuth
 * @summary Create PaymentType (addPaymentType)
 * @param {PaymentTypeRequestDTO} request.body 
 * @return {PaymentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

