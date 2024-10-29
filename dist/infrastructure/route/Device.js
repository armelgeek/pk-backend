"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Device_1 = require("../controller/Device");
const deviceRoutes = () => (0, generic_route_1.genericRoute)({ controller: Device_1.deviceController, schema: joi_1.default.Device, name: 'Device' });
exports.deviceRouter = deviceRoutes();
/**
 * GET /api/device
 * @tags Device
 * @security BearerAuth
 * @summary List Device (getAllDevice)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,uuid,deviseInfo,token
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<DeviceResponseDTO>} 201
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
//# sourceMappingURL=Device.js.map