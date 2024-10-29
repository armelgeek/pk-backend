"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Friends_1 = require("../controller/Friends");
const friendsRoutes = () => (0, generic_route_1.genericRoute)({ controller: Friends_1.friendsController, schema: joi_1.default.Friends, name: 'Friends' });
exports.friendsRouter = friendsRoutes();
/**
 * GET /api/friends
 * @tags Friends
 * @security BearerAuth
 * @summary List Friends (getAllFriends)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,
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
//# sourceMappingURL=Friends.js.map