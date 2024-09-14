import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { filterController } from '../controller/Filter';

const filterRoutes = () => genericRoute({ controller: filterController, schema: Joi.Filter, name: 'Filter' });

export const filterRouter = filterRoutes();

/**
 * GET /api/filter
 * @tags Filter
 * @security BearerAuth
 * @summary List Filter (getAllFilter)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:profileId,city
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<FilterResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/filter/{id}
 * @tags Filter
 * @security BearerAuth
 * @summary Remove Filter (deleteFilter)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/filter/partialUpdate/{id}
 * @tags Filter
 * @security BearerAuth
 * @summary Update Filter (updateFilter)
 * @param {FilterRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/filter/{id}
 * @tags Filter
 * @security BearerAuth
 * @summary List Filter (getFilter)
 
 * @param {string} id.path.required 
 * @return {FilterResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/filter
 * @tags Filter
 * @security BearerAuth
 * @summary Create Filter (addFilter)
 * @param {FilterRequestDTO} request.body 
 * @return {FilterResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

