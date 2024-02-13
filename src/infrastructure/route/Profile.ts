import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { profileController } from '../controller/Profile';

const profileRoutes = () => genericRoute({ controller: profileController, schema: Joi.Profile, name: 'Profile' });

export const profileRouter = profileRoutes();

/**
 * POST /api/profile
 * @tags Profile
 * @security BearerAuth
 * @summary Créer un Profile (addProfile)
 * @param {ProfileRequestDTO} request.body
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/profile
 * @tags Profile
 * @security BearerAuth
 * @summary Créer un Profile (getAllProfile)
 * @param {ProfileRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/profile/{id}
 * @tags Profile
 * @security BearerAuth
 * @summary Créer un Profile (getProfile)
 * @param {ProfileRequestDTO} request.body
 * @param {string} id.path.required
 * @return {ProfileResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
