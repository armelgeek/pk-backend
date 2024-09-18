import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { linkController } from '../controller/Link';

const linkRoutes = () => genericRoute({ controller: linkController, schema: Joi.Link, name: 'Link' });

export const linkRouter = linkRoutes();

/**
 * GET /api/link
 * @tags Link
 * @security BearerAuth
 * @summary List Link (getAllLink)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,link,description
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<LinkResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/link
 * @tags Link
 * @security BearerAuth
 * @summary Create Link (addLink)
 * @param {LinkRequestDTO} request.body 
 * @return {LinkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/link/{id}
 * @tags Link
 * @security BearerAuth
 * @summary Remove Link (deleteLink)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/link/partialUpdate/{id}
 * @tags Link
 * @security BearerAuth
 * @summary Update Link (updateLink)
 * @param {LinkRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/link/{id}
 * @tags Link
 * @security BearerAuth
 * @summary List Link (getLink)
 
 * @param {string} id.path.required 
 * @return {LinkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

