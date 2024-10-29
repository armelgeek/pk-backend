"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictionRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Restriction_1 = require("../controller/Restriction");
const restrictionRoutes = () => (0, generic_route_1.genericRoute)({ controller: Restriction_1.restrictionController, schema: joi_1.default.Restriction, name: 'Restriction' });
exports.restrictionRouter = restrictionRoutes();
/**
 * GET /api/restriction
 * @tags Restriction
 * @security BearerAuth
 * @summary List Restriction (getAllRestriction)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,type,limit,frequence,action,functionality
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<RestrictionResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/restriction/{id}
 * @tags Restriction
 * @security BearerAuth
 * @summary Remove Restriction (deleteRestriction)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/restriction/partialUpdate/{id}
 * @tags Restriction
 * @security BearerAuth
 * @summary Update Restriction (updateRestriction)
 * @param {RestrictionRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/restriction/{id}
 * @tags Restriction
 * @security BearerAuth
 * @summary List Restriction (getRestriction)
 
 * @param {string} id.path.required
 * @return {RestrictionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/restriction
 * @tags Restriction
 * @security BearerAuth
 * @summary Create Restriction (addRestriction)
 * @param {RestrictionRequestDTO} request.body
 * @return {RestrictionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Restriction.js.map