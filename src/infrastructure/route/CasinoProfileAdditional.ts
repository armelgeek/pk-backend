import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { casinoprofileadditionalController } from '../controller/CasinoProfileAdditional';

const casinoprofileadditionalRoutes = () => genericRoute({ controller: casinoprofileadditionalController, schema: Joi.CasinoProfileAdditional, name: 'CasinoProfileAdditional' });

export const casinoprofileadditionalRouter = casinoprofileadditionalRoutes();

/**
 * GET /api/casino-profile-additional
 * @tags CasinoProfileAdditional
 * @security BearerAuth
 * @summary List CasinoProfileAdditional (getAllCasinoProfileAdditional)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {CasinoProfileAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/casino-profile-additional
 * @tags CasinoProfileAdditional
 * @security BearerAuth
 * @summary Create CasinoProfileAdditional (addCasinoProfileAdditional)
 * @param {CasinoProfileAdditionalRequestDTO} request.body 
 * @return {CasinoProfileAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/casino-profile-additional/partialUpdate/{id}
 * @tags CasinoProfileAdditional
 * @security BearerAuth
 * @summary Update CasinoProfileAdditional (updateCasinoProfileAdditional)
 * @param {CasinoProfileAdditionalRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/casino-profile-additional/{id}
 * @tags CasinoProfileAdditional
 * @security BearerAuth
 * @summary Remove CasinoProfileAdditional (deleteCasinoProfileAdditional)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/casino-profile-additional/{id}
 * @tags CasinoProfileAdditional
 * @security BearerAuth
 * @summary List CasinoProfileAdditional (getCasinoProfileAdditional)
 
 * @param {string} id.path.required 
 * @return {CasinoProfileAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

