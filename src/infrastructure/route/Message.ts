import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { messageController } from '../controller/Message';

const messageRoutes = () => genericRoute({ controller: messageController, schema: Joi.Message, name: 'Message' });

export const messageRouter = messageRoutes();

/**
 * GET /api/message
 * @tags Message
 * @security BearerAuth
 * @summary Créer un Message (getAllMessage)
 * @param {MessageRequestDTO} request.body.required
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {MessageResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

