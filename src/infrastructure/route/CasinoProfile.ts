import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { casinoprofileController } from '../controller/CasinoProfile';

const casinoprofileRoutes = () => genericRoute({ controller: casinoprofileController, schema: Joi.CasinoProfile, name: 'CasinoProfile' });

export const casinoprofileRouter = casinoprofileRoutes();

/**
 * GET /api/casino-profiles
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary Créer un CasinoProfile (getAllCasinoProfile)
 * @param {CasinoProfileRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {CasinoProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/casino-profile/{id}
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary Créer un CasinoProfile (getCasinoProfile)
 * @param {CasinoProfileRequestDTO} request.body
 * @param {string} id.path.required
 * @return {CasinoProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/casino-profile
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary Créer un CasinoProfile (addCasinoProfile)
 * @param {CasinoProfileRequestDTO} request.body
 * @return {CasinoProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/casino-profile/{id}
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary Créer un CasinoProfile (updateCasinoProfile)
 * @param {CasinoProfileRequestDTO} request.body
 * @param {string} id.path.required
 * @return {CasinoProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

