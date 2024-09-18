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
 * GET /api/profile/find/by-ids
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getAllProfileByIds)
 * @param {array<string>} ids.query
 * @return {array<ProfileResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/profile
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getAllProfile)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:photo,cover,type,email,gender,prenom,country,city,children,description,nom,situation,nbSignalement,banDate,endDate
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<ProfileResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/profile/{id}
 * @tags Profile
 * @security BearerAuth
 * @summary List Profile (getProfile)
 
 * @param {string} id.path.required 
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

