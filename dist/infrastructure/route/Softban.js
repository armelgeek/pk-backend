"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softbanRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Softban_1 = require("../controller/Softban");
const softbanRoutes = () => (0, generic_route_1.genericRoute)({ controller: Softban_1.softbanController, schema: joi_1.default.Softban, name: 'Softban' });
exports.softbanRouter = softbanRoutes();
/**
 * GET /api/softban
 * @tags Softban
 * @security BearerAuth
 * @summary List Softban (getAllSoftban)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,niveau,titre,duration
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<SoftbanResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/softban/{id}
 * @tags Softban
 * @security BearerAuth
 * @summary Remove Softban (deleteSoftban)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/softban/partialUpdate/{id}
 * @tags Softban
 * @security BearerAuth
 * @summary Update Softban (updateSoftban)
 * @param {SoftbanRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/softban/{id}
 * @tags Softban
 * @security BearerAuth
 * @summary List Softban (getSoftban)
 
 * @param {string} id.path.required
 * @return {SoftbanResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/softban
 * @tags Softban
 * @security BearerAuth
 * @summary Create Softban (addSoftban)
 * @param {SoftbanRequestDTO} request.body
 * @return {SoftbanResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Softban.js.map