"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Page_1 = require("../controller/Page");
const pageRoutes = () => (0, generic_route_1.genericRoute)({ controller: Page_1.pageController, schema: joi_1.default.Page, name: 'Page' });
exports.pageRouter = pageRoutes();
/**
 * GET /api/page
 * @tags Page
 * @security BearerAuth
 * @summary List Page (getAllPage)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,country,address,email,description,type,pageId
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<PageResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/page/{id}
 * @tags Page
 * @security BearerAuth
 * @summary List Page (getPage)
 
 * @param {string} id.path.required
 * @return {PageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/page
 * @tags Page
 * @security BearerAuth
 * @summary Create Page (addPage)
 * @param {PageRequestDTO} request.body
 * @return {PageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/page/partialUpdate/{id}
 * @tags Page
 * @security BearerAuth
 * @summary Update Page (updatePage)
 * @param {PageRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/page/{id}
 * @tags Page
 * @security BearerAuth
 * @summary Remove Page (deletePage)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Page.js.map