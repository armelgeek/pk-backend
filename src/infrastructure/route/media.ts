import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { mediaController } from '../controller/media';

const mediaRoutes = () => genericRoute({ controller: mediaController, schema: Joi.media, name: 'media' });

export const mediaRouter = mediaRoutes();

/**
 * GET /api/media
 * @tags media
 * @security BearerAuth
 * @summary List media (getAllmedia)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {mediaResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/media/{id}
 * @tags media
 * @security BearerAuth
 * @summary Remove media (deletemedia)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/media/partialUpdate/{id}
 * @tags media
 * @security BearerAuth
 * @summary Update media (updatemedia)
 * @param {mediaRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/media/{id}
 * @tags media
 * @security BearerAuth
 * @summary List media (getmedia)
 
 * @param {string} id.path.required 
 * @return {mediaResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/media
 * @tags media
 * @security BearerAuth
 * @summary Create media (addmedia)
 * @param {mediaRequestDTO} request.body 
 * @return {mediaResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

