import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { deviceController } from '../controller/Device';

const deviceRoutes = () => genericRoute({ controller: deviceController, schema: Joi.Device, name: 'Device' });

export const deviceRouter = deviceRoutes();

/**
 * GET /api/device
 * @tags Device
 * @security BearerAuth
 * @summary List Device (getAllDevice)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {DeviceResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/device/{id}
 * @tags Device
 * @security BearerAuth
 * @summary Remove Device (deleteDevice)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/device/partialUpdate/{id}
 * @tags Device
 * @security BearerAuth
 * @summary Update Device (updateDevice)
 * @param {DeviceRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/device/{id}
 * @tags Device
 * @security BearerAuth
 * @summary List Device (getDevice)
 
 * @param {string} id.path.required 
 * @return {DeviceResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/device
 * @tags Device
 * @security BearerAuth
 * @summary Create Device (addDevice)
 * @param {DeviceRequestDTO} request.body 
 * @return {DeviceResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

