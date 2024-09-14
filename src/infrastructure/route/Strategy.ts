import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { strategyController } from '../controller/Strategy';

const strategyRoutes = () => genericRoute({ controller: strategyController, schema: Joi.Strategy, name: 'Strategy' });

export const strategyRouter = strategyRoutes();

/**
 * GET /api/strategy
 * @tags Strategy
 * @security BearerAuth
 * @summary List Strategy (getAllStrategy)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:label,description
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<StrategyResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/strategy/{id}
 * @tags Strategy
 * @security BearerAuth
 * @summary Remove Strategy (deleteStrategy)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/strategy/partialUpdate/{id}
 * @tags Strategy
 * @security BearerAuth
 * @summary Update Strategy (updateStrategy)
 * @param {StrategyRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/strategy/{id}
 * @tags Strategy
 * @security BearerAuth
 * @summary List Strategy (getStrategy)
 
 * @param {string} id.path.required 
 * @return {StrategyResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/strategy
 * @tags Strategy
 * @security BearerAuth
 * @summary Create Strategy (addStrategy)
 * @param {StrategyRequestDTO} request.body 
 * @return {StrategyResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

