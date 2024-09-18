import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { notificationController } from '../controller/Notification';

const notificationRoutes = () => genericRoute({ controller: notificationController, schema: Joi.Notification, name: 'Notification' });

export const notificationRouter = notificationRoutes();

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

