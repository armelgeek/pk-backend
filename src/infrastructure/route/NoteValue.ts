import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { notevalueController } from '../controller/NoteValue';

const notevalueRoutes = () => genericRoute({ controller: notevalueController, schema: Joi.NoteValue, name: 'NoteValue' });

export const notevalueRouter = notevalueRoutes();

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
 * @return {NoteValueResponseDTO} 201
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

