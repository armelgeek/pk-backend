"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Session_1 = require("../controller/Session");
const sessionRoutes = () => (0, generic_route_1.genericRoute)({ controller: Session_1.sessionController, schema: joi_1.default.Session, name: 'Session' });
exports.sessionRouter = sessionRoutes();
/**
 * GET /api/session
 * @tags Session
 * @security BearerAuth
 * @summary List Session (getAllSession)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,address,type,mode,gameType,hourDate,hourFin,buyIn,cashOut,smallBlind,bigBlind,note
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<SessionResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/session/{id}
 * @tags Session
 * @security BearerAuth
 * @summary Remove Session (deleteSession)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/session/partialUpdate/{id}
 * @tags Session
 * @security BearerAuth
 * @summary Update Session (updateSession)
 * @param {SessionRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/session/{id}
 * @tags Session
 * @security BearerAuth
 * @summary List Session (getSession)
 
 * @param {string} id.path.required
 * @return {SessionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/session
 * @tags Session
 * @security BearerAuth
 * @summary Create Session (addSession)
 * @param {SessionRequestDTO} request.body
 * @return {SessionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Session.js.map