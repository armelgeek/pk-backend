import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { sharingnoteController } from '../controller/SharingNote';

const sharingnoteRoutes = () => genericRoute({ controller: sharingnoteController, schema: Joi.SharingNote, name: 'SharingNote' });

export const sharingnoteRouter = sharingnoteRoutes();

/**
 * GET /api/sharing-note
 * @tags SharingNote
 * @security BearerAuth
 * @summary List SharingNote (getAllSharingNote)

 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {SharingNoteResponseDTO} 201
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

/**
 * GET /api/sharing-note/to/get
 * @tags SharingNote
 * @security BearerAuth
 * @summary get sharingNote for (getSharedNoteFor)

 * @param {string} profileId.path.required
 * @return {SharingNoteRequestDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
