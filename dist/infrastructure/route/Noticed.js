"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticedRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Noticed_1 = require("../controller/Noticed");
const noticedRoutes = () => (0, generic_route_1.genericRoute)({ controller: Noticed_1.noticedController, schema: joi_1.default.Noticed, name: 'Noticed' });
exports.noticedRouter = noticedRoutes();
/**
 * GET /api/noticed
 * @tags Noticed
 * @security BearerAuth
 * @summary List Noticed (getAllNoticed)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,title,description,borderColor
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<NoticedResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/noticed/{id}
 * @tags Noticed
 * @security BearerAuth
 * @summary Remove Noticed (deleteNoticed)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/noticed/partialUpdate/{id}
 * @tags Noticed
 * @security BearerAuth
 * @summary Update Noticed (updateNoticed)
 * @param {NoticedRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/noticed/{id}
 * @tags Noticed
 * @security BearerAuth
 * @summary List Noticed (getNoticed)
 
 * @param {string} id.path.required
 * @return {NoticedResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/noticed
 * @tags Noticed
 * @security BearerAuth
 * @summary Create Noticed (addNoticed)
 * @param {NoticedRequestDTO} request.body
 * @return {NoticedResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Noticed.js.map