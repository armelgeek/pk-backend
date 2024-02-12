import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { pseudosController } from '../controller/Pseudos';

const pseudosRoutes = () => genericRoute({ controller: pseudosController, schema: Joi.Pseudos, name: 'Pseudos' });

export const pseudosRouter = pseudosRoutes();

/**
 * POST /api/pseudos
 * @tags Pseudos
 * @security BearerAuth
 * @summary Créer un Pseudos (addPseudos)
 * @param {PseudosRequestDTO} request.body
 * @return {PseudosResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/pseudos
 * @tags Pseudos
 * @security BearerAuth
 * @summary Créer un Pseudos (getAllPseudos)
 * @param {PseudosRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {PseudosResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

