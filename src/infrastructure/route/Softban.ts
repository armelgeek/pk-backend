import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { softbanController } from '../controller/Softban';

const softbanRoutes = () => genericRoute({ controller: softbanController, schema: Joi.Softban, name: 'Softban' });

export const softbanRouter = softbanRoutes();

/**
 * GET /api/softban
 * @tags Softban
 * @security BearerAuth
 * @summary List Softban (getAllSoftban)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:niveau,titre,duration
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<SoftbanResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/softban/{id}
 * @tags Softban
 * @security BearerAuth
 * @summary Remove Softban (deleteSoftban)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/softban/partialUpdate/{id}
 * @tags Softban
 * @security BearerAuth
 * @summary Update Softban (updateSoftban)
 * @param {SoftbanRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/softban/{id}
 * @tags Softban
 * @security BearerAuth
 * @summary List Softban (getSoftban)
 
 * @param {string} id.path.required 
 * @return {SoftbanResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/softban
 * @tags Softban
 * @security BearerAuth
 * @summary Create Softban (addSoftban)
 * @param {SoftbanRequestDTO} request.body 
 * @return {SoftbanResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

