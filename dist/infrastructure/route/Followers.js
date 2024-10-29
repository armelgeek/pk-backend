"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followersRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Followers_1 = require("../controller/Followers");
const followersRoutes = () => (0, generic_route_1.genericRoute)({ controller: Followers_1.followersController, schema: joi_1.default.Followers, name: 'Followers' });
exports.followersRouter = followersRoutes();
/**
 * GET /api/followers
 * @tags Followers
 * @security BearerAuth
 * @summary List Followers (getAllFollowers)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<FollowersResponseDTO>} 201
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
//# sourceMappingURL=Followers.js.map