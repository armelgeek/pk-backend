"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Publication_1 = require("../controller/Publication");
const publicationRoutes = () => (0, generic_route_1.genericRoute)({ controller: Publication_1.publicationController, schema: joi_1.default.Publication, name: 'Publication' });
exports.publicationRouter = publicationRoutes();
/**
 * POST /api/publication
 * @tags Publication
 * @security BearerAuth
 * @summary Create Publication (addPublication)
 * @param {PublicationRequestDTO} request.body
 * @return {PublicationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/publication
 * @tags Publication
 * @security BearerAuth
 * @summary List Publication (getAllPublication)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,content,imageUrls,videoUrls,like,share,originalId,activityDate,audience
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<PublicationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/publication/{id}
 * @tags Publication
 * @security BearerAuth
 * @summary Remove Publication (deletePublication)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/publication/partialUpdate/{id}
 * @tags Publication
 * @security BearerAuth
 * @summary Update Publication (updatePublication)
 * @param {PublicationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/publication/{id}
 * @tags Publication
 * @security BearerAuth
 * @summary List Publication (getPublication)
 
 * @param {string} id.path.required
 * @return {PublicationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/publication/pushUpdate/{id}
 * @tags Publication
 * @security BearerAuth
 * @summary Update Publication (updatePublication)
 * @param {PublicationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Publication.js.map