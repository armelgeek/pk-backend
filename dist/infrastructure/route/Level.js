"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Level_1 = require("../controller/Level");
const levelRoutes = () => (0, generic_route_1.genericRoute)({ controller: Level_1.levelController, schema: joi_1.default.Level, name: 'Level' });
exports.levelRouter = levelRoutes();
/**
 * GET /api/level
 * @tags Level
 * @security BearerAuth
 * @summary List Level (getAllLevel)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,smallBlind,bigBlind,anteBb,duration,name
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<LevelResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/level/{id}
 * @tags Level
 * @security BearerAuth
 * @summary Remove Level (deleteLevel)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/level/partialUpdate/{id}
 * @tags Level
 * @security BearerAuth
 * @summary Update Level (updateLevel)
 * @param {LevelRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/level/{id}
 * @tags Level
 * @security BearerAuth
 * @summary List Level (getLevel)
 
 * @param {string} id.path.required
 * @return {LevelResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/level
 * @tags Level
 * @security BearerAuth
 * @summary Create Level (addLevel)
 * @param {LevelRequestDTO} request.body
 * @return {LevelResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Level.js.map