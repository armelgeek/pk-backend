import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { pageController } from '../controller/Page';

const pageRoutes = () => genericRoute({ controller: pageController, schema: Joi.Page, name: 'Page' });

export const pageRouter = pageRoutes();

/**
 * GET /api/page
 * @tags Page
 * @security BearerAuth
 * @summary List Page (getAllPage)

 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {PageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/page/{id}
 * @tags Page
 * @security BearerAuth
 * @summary List Page (getPage)

 * @param {string} id.path.required
 * @return {PageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/page
 * @tags Page
 * @security BearerAuth
 * @summary Create Page (addPage)
 * @param {PageRequestDTO} request.body
 * @return {PageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/page/partialUpdate/{id}
 * @tags Page
 * @security BearerAuth
 * @summary Update Page (updatePage)
 * @param {PageRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/page/{id}
 * @tags Page
 * @security BearerAuth
 * @summary Remove Page (deletePage)

 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/page/add-member
 * @tags Page
 * @security BearerAuth
 * @summary Create Page (addPage)
 * @param {PageRequestDTO} request.body
 * @return {PageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
