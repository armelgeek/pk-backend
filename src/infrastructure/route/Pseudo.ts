import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { pseudoController } from '../controller/Pseudo';

const pseudoRoutes = () => genericRoute({ controller: pseudoController, schema: Joi.Pseudo, name: 'Pseudo' });

export const pseudoRouter = pseudoRoutes();

/**
 * POST /api/pseudo
 * @tags Pseudo
 * @security BearerAuth
 * @summary Create Pseudo (addPseudo)
 * @param {PseudoRequestDTO} request.body 
 * @return {PseudoResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/pseudos
 * @tags Pseudo
 * @security BearerAuth
 * @summary List Pseudo (getAllPseudo) 
 * @return {PseudoResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

