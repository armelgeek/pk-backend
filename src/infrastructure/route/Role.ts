import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { roleController } from '../controller/Role';

const roleRoutes = () => genericRoute({ controller: roleController, schema: Joi.Role, name: 'Role' });

export const roleRouter = roleRoutes();

/**
 * POST /api/role
 * @tags Role
 * @security BearerAuth
 * @summary Créer un Role (addRole)
 * @param {RoleRequestDTO} request.body
 * @return {RoleResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/role
 * @tags Role
 * @security BearerAuth
 * @summary Créer un Role (getAllRole)
 * @param {RoleRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {RoleResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

