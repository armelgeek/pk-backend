import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { partenerController } from '../controller/Partener';

const partenerRoutes = () => genericRoute({ controller: partenerController, schema: Joi.Partener, name: 'Partener' });

export const partenerRouter = partenerRoutes();

/**
 * GET /api/partener
 * @tags Partener
 * @security BearerAuth
 * @summary List Partener (getAllPartener)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,description,price,subscriptionStripeId,title,hendonmob,rangAllTimeMoney,bracelet,job,type,message
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<PartenerResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/partener
 * @tags Partener
 * @security BearerAuth
 * @summary Create Partener (addPartener)
 * @param {PartenerRequestDTO} request.body 
 * @return {PartenerResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/partener/partialUpdate/{id}
 * @tags Partener
 * @security BearerAuth
 * @summary Update Partener (updatePartener)
 * @param {PartenerRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/partener/{id}
 * @tags Partener
 * @security BearerAuth
 * @summary List Partener (getPartener)
 
 * @param {string} id.path.required 
 * @return {PartenerResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/partener/{id}
 * @tags Partener
 * @security BearerAuth
 * @summary Remove Partener (deletePartener)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

