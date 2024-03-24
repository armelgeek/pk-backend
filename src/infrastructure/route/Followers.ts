import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { followersController } from '../controller/Followers';

const followersRoutes = () => genericRoute({ controller: followersController, schema: Joi.Followers, name: 'Followers' });

export const followersRouter = followersRoutes();

/**
 * GET /api/followers
 * @tags Followers
 * @security BearerAuth
 * @summary List Followers (getAllFollowers)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {FollowersResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/followers/{id}
 * @tags Followers
 * @security BearerAuth
 * @summary Remove Followers (deleteFollowers)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/followers/partialUpdate/{id}
 * @tags Followers
 * @security BearerAuth
 * @summary Update Followers (updateFollowers)
 * @param {FollowersRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/followers/{id}
 * @tags Followers
 * @security BearerAuth
 * @summary List Followers (getFollowers)
 
 * @param {string} id.path.required 
 * @return {FollowersResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/followers
 * @tags Followers
 * @security BearerAuth
 * @summary Create Followers (addFollowers)
 * @param {FollowersRequestDTO} request.body 
 * @return {FollowersResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

