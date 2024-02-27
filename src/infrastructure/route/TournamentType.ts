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
 * @return {TournamentTypeResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

