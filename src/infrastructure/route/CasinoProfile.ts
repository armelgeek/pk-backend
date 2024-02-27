import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { casinoprofileController } from '../controller/CasinoProfile';

const casinoprofileRoutes = () => genericRoute({ controller: casinoprofileController, schema: Joi.CasinoProfile, name: 'CasinoProfile' });

export const casinoprofileRouter = casinoprofileRoutes();

/**
 * GET /api/casino-profile
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary List CasinoProfile (getAllCasinoProfile) 
 * @return {CasinoProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/casino-profile/{id}
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary List CasinoProfile (getCasinoProfile) 
 * @return {CasinoProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/casino-profile
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary Create CasinoProfile (addCasinoProfile)
 * @param {CasinoProfileRequestDTO} request.body 
 * @return {CasinoProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/casino-profile/partialUpdate/{id}
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary Update CasinoProfile (updateCasinoProfile)
 * @param {CasinoProfileRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/casino-profile/{id}
 * @tags CasinoProfile
 * @security BearerAuth
 * @summary Remove CasinoProfile (deleteCasinoProfile) 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

