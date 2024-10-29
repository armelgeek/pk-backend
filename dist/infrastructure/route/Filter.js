"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Filter_1 = require("../controller/Filter");
const filterRoutes = () => (0, generic_route_1.genericRoute)({ controller: Filter_1.filterController, schema: joi_1.default.Filter, name: 'Filter' });
exports.filterRouter = filterRoutes();
/**
 * GET /api/filter
 * @tags Filter
 * @security BearerAuth
 * @summary List Filter (getAllFilter)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,profileId,city
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<FilterResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/filter/{id}
 * @tags Filter
 * @security BearerAuth
 * @summary Remove Filter (deleteFilter)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/filter/partialUpdate/{id}
 * @tags Filter
 * @security BearerAuth
 * @summary Update Filter (updateFilter)
 * @param {FilterRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/filter/{id}
 * @tags Filter
 * @security BearerAuth
 * @summary List Filter (getFilter)
 
 * @param {string} id.path.required
 * @return {FilterResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/filter
 * @tags Filter
 * @security BearerAuth
 * @summary Create Filter (addFilter)
 * @param {FilterRequestDTO} request.body
 * @return {FilterResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Filter.js.map