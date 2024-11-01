import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { gametypeController } from '../controller/GameType';

const gametypeRoutes = () => genericRoute({ controller: gametypeController, schema: Joi.GameType, name: 'GameType' });

export const gametypeRouter = gametypeRoutes();

/**
 * POST /api/game-type
 * @tags GameType
 * @security BearerAuth
 * @summary Create GameType (addGameType)
 * @param {GameTypeRequestDTO} request.body 
 * @return {GameTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/game-type
 * @tags GameType
 * @security BearerAuth
 * @summary List GameType (getAllGameType)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,description,game
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<GameTypeResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/game-type/{id}
 * @tags GameType
 * @security BearerAuth
 * @summary Remove GameType (deleteGameType)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/game-type/partialUpdate/{id}
 * @tags GameType
 * @security BearerAuth
 * @summary Update GameType (updateGameType)
 * @param {GameTypeRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/game-type/{id}
 * @tags GameType
 * @security BearerAuth
 * @summary List GameType (getGameType)
 
 * @param {string} id.path.required 
 * @return {GameTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

