import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { settingsController } from '../controller/Settings';

const settingsRoutes = () => genericRoute({ controller: settingsController, schema: Joi.Settings, name: 'Settings' });

export const settingsRouter = settingsRoutes();

/**
 * GET /api/settings
 * @tags Settings
 * @security BearerAuth
 * @summary List Settings (getAllSettings)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {SettingsResponseDTO} 201
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

