"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twofactorauthenticationRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const TwoFactorAuthentication_1 = require("../controller/TwoFactorAuthentication");
const twofactorauthenticationRoutes = () => (0, generic_route_1.genericRoute)({ controller: TwoFactorAuthentication_1.twofactorauthenticationController, schema: joi_1.default.TwoFactorAuthentication, name: 'TwoFactorAuthentication' });
exports.twofactorauthenticationRouter = twofactorauthenticationRoutes();
/**
 * GET /api/two-factor-authentication
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary List TwoFactorAuthentication (getAllTwoFactorAuthentication)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,type
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<TwoFactorAuthenticationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/two-factor-authentication/{id}
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary Remove TwoFactorAuthentication (deleteTwoFactorAuthentication)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/two-factor-authentication/partialUpdate/{id}
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary Update TwoFactorAuthentication (updateTwoFactorAuthentication)
 * @param {TwoFactorAuthenticationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/two-factor-authentication/{id}
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary List TwoFactorAuthentication (getTwoFactorAuthentication)
 
 * @param {string} id.path.required
 * @return {TwoFactorAuthenticationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/two-factor-authentication
 * @tags TwoFactorAuthentication
 * @security BearerAuth
 * @summary Create TwoFactorAuthentication (addTwoFactorAuthentication)
 * @param {TwoFactorAuthenticationRequestDTO} request.body
 * @return {TwoFactorAuthenticationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=TwoFactorAuthentication.js.map