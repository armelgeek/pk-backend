"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharingnoteRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const SharingNote_1 = require("../controller/SharingNote");
const sharingnoteRoutes = () => (0, generic_route_1.genericRoute)({ controller: SharingNote_1.sharingnoteController, schema: joi_1.default.SharingNote, name: 'SharingNote' });
exports.sharingnoteRouter = sharingnoteRoutes();
/**
 * GET /api/sharing-note
 * @tags SharingNote
 * @security BearerAuth
 * @summary List SharingNote (getAllSharingNote)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,profileId,shareId
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<SharingNoteResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/sharing-note/{id}
 * @tags SharingNote
 * @security BearerAuth
 * @summary Remove SharingNote (deleteSharingNote)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/sharing-note/partialUpdate/{id}
 * @tags SharingNote
 * @security BearerAuth
 * @summary Update SharingNote (updateSharingNote)
 * @param {SharingNoteRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/sharing-note/{id}
 * @tags SharingNote
 * @security BearerAuth
 * @summary List SharingNote (getSharingNote)
 
 * @param {string} id.path.required
 * @return {SharingNoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/sharing-note
 * @tags SharingNote
 * @security BearerAuth
 * @summary Create SharingNote (addSharingNote)
 * @param {SharingNoteRequestDTO} request.body
 * @return {SharingNoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=SharingNote.js.map