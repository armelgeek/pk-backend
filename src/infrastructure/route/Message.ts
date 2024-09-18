import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { messageController } from '../controller/Message';

const messageRoutes = () => genericRoute({ controller: messageController, schema: Joi.Message, name: 'Message' });

export const messageRouter = messageRoutes();

/**
 * GET /api/message
 * @tags Message
 * @security BearerAuth
 * @summary List Message (getAllMessage)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,content
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<MessageResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/message/{id}
 * @tags Message
 * @security BearerAuth
 * @summary Remove Message (deleteMessage)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/message/partialUpdate/{id}
 * @tags Message
 * @security BearerAuth
 * @summary Update Message (updateMessage)
 * @param {MessageRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/message/{id}
 * @tags Message
 * @security BearerAuth
 * @summary List Message (getMessage)
 
 * @param {string} id.path.required 
 * @return {MessageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/message
 * @tags Message
 * @security BearerAuth
 * @summary Create Message (addMessage)
 * @param {MessageRequestDTO} request.body 
 * @return {MessageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

