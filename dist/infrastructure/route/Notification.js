"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Notification_1 = require("../controller/Notification");
const notificationRoutes = () => (0, generic_route_1.genericRoute)({ controller: Notification_1.notificationController, schema: joi_1.default.Notification, name: 'Notification' });
exports.notificationRouter = notificationRoutes();
/**
 * POST /api/profile
 * @tags Notification
 * @security BearerAuth
 * @summary Create Notification (notificationNotification)
 * @param {NotificationRequestDTO} request.body
 * @return {NotificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/notification
 * @tags Notification
 * @security BearerAuth
 * @summary List Notification (getAllNotification)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,title,message,view,targetId,target,type,sender,receiver
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<NotificationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/notification/{id}
 * @tags Notification
 * @security BearerAuth
 * @summary List Notification (getNotification)
 
 * @param {string} id.path.required
 * @return {NotificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/notification/partialUpdate/{id}
 * @tags Notification
 * @security BearerAuth
 * @summary Update Notification (updateNotification)
 * @param {NotificationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/notification
 * @tags Notification
 * @security BearerAuth
 * @summary Create Notification (addNotification)
 * @param {NotificationRequestDTO} request.body
 * @return {NotificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Notification.js.map