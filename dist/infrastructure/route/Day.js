"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Day_1 = require("../controller/Day");
const dayRoutes = () => (0, generic_route_1.genericRoute)({ controller: Day_1.dayController, schema: joi_1.default.Day, name: 'Day' });
exports.dayRouter = dayRoutes();
/**
 * GET /api/day
 * @tags Day
 * @security BearerAuth
 * @summary List Day (getAllDay)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,titleDay,startDateDay,startTimeDay,lateReg,limitRegEntry,limitRegBuy,durationDay,nbTableDay,duration,photos,videos
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<DayResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/day/{id}
 * @tags Day
 * @security BearerAuth
 * @summary Remove Day (deleteDay)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/day/partialUpdate/{id}
 * @tags Day
 * @security BearerAuth
 * @summary Update Day (updateDay)
 * @param {DayRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/day/{id}
 * @tags Day
 * @security BearerAuth
 * @summary List Day (getDay)
 
 * @param {string} id.path.required
 * @return {DayResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/day
 * @tags Day
 * @security BearerAuth
 * @summary Create Day (addDay)
 * @param {DayRequestDTO} request.body
 * @return {DayResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Day.js.map