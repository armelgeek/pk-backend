import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { partenerController } from '../controller/Partener';

const partenerRoutes = () => genericRoute({ controller: partenerController, schema: Joi.Partener, name: 'Partener' });

export const partenerRouter = partenerRoutes();

/**
 * GET /api/partener
 * @tags Partener
 * @security BearerAuth
 * @summary Créer un Partener (getAllPartener)
 * @param {PartenerRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {PartenerResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/partener
 * @tags Partener
 * @security BearerAuth
 * @summary Créer un Partener (addPartener)
 * @param {PartenerRequestDTO} request.body
 * @return {PartenerResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/partener/partialUpdate/{id}
 * @tags Partener
 * @security BearerAuth
 * @summary Créer un Partener (updatePartener)
 * @param {PartenerRequestDTO} request.body
 * @param {string} id.path.required
 * @return {PartenerResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/partener/{id}
 * @tags Partener
 * @security BearerAuth
 * @summary Créer un Partener (getPartener)
 * @param {PartenerRequestDTO} request.body
 * @param {string} id.path.required
 * @return {PartenerResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/partener/{id}
 * @tags Partener
 * @security BearerAuth
 * @summary Créer un Partener (deletePartener)
 * @param {PartenerRequestDTO} request.body
 * @param {string} id.path.required
 * @return {PartenerResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

