import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { pagepermissionsController } from '../controller/PagePermissions';

const pagepermissionsRoutes = () => genericRoute({ controller: pagepermissionsController, schema: Joi.PagePermissions, name: 'PagePermissions' });

export const pagepermissionsRouter = pagepermissionsRoutes();

/**
 * GET /api/page-permission
 * @tags PagePermissions
 * @security BearerAuth
 * @summary List PagePermissions (getAllPagePermissions)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {PagePermissionsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/page-permission/{id}
 * @tags PagePermissions
 * @security BearerAuth
 * @summary Remove PagePermissions (deletePagePermissions)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/page-permission/partialUpdate/{id}
 * @tags PagePermissions
 * @security BearerAuth
 * @summary Update PagePermissions (updatePagePermissions)
 * @param {PagePermissionsRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/page-permission/{id}
 * @tags PagePermissions
 * @security BearerAuth
 * @summary List PagePermissions (getPagePermissions)
 
 * @param {string} id.path.required 
 * @return {PagePermissionsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/page-permission
 * @tags PagePermissions
 * @security BearerAuth
 * @summary Create PagePermissions (addPagePermissions)
 * @param {PagePermissionsRequestDTO} request.body 
 * @return {PagePermissionsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/page-permission/count/elements
 * @tags PagePermissions
 * @security BearerAuth
 * @summary List PagePermissions (getPagePermissions)
  
 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

