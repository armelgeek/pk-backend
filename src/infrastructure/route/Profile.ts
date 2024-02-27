import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { profileController } from '../controller/Profile';

const profileRoutes = () => genericRoute({ controller: profileController, schema: Joi.Profile, name: 'Profile' });

export const profileRouter = profileRoutes();

/**
 * POST /api/profile
 * @tags Profile
 * @security BearerAuth
 * @summary Create Profile (addProfile)
 * @param {ProfileRequestDTO} request.body 
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/profile
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getAllProfile) 
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/profile/{id}
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getProfile) 
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/profile/partialUpdate/{id}
 * @tags Profile
 * @security BearerAuth
 * @summary Update Profile (updateProfile)
 * @param {ProfileRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

