"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Club_1 = require("../controller/Club");
const clubRoutes = () => (0, generic_route_1.genericRoute)({ controller: Club_1.clubController, schema: joi_1.default.Club, name: 'Club' });
exports.clubRouter = clubRoutes();
/**
 * POST /api/club
 * @tags Club
 * @security BearerAuth
 * @summary Create Club (addClub)
 * @param {ClubRequestDTO} request.body
 * @return {ClubResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/club
 * @tags Club
 * @security BearerAuth
 * @summary List Club (getAllClub)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<ClubResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/club/{id}
 * @tags Club
 * @security BearerAuth
 * @summary Remove Club (deleteClub)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/club/partialUpdate/{id}
 * @tags Club
 * @security BearerAuth
 * @summary Update Club (updateClub)
 * @param {ClubRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/club/{id}
 * @tags Club
 * @security BearerAuth
 * @summary List Club (getClub)
 
 * @param {string} id.path.required
 * @return {ClubResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Club.js.map