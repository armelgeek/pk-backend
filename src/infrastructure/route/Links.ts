import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { linksController } from '../controller/Links';

const linksRoutes = () => genericRoute({ controller: linksController, schema: Joi.Links, name: 'Links' });

export const linksRouter = linksRoutes();

/**
 * GET /api/links
 * @tags Links
 * @security BearerAuth
 * @summary Créer un Links (getAllLinks)
 * @param {LinksRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {LinksResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/link
 * @tags Links
 * @security BearerAuth
 * @summary Créer un Links (addLinks)
 * @param {LinksRequestDTO} request.body
 * @return {LinksResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

