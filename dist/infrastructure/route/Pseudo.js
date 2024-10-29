"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudoRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Pseudo_1 = require("../controller/Pseudo");
const pseudoRoutes = () => (0, generic_route_1.genericRoute)({ controller: Pseudo_1.pseudoController, schema: joi_1.default.Pseudo, name: 'Pseudo' });
exports.pseudoRouter = pseudoRoutes();
/**
 * POST /api/pseudo
 * @tags Pseudo
 * @security BearerAuth
 * @summary Create Pseudo (addPseudo)
 * @param {PseudoRequestDTO} request.body
 * @return {PseudoResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/pseudo
 * @tags Pseudo
 * @security BearerAuth
 * @summary List Pseudo (getAllPseudo)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,link,code
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<PseudoResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/pseudo/{id}
 * @tags Pseudo
 * @security BearerAuth
 * @summary Remove Pseudo (deletePseudo)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/pseudo/partialUpdate/{id}
 * @tags Pseudo
 * @security BearerAuth
 * @summary Update Pseudo (updatePseudo)
 * @param {PseudoRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/pseudo/{id}
 * @tags Pseudo
 * @security BearerAuth
 * @summary List Pseudo (getPseudo)
 
 * @param {string} id.path.required
 * @return {PseudoResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Pseudo.js.map