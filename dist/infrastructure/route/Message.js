"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Message_1 = require("../controller/Message");
const messageRoutes = () => (0, generic_route_1.genericRoute)({ controller: Message_1.messageController, schema: joi_1.default.Message, name: 'Message' });
exports.messageRouter = messageRoutes();
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
//# sourceMappingURL=Message.js.map