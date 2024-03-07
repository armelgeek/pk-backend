import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { dayController } from '../controller/Day';

const dayRoutes = () => genericRoute({ controller: dayController, schema: Joi.Day, name: 'Day' });

export const dayRouter = dayRoutes();

/**
 * GET /api/day
 * @tags Day
 * @security BearerAuth
 * @summary List Day (getAllDay)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {DayResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/day/{id}
 * @tags Day
 * @security BearerAuth
 * @summary Remove Day (deleteDay)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/day/partialUpdate/{id}
 * @tags Day
 * @security BearerAuth
 * @summary Update Day (updateDay)
 * @param {DayRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/day/{id}
 * @tags Day
 * @security BearerAuth
 * @summary List Day (getDay)
 
 * @param {string} id.path.required 
 * @return {DayResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/identity-verification
 * @tags Day
 * @security BearerAuth
 * @summary Create Day (addDay)
 * @param {DayRequestDTO} request.body 
 * @return {DayResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

