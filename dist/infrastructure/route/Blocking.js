"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockingRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Blocking_1 = require("../controller/Blocking");
const blockingRoutes = () => (0, generic_route_1.genericRoute)({ controller: Blocking_1.blockingController, schema: joi_1.default.Blocking, name: 'Blocking' });
exports.blockingRouter = blockingRoutes();
/**
 * GET /api/blocking
 * @tags Blocking
 * @security BearerAuth
 * @summary List Blocking (getAllBlocking)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,profileId,blockingProfile,reason
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<BlockingResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/blocking/{id}
 * @tags Blocking
 * @security BearerAuth
 * @summary Remove Blocking (deleteBlocking)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/blocking/partialUpdate/{id}
 * @tags Blocking
 * @security BearerAuth
 * @summary Update Blocking (updateBlocking)
 * @param {BlockingRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/blocking/{id}
 * @tags Blocking
 * @security BearerAuth
 * @summary List Blocking (getBlocking)
 
 * @param {string} id.path.required
 * @return {BlockingResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/blocking
 * @tags Blocking
 * @security BearerAuth
 * @summary Create Blocking (addBlocking)
 * @param {BlockingRequestDTO} request.body
 * @return {BlockingResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Blocking.js.map