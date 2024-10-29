"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityverificationRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const IdentityVerification_1 = require("../controller/IdentityVerification");
const identityverificationRoutes = () => (0, generic_route_1.genericRoute)({ controller: IdentityVerification_1.identityverificationController, schema: joi_1.default.IdentityVerification, name: 'IdentityVerification' });
exports.identityverificationRouter = identityverificationRoutes();
/**
 * GET /api/identity-verification
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary List IdentityVerification (getAllIdentityVerification)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,description,type,status,commentaire
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<IdentityVerificationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/identity-verification/{id}
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary Remove IdentityVerification (deleteIdentityVerification)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/identity-verification/partialUpdate/{id}
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary Update IdentityVerification (updateIdentityVerification)
 * @param {IdentityVerificationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/identity-verification/{id}
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary List IdentityVerification (getIdentityVerification)
 
 * @param {string} id.path.required
 * @return {IdentityVerificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/identity-verification
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary Create IdentityVerification (addIdentityVerification)
 * @param {IdentityVerificationRequestDTO} request.body
 * @return {IdentityVerificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=IdentityVerification.js.map