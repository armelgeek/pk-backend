import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { pageadditionalController } from '../controller/PageAdditional';

const pageadditionalRoutes = () => genericRoute({ controller: pageadditionalController, schema: Joi.PageAdditional, name: 'PageAdditional' });

export const pageadditionalRouter = pageadditionalRoutes();

/**
 * GET /api/page-additional
 * @tags PageAdditional
 * @security BearerAuth
 * @summary List PageAdditional (getAllPageAdditional)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:monday,tuesday,wednesday,thursday,friday,saturday,sunday,members,type
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<PageAdditionalResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/page-additional
 * @tags PageAdditional
 * @security BearerAuth
 * @summary Create PageAdditional (addPageAdditional)
 * @param {PageAdditionalRequestDTO} request.body 
 * @return {PageAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/page-additional/partialUpdate/{id}
 * @tags PageAdditional
 * @security BearerAuth
 * @summary Update PageAdditional (updatePageAdditional)
 * @param {PageAdditionalRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/page-additional/{id}
 * @tags PageAdditional
 * @security BearerAuth
 * @summary Remove PageAdditional (deletePageAdditional)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/page-additional/{id}
 * @tags PageAdditional
 * @security BearerAuth
 * @summary List PageAdditional (getPageAdditional)
 
 * @param {string} id.path.required 
 * @return {PageAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

