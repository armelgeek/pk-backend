import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { mediasController } from '../controller/Medias';

const mediasRoutes = () => genericRoute({ controller: mediasController, schema: Joi.Medias, name: 'Medias' });

export const mediasRouter = mediasRoutes();

/**
 * GET /api/medias
 * @tags Medias
 * @security BearerAuth
 * @summary List Medias (getAllMedias)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,type,url,size,profileId,pageId,category,eventId,shares,likes,duration
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<MediasResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/medias/{id}
 * @tags Medias
 * @security BearerAuth
 * @summary Remove Medias (deleteMedias)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/medias/partialUpdate/{id}
 * @tags Medias
 * @security BearerAuth
 * @summary Update Medias (updateMedias)
 * @param {MediasRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/medias/{id}
 * @tags Medias
 * @security BearerAuth
 * @summary List Medias (getMedias)
 
 * @param {string} id.path.required 
 * @return {MediasResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/medias
 * @tags Medias
 * @security BearerAuth
 * @summary Create Medias (addMedias)
 * @param {MediasRequestDTO} request.body 
 * @return {MediasResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

