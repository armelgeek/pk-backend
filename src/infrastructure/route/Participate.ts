import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { participateController } from '../controller/Participate';

const participateRoutes = () => genericRoute({ controller: participateController, schema: Joi.Participate, name: 'Participate' });

export const participateRouter = participateRoutes();

/**
 * GET /api/participate
 * @tags Participate
 * @security BearerAuth
 * @summary List Participate (getAllParticipate)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {ParticipateResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/participate/{id}
 * @tags Participate
 * @security BearerAuth
 * @summary Remove Participate (deleteParticipate)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/participate/partialUpdate/{id}
 * @tags Participate
 * @security BearerAuth
 * @summary Update Participate (updateParticipate)
 * @param {ParticipateRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/participate/{id}
 * @tags Participate
 * @security BearerAuth
 * @summary List Participate (getParticipate)
 
 * @param {string} id.path.required 
 * @return {ParticipateResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/participate
 * @tags Participate
 * @security BearerAuth
 * @summary Create Participate (addParticipate)
 * @param {ParticipateRequestDTO} request.body 
 * @return {ParticipateResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

