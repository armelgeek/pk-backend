import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { linkController } from '../controller/Link';

const linkRoutes = () => genericRoute({ controller: linkController, schema: Joi.Link, name: 'Link' });

export const linkRouter = linkRoutes();

/**
 * GET /api/link
 * @tags Link
 * @security BearerAuth
 * @summary Créer un Link (getAllLink)
 * @param {LinkRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {LinkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/link
 * @tags Link
 * @security BearerAuth
 * @summary Créer un Link (addLink)
 * @param {LinkRequestDTO} request.body
 * @return {LinkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/link/{id}
 * @tags Link
 * @security BearerAuth
 * @summary Créer un Link (deleteLink)
 * @param {LinkRequestDTO} request.body
 * @param {string} id.path.required
 * @return {LinkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/link/partialUpdate/{id}
 * @tags Link
 * @security BearerAuth
 * @summary Créer un Link (updateLink)
 * @param {LinkRequestDTO} request.body
 * @param {string} id.path.required
 * @return {LinkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

