"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediasRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Medias_1 = require("../controller/Medias");
const mediasRoutes = () => (0, generic_route_1.genericRoute)({ controller: Medias_1.mediasController, schema: joi_1.default.Medias, name: 'Medias' });
exports.mediasRouter = mediasRoutes();
/**
 * GET /api/medias
 * @tags Medias
 * @security BearerAuth
 * @summary List Medias (getAllMedias)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,type,url,size,profileId,pageId,category,eventId,shares,likes,duration
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<MediasResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/medias/{id}
 * @tags Medias
 * @security BearerAuth
 * @summary Remove Medias (deleteMedias)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/medias/partialUpdate/{id}
 * @tags Medias
 * @security BearerAuth
 * @summary Update Medias (updateMedias)
 * @param {MediasRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/medias/{id}
 * @tags Medias
 * @security BearerAuth
 * @summary List Medias (getMedias)
 
 * @param {string} id.path.required
 * @return {MediasResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/medias
 * @tags Medias
 * @security BearerAuth
 * @summary Create Medias (addMedias)
 * @param {MediasRequestDTO} request.body
 * @return {MediasResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Medias.js.map