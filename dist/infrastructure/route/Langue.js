"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langueRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Langue_1 = require("../controller/Langue");
const langueRoutes = () => (0, generic_route_1.genericRoute)({ controller: Langue_1.langueController, schema: joi_1.default.Langue, name: 'Langue' });
exports.langueRouter = langueRoutes();
/**
 * GET /api/langues
 * @tags Langue
 * @security BearerAuth
 * @summary List Langue (getAllLangue)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,code,nom
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<LangueResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/langue
 * @tags Langue
 * @security BearerAuth
 * @summary Create Langue (addLangue)
 * @param {LangueRequestDTO} request.body
 * @return {LangueResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/langue
 * @tags Langue
 * @security BearerAuth
 * @summary Remove Langue (deleteLangue)
  
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/langue
 * @tags Langue
 * @security BearerAuth
 * @summary Update Langue (updateLangue)
 * @param {LangueRequestDTO} request.body
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Langue.js.map