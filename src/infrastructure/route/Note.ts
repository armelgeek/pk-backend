import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { noteController } from '../controller/Note';

const noteRoutes = () => genericRoute({ controller: noteController, schema: Joi.Note, name: 'Note' });

export const noteRouter = noteRoutes();

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
