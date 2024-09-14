import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { codeparrainController } from '../controller/CodeParrain';

const codeparrainRoutes = () => genericRoute({ controller: codeparrainController, schema: Joi.CodeParrain, name: 'CodeParrain' });

export const codeparrainRouter = codeparrainRoutes();

/**
 * GET /api/code-parrain
 * @tags CodeParrain
 * @security BearerAuth
 * @summary List CodeParrain (getAllCodeParrain)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:code,percentage
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

