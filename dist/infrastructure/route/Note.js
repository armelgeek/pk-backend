"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Note_1 = require("../controller/Note");
const noteRoutes = () => (0, generic_route_1.genericRoute)({ controller: Note_1.noteController, schema: joi_1.default.Note, name: 'Note' });
exports.noteRouter = noteRoutes();
/**
 * GET /api/note
 * @tags Note
 * @security BearerAuth
 * @summary List Note (getAllNote)

 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {NoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/note/{id}
 * @tags Note
 * @security BearerAuth
 * @summary Remove Note (deleteNote)

 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/note/partialUpdate/{id}
 * @tags Note
 * @security BearerAuth
 * @summary Update Note (updateNote)
 * @param {NoteRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/note/{id}
 * @tags Note
 * @security BearerAuth
 * @summary List Note (getNote)

 * @param {string} id.path.required
 * @return {NoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/note
 * @tags Note
 * @security BearerAuth
 * @summary Create Note (addNote)
 * @param {NoteRequestDTO} request.body
 * @return {NoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/note/to/check
 * @tags Note
 * @security BearerAuth
 * @summary Check if has noted same profile (checkHasNotedSameUser)

 * @return {NoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/note/to/compare
 * @tags Note
 * @security BearerAuth
 * @summary Compared note with shared note (comparateNoteByUser)

 * @return {NoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Note.js.map