import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { roleController } from '../controller/Role';

const roleRoutes = () => genericRoute({ controller: roleController, schema: Joi.Role, name: 'Role' });

export const roleRouter = roleRoutes();

/**
 * POST /api/role
 * @tags Role
 * @security BearerAuth
 * @summary Create Role (addRole)
 * @param {RoleRequestDTO} request.body 
 * @return {RoleResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/role
 * @tags Role
 * @security BearerAuth
 * @summary List Role (getAllRole)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<RoleResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/role/{id}
 * @tags Role
 * @security BearerAuth
 * @summary Remove Role (deleteRole)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/role/partialUpdate/{id}
 * @tags Role
 * @security BearerAuth
 * @summary Update Role (updateRole)
 * @param {RoleRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/role/{id}
 * @tags Role
 * @security BearerAuth
 * @summary List Role (getRole)
 
 * @param {string} id.path.required 
 * @return {RoleResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

