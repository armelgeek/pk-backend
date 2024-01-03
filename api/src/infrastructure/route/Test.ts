import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { testController } from '../controller/Test';

const testRoutes = () => genericRoute({ controller: testController, schema: Joi.Test, name: 'Test' });

export const testRouter = testRoutes();

/**
 * GET /api/test
 * @tags Test
 * @security BearerAuth
 * @summary Créer un Test (getAllTest)
 * @param {TestRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {TestResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/test
 * @tags Test
 * @security BearerAuth
 * @summary Créer un Test (addTest)
 * @param {TestRequestDTO} request.body.required
 * @return {TestResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

