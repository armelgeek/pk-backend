"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagepermissionsRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const PagePermissions_1 = require("../controller/PagePermissions");
const pagepermissionsRoutes = () => (0, generic_route_1.genericRoute)({ controller: PagePermissions_1.pagepermissionsController, schema: joi_1.default.PagePermissions, name: 'PagePermissions' });
exports.pagepermissionsRouter = pagepermissionsRoutes();
/**
 * GET /api/page-permission
 * @tags PagePermissions
 * @security BearerAuth
 * @summary List PagePermissions (getAllPagePermissions)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,profileId,role
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<PagePermissionsResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/page-permission/{id}
 * @tags PagePermissions
 * @security BearerAuth
 * @summary Remove PagePermissions (deletePagePermissions)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/page-permission/partialUpdate/{id}
 * @tags PagePermissions
 * @security BearerAuth
 * @summary Update PagePermissions (updatePagePermissions)
 * @param {PagePermissionsRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/page-permission/{id}
 * @tags PagePermissions
 * @security BearerAuth
 * @summary List PagePermissions (getPagePermissions)
 
 * @param {string} id.path.required
 * @return {PagePermissionsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/page-permission
 * @tags PagePermissions
 * @security BearerAuth
 * @summary Create PagePermissions (addPagePermissions)
 * @param {PagePermissionsRequestDTO} request.body
 * @return {PagePermissionsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/page-permission/count/elements
 * @tags PagePermissions
 * @security BearerAuth
 * @summary List PagePermissions (getPagePermissions)
  
 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=PagePermissions.js.map