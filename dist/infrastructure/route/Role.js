"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Role_1 = require("../controller/Role");
const roleRoutes = () => (0, generic_route_1.genericRoute)({ controller: Role_1.roleController, schema: joi_1.default.Role, name: 'Role' });
exports.roleRouter = roleRoutes();
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
//# sourceMappingURL=Role.js.map