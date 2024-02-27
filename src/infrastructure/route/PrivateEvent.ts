import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { privateeventController } from '../controller/PrivateEvent';

const privateeventRoutes = () => genericRoute({ controller: privateeventController, schema: Joi.PrivateEvent, name: 'PrivateEvent' });

export const privateeventRouter = privateeventRoutes();

/**
 * POST /api/private-event
 * @tags PrivateEvent
 * @security BearerAuth
 * @summary Create PrivateEvent (addPrivateEvent)
 * @param {PrivateEventRequestDTO} request.body 
 * @return {PrivateEventResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/private-event
 * @tags PrivateEvent
 * @security BearerAuth
 * @summary List PrivateEvent (getAllPrivateEvent)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {PrivateEventResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

