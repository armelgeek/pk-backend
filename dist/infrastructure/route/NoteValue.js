"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notevalueRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const NoteValue_1 = require("../controller/NoteValue");
const notevalueRoutes = () => (0, generic_route_1.genericRoute)({ controller: NoteValue_1.notevalueController, schema: joi_1.default.NoteValue, name: 'NoteValue' });
exports.notevalueRouter = notevalueRoutes();
/**
 * DELETE /api/note-value/{id}
 * @tags NoteValue
 * @security BearerAuth
 * @summary Remove NoteValue (deleteNoteValue)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/note-value
 * @tags NoteValue
 * @security BearerAuth
 * @summary List NoteValue (getAllNoteValue)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,content,imageUrl,type
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<NoteValueResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/note-value/partialUpdate/{id}
 * @tags NoteValue
 * @security BearerAuth
 * @summary Update NoteValue (updateNoteValue)
 * @param {NoteValueRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/note-value/{id}
 * @tags NoteValue
 * @security BearerAuth
 * @summary List NoteValue (getNoteValue)
 
 * @param {string} id.path.required
 * @return {NoteValueResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/note-value
 * @tags NoteValue
 * @security BearerAuth
 * @summary Create NoteValue (addNoteValue)
 * @param {NoteValueRequestDTO} request.body
 * @return {NoteValueResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=NoteValue.js.map