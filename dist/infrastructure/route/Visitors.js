"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorsRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Visitors_1 = require("../controller/Visitors");
const visitorsRoutes = () => (0, generic_route_1.genericRoute)({ controller: Visitors_1.visitorsController, schema: joi_1.default.Visitors, name: 'Visitors' });
exports.visitorsRouter = visitorsRoutes();
/**
 * GET /api/visitors
 * @tags Visitors
 * @security BearerAuth
 * @summary List Visitors (getAllVisitors)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,eventId,profileId,target,type
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<VisitorsResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/visitors/{id}
 * @tags Visitors
 * @security BearerAuth
 * @summary Remove Visitors (deleteVisitors)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/visitors/partialUpdate/{id}
 * @tags Visitors
 * @security BearerAuth
 * @summary Update Visitors (updateVisitors)
 * @param {VisitorsRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/visitors/{id}
 * @tags Visitors
 * @security BearerAuth
 * @summary List Visitors (getVisitors)
 
 * @param {string} id.path.required
 * @return {VisitorsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/visitors
 * @tags Visitors
 * @security BearerAuth
 * @summary Create Visitors (addVisitors)
 * @param {VisitorsRequestDTO} request.body
 * @return {VisitorsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/visitors/count/elements
 * @tags Visitors
 * @security BearerAuth
 * @summary List Visitors (getVisitors)
  
 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Visitors.js.map