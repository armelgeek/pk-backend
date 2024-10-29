"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymenttypeRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const PaymentType_1 = require("../controller/PaymentType");
const paymenttypeRoutes = () => (0, generic_route_1.genericRoute)({ controller: PaymentType_1.paymenttypeController, schema: joi_1.default.PaymentType, name: 'PaymentType' });
exports.paymenttypeRouter = paymenttypeRoutes();
/**
 * GET /api/payments-type
 * @tags PaymentType
 * @security BearerAuth
 * @summary List PaymentType (getAllPaymentType)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,logo
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
//# sourceMappingURL=PaymentType.js.map