import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { noticedController } from '../controller/Noticed';

const noticedRoutes = () => genericRoute({ controller: noticedController, schema: Joi.Noticed, name: 'Noticed' });

export const noticedRouter = noticedRoutes();

/**
 * GET /api/noticed
 * @tags Noticed
 * @security BearerAuth
 * @summary List Noticed (getAllNoticed)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:title,description,borderColor
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<NoticedResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/noticed/{id}
 * @tags Noticed
 * @security BearerAuth
 * @summary Remove Noticed (deleteNoticed)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/noticed/partialUpdate/{id}
 * @tags Noticed
 * @security BearerAuth
 * @summary Update Noticed (updateNoticed)
 * @param {NoticedRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/noticed/{id}
 * @tags Noticed
 * @security BearerAuth
 * @summary List Noticed (getNoticed)
 
 * @param {string} id.path.required 
 * @return {NoticedResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/noticed
 * @tags Noticed
 * @security BearerAuth
 * @summary Create Noticed (addNoticed)
 * @param {NoticedRequestDTO} request.body 
 * @return {NoticedResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

