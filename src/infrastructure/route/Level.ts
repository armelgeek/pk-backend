import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { levelController } from '../controller/Level';

const levelRoutes = () => genericRoute({ controller: levelController, schema: Joi.Level, name: 'Level' });

export const levelRouter = levelRoutes();

/**
 * GET /api/level
 * @tags Level
 * @security BearerAuth
 * @summary List Level (getAllLevel)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:smallBlind,bigBlind,anteBb,duration,name
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<LevelResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/level/{id}
 * @tags Level
 * @security BearerAuth
 * @summary Remove Level (deleteLevel)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/level/partialUpdate/{id}
 * @tags Level
 * @security BearerAuth
 * @summary Update Level (updateLevel)
 * @param {LevelRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/level/{id}
 * @tags Level
 * @security BearerAuth
 * @summary List Level (getLevel)
 
 * @param {string} id.path.required 
 * @return {LevelResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/level
 * @tags Level
 * @security BearerAuth
 * @summary Create Level (addLevel)
 * @param {LevelRequestDTO} request.body 
 * @return {LevelResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

