import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { sessionController } from '../controller/Session';

const sessionRoutes = () => genericRoute({ controller: sessionController, schema: Joi.Session, name: 'Session' });

export const sessionRouter = sessionRoutes();

/**
 * GET /api/session
 * @tags Session
 * @security BearerAuth
 * @summary List Session (getAllSession)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,address,type,mode,gameType,hourDate,hourFin,buyIn,cashOut,smallBlind,bigBlind,note
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<SessionResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/session/{id}
 * @tags Session
 * @security BearerAuth
 * @summary Remove Session (deleteSession)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/session/partialUpdate/{id}
 * @tags Session
 * @security BearerAuth
 * @summary Update Session (updateSession)
 * @param {SessionRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/session/{id}
 * @tags Session
 * @security BearerAuth
 * @summary List Session (getSession)
 
 * @param {string} id.path.required 
 * @return {SessionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/session
 * @tags Session
 * @security BearerAuth
 * @summary Create Session (addSession)
 * @param {SessionRequestDTO} request.body 
 * @return {SessionResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

