import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { sharingnoteController } from '../controller/sharingNote';

const sharingnoteRoutes = () => genericRoute({ controller: sharingnoteController, schema: Joi.sharingNote, name: 'sharingNote' });

export const sharingnoteRouter = sharingnoteRoutes();

/**
 * GET /api/sharing-note
 * @tags sharingNote
 * @security BearerAuth
 * @summary List sharingNote (getAllsharingNote)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {sharingNoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/sharing-note/{id}
 * @tags sharingNote
 * @security BearerAuth
 * @summary Remove sharingNote (deletesharingNote)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/sharing-note/partialUpdate/{id}
 * @tags sharingNote
 * @security BearerAuth
 * @summary Update sharingNote (updatesharingNote)
 * @param {sharingNoteRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/sharing-note/{id}
 * @tags sharingNote
 * @security BearerAuth
 * @summary List sharingNote (getsharingNote)
 
 * @param {string} id.path.required 
 * @return {sharingNoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/sharing-note
 * @tags sharingNote
 * @security BearerAuth
 * @summary Create sharingNote (addsharingNote)
 * @param {sharingNoteRequestDTO} request.body 
 * @return {sharingNoteResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

