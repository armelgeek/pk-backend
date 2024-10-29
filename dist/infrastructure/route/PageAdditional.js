"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageadditionalRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const PageAdditional_1 = require("../controller/PageAdditional");
const pageadditionalRoutes = () => (0, generic_route_1.genericRoute)({ controller: PageAdditional_1.pageadditionalController, schema: joi_1.default.PageAdditional, name: 'PageAdditional' });
exports.pageadditionalRouter = pageadditionalRoutes();
/**
 * GET /api/page-additional
 * @tags PageAdditional
 * @security BearerAuth
 * @summary List PageAdditional (getAllPageAdditional)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,monday,tuesday,wednesday,thursday,friday,saturday,sunday,members,type
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<PageAdditionalResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/page-additional
 * @tags PageAdditional
 * @security BearerAuth
 * @summary Create PageAdditional (addPageAdditional)
 * @param {PageAdditionalRequestDTO} request.body
 * @return {PageAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/page-additional/partialUpdate/{id}
 * @tags PageAdditional
 * @security BearerAuth
 * @summary Update PageAdditional (updatePageAdditional)
 * @param {PageAdditionalRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/page-additional/{id}
 * @tags PageAdditional
 * @security BearerAuth
 * @summary Remove PageAdditional (deletePageAdditional)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/page-additional/{id}
 * @tags PageAdditional
 * @security BearerAuth
 * @summary List PageAdditional (getPageAdditional)
 
 * @param {string} id.path.required
 * @return {PageAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=PageAdditional.js.map