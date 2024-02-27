import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { clubController } from '../controller/Club';

const clubRoutes = () => genericRoute({ controller: clubController, schema: Joi.Club, name: 'Club' });

export const clubRouter = clubRoutes();

/**
 * POST /api/club
 * @tags Club
 * @security BearerAuth
 * @summary Create Club (addClub)
 * @param {ClubRequestDTO} request.body 
 * @return {ClubResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/club
 * @tags Club
 * @security BearerAuth
 * @summary List Club (getAllClub)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {ClubResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

