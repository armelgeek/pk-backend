"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avisRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Avis_1 = require("../controller/Avis");
const avisRoutes = () => (0, generic_route_1.genericRoute)({ controller: Avis_1.avisController, schema: joi_1.default.Avis, name: 'Avis' });
exports.avisRouter = avisRoutes();
/**
 * GET /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary List Avis (getAllAvis)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,content,object
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<AvisResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/avis/{id}
 * @tags Avis
 * @security BearerAuth
 * @summary Remove Avis (deleteAvis)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/avis/partialUpdate/{id}
 * @tags Avis
 * @security BearerAuth
 * @summary Update Avis (updateAvis)
 * @param {AvisRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/avis/{id}
 * @tags Avis
 * @security BearerAuth
 * @summary List Avis (getAvis)
 
 * @param {string} id.path.required
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary Create Avis (addAvis)
 * @param {AvisRequestDTO} request.body
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Avis.js.map