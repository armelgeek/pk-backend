import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { blockingController } from '../controller/Blocking';

const blockingRoutes = () => genericRoute({ controller: blockingController, schema: Joi.Blocking, name: 'Blocking' });

export const blockingRouter = blockingRoutes();

/**
 * GET /api/blocking
 * @tags Blocking
 * @security BearerAuth
 * @summary List Blocking (getAllBlocking)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:profileId,blockingProfile,reason
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<BlockingResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/blocking/{id}
 * @tags Blocking
 * @security BearerAuth
 * @summary Remove Blocking (deleteBlocking)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/blocking/partialUpdate/{id}
 * @tags Blocking
 * @security BearerAuth
 * @summary Update Blocking (updateBlocking)
 * @param {BlockingRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/blocking/{id}
 * @tags Blocking
 * @security BearerAuth
 * @summary List Blocking (getBlocking)
 
 * @param {string} id.path.required 
 * @return {BlockingResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/blocking
 * @tags Blocking
 * @security BearerAuth
 * @summary Create Blocking (addBlocking)
 * @param {BlockingRequestDTO} request.body 
 * @return {BlockingResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

