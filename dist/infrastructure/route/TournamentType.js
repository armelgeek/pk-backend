"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tournamenttypeRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const TournamentType_1 = require("../controller/TournamentType");
const tournamenttypeRoutes = () => (0, generic_route_1.genericRoute)({ controller: TournamentType_1.tournamenttypeController, schema: joi_1.default.TournamentType, name: 'TournamentType' });
exports.tournamenttypeRouter = tournamenttypeRoutes();
/**
 * POST /api/tournament-type
 * @tags TournamentType
 * @security BearerAuth
 * @summary Create TournamentType (addTournamentType)
 * @param {TournamentTypeRequestDTO} request.body
 * @return {TournamentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/tournament-type
 * @tags TournamentType
 * @security BearerAuth
 * @summary List TournamentType (getAllTournamentType)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,description
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<TournamentTypeResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/tournament-type/{id}
 * @tags TournamentType
 * @security BearerAuth
 * @summary Remove TournamentType (deleteTournamentType)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/tournament-type/partialUpdate/{id}
 * @tags TournamentType
 * @security BearerAuth
 * @summary Update TournamentType (updateTournamentType)
 * @param {TournamentTypeRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/tournament-type/{id}
 * @tags TournamentType
 * @security BearerAuth
 * @summary List TournamentType (getTournamentType)
 
 * @param {string} id.path.required
 * @return {TournamentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=TournamentType.js.map