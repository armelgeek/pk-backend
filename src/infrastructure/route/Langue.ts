import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { langueController } from '../controller/Langue';

const langueRoutes = () => genericRoute({ controller: langueController, schema: Joi.Langue, name: 'Langue' });

export const langueRouter = langueRoutes();

/**
 * GET /api/langue
 * @tags Langue
 * @security BearerAuth
 * @summary Créer un Langue (getAllLangue)
 * @param {LangueRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {LangueResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/langue
 * @tags Langue
 * @security BearerAuth
 * @summary Créer un Langue (addLangue)
 * @param {LangueRequestDTO} request.body.required
 * @return {LangueResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/langue
 * @tags Langue
 * @security BearerAuth
 * @summary Créer un Langue (deleteLangue)
 * @param {LangueRequestDTO} request.body.required
 * @return {LangueResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/langue
 * @tags Langue
 * @security BearerAuth
 * @summary Créer un Langue (updateLangue)
 * @param {LangueRequestDTO} request.body.required
 * @return {LangueResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

