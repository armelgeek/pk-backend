import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { tournamenttypeController } from '../controller/TournamentType';

const tournamenttypeRoutes = () => genericRoute({ controller: tournamenttypeController, schema: Joi.TournamentType, name: 'TournamentType' });

export const tournamenttypeRouter = tournamenttypeRoutes();

/**
 * POST /api/tournament-type
 * @tags TournamentType
 * @security BearerAuth
 * @summary Create TournamentType (addTournamentType)
 * @param {TournamentTypeRequestDTO} request.body 
 * @return {TournamentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/tournament-type
 * @tags TournamentType
 * @security BearerAuth
 * @summary List TournamentType (getAllTournamentType)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:name,description
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<TournamentTypeResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/tournament-type/{id}
 * @tags TournamentType
 * @security BearerAuth
 * @summary Remove TournamentType (deleteTournamentType)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/tournament-type/partialUpdate/{id}
 * @tags TournamentType
 * @security BearerAuth
 * @summary Update TournamentType (updateTournamentType)
 * @param {TournamentTypeRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/tournament-type/{id}
 * @tags TournamentType
 * @security BearerAuth
 * @summary List TournamentType (getTournamentType)
 
 * @param {string} id.path.required 
 * @return {TournamentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

