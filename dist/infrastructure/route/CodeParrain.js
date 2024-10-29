"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeparrainRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const CodeParrain_1 = require("../controller/CodeParrain");
const codeparrainRoutes = () => (0, generic_route_1.genericRoute)({ controller: CodeParrain_1.codeparrainController, schema: joi_1.default.CodeParrain, name: 'CodeParrain' });
exports.codeparrainRouter = codeparrainRoutes();
/**
 * GET /api/code-parrain
 * @tags CodeParrain
 * @security BearerAuth
 * @summary List CodeParrain (getAllCodeParrain)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,code,percentage
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<CodeParrainResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/code-parrain/{id}
 * @tags CodeParrain
 * @security BearerAuth
 * @summary Remove CodeParrain (deleteCodeParrain)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/code-parrain/partialUpdate/{id}
 * @tags CodeParrain
 * @security BearerAuth
 * @summary Update CodeParrain (updateCodeParrain)
 * @param {CodeParrainRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/code-parrain/{id}
 * @tags CodeParrain
 * @security BearerAuth
 * @summary List CodeParrain (getCodeParrain)
 
 * @param {string} id.path.required
 * @return {CodeParrainResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/identity-verification
 * @tags CodeParrain
 * @security BearerAuth
 * @summary Create CodeParrain (addCodeParrain)
 * @param {CodeParrainRequestDTO} request.body
 * @return {CodeParrainResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=CodeParrain.js.map