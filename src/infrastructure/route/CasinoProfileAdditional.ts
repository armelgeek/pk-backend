import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { casinoprofileadditionalController } from '../controller/CasinoProfileAdditional';

const casinoprofileadditionalRoutes = () => genericRoute({ controller: casinoprofileadditionalController, schema: Joi.CasinoProfileAdditional, name: 'CasinoProfileAdditional' });

export const casinoprofileadditionalRouter = casinoprofileadditionalRoutes();

/**
 * GET /api/casino-profile-additionals
 * @tags CasinoProfileAdditional
 * @security BearerAuth
 * @summary Créer un CasinoProfileAdditional (getAllCasinoProfileAdditional)
 * @param {CasinoProfileAdditionalRequestDTO} request.body
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
 * @summary Créer un CasinoProfileAdditional (addCasinoProfileAdditional)
 * @param {CasinoProfileAdditionalRequestDTO} request.body
 * @return {CasinoProfileAdditionalResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
