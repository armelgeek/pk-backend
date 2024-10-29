"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gametypeRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const GameType_1 = require("../controller/GameType");
const gametypeRoutes = () => (0, generic_route_1.genericRoute)({ controller: GameType_1.gametypeController, schema: joi_1.default.GameType, name: 'GameType' });
exports.gametypeRouter = gametypeRoutes();
/**
 * POST /api/game-type
 * @tags GameType
 * @security BearerAuth
 * @summary Create GameType (addGameType)
 * @param {GameTypeRequestDTO} request.body
 * @return {GameTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/game-type
 * @tags GameType
 * @security BearerAuth
 * @summary List GameType (getAllGameType)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,description,game
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<GameTypeResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/game-type/{id}
 * @tags GameType
 * @security BearerAuth
 * @summary Remove GameType (deleteGameType)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/game-type/partialUpdate/{id}
 * @tags GameType
 * @security BearerAuth
 * @summary Update GameType (updateGameType)
 * @param {GameTypeRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/game-type/{id}
 * @tags GameType
 * @security BearerAuth
 * @summary List GameType (getGameType)
 
 * @param {string} id.path.required
 * @return {GameTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=GameType.js.map