import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { mediaController } from '../controller/Media';

const mediaRoutes = () => genericRoute({ controller: mediaController, schema: Joi.Media, name: 'Media' });

export const mediaRouter = mediaRoutes();

/**
 * GET /api/media
 * @tags Media
 * @security BearerAuth
 * @summary List Media (getAllMedia)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {MediaResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/media/{id}
 * @tags Media
 * @security BearerAuth
 * @summary Remove Media (deleteMedia)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/media/partialUpdate/{id}
 * @tags Media
 * @security BearerAuth
 * @summary Update Media (updateMedia)
 * @param {MediaRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/media/{id}
 * @tags Media
 * @security BearerAuth
 * @summary List Media (getMedia)
 
 * @param {string} id.path.required 
 * @return {MediaResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/media
 * @tags Media
 * @security BearerAuth
 * @summary Create Media (addMedia)
 * @param {MediaRequestDTO} request.body 
 * @return {MediaResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

