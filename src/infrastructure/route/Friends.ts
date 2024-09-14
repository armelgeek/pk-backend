import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { friendsController } from '../controller/Friends';

const friendsRoutes = () => genericRoute({ controller: friendsController, schema: Joi.Friends, name: 'Friends' });

export const friendsRouter = friendsRoutes();

/**
 * GET /api/friends
 * @tags Friends
 * @security BearerAuth
 * @summary List Friends (getAllFriends)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<FriendsResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/friends/{id}
 * @tags Friends
 * @security BearerAuth
 * @summary Remove Friends (deleteFriends)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/friends/partialUpdate/{id}
 * @tags Friends
 * @security BearerAuth
 * @summary Update Friends (updateFriends)
 * @param {FriendsRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/friends/{id}
 * @tags Friends
 * @security BearerAuth
 * @summary List Friends (getFriends)
 
 * @param {string} id.path.required 
 * @return {FriendsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/friends
 * @tags Friends
 * @security BearerAuth
 * @summary Create Friends (addFriends)
 * @param {FriendsRequestDTO} request.body 
 * @return {FriendsResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

