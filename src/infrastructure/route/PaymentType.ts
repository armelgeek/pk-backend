import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { paymenttypeController } from '../controller/PaymentType';

const paymenttypeRoutes = () => genericRoute({ controller: paymenttypeController, schema: Joi.PaymentType, name: 'PaymentType' });

export const paymenttypeRouter = paymenttypeRoutes();

/**
 * GET /api/payments-type
 * @tags PaymentType
 * @security BearerAuth
 * @summary Créer un PaymentType (getAllPaymentType)
 * @param {PaymentTypeRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {PaymentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/payment-type/{id}
 * @tags PaymentType
 * @security BearerAuth
 * @summary Créer un PaymentType (updatePaymentType)
 * @param {PaymentTypeRequestDTO} request.body
 * @param {string} id.path.required
 * @return {PaymentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/payment-type/{id}
 * @tags PaymentType
 * @security BearerAuth
 * @summary Créer un PaymentType (getPaymentType)
 * @param {PaymentTypeRequestDTO} request.body
 * @param {string} id.path.required
 * @return {PaymentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/payment-type/{id}
 * @tags PaymentType
 * @security BearerAuth
 * @summary Créer un PaymentType (deletePaymentType)
 * @param {PaymentTypeRequestDTO} request.body
 * @param {string} id.path.required
 * @return {PaymentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

