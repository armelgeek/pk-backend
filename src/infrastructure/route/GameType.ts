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
 * @return {GameTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

