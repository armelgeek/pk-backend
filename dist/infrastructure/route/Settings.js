"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Settings_1 = require("../controller/Settings");
const settingsRoutes = () => (0, generic_route_1.genericRoute)({ controller: Settings_1.settingsController, schema: joi_1.default.Settings, name: 'Settings' });
exports.settingsRouter = settingsRoutes();
/**
 * GET /api/settings
 * @tags Settings
 * @security BearerAuth
 * @summary List Settings (getAllSettings)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,donationDescription,countries
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<SettingsResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/settings/{id}
 * @tags Settings
 * @security BearerAuth
 * @summary Remove Settings (deleteSettings)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/settings/partialUpdate/{id}
 * @tags Settings
 * @security BearerAuth
 * @summary Update Settings (updateSettings)
 * @param {SettingsRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/settings/{id}
 * @tags Settings
 * @security BearerAuth
 * @summary List Settings (getSettings)
 
 * @param {string} id.path.required
 * @return {SettingsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/settings
 * @tags Settings
 * @security BearerAuth
 * @summary Create Settings (addSettings)
 * @param {SettingsRequestDTO} request.body
 * @return {SettingsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Settings.js.map