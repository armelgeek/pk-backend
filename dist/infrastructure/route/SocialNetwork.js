"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialnetworkRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const SocialNetwork_1 = require("../controller/SocialNetwork");
const socialnetworkRoutes = () => (0, generic_route_1.genericRoute)({ controller: SocialNetwork_1.socialnetworkController, schema: joi_1.default.SocialNetwork, name: 'SocialNetwork' });
exports.socialnetworkRouter = socialnetworkRoutes();
/**
 * GET /api/social-network
 * @tags SocialNetwork
 * @security BearerAuth
 * @summary List SocialNetwork (getAllSocialNetwork)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,profileId
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<SocialNetworkResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/social-network/{id}
 * @tags SocialNetwork
 * @security BearerAuth
 * @summary Remove SocialNetwork (deleteSocialNetwork)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/social-network/partialUpdate/{id}
 * @tags SocialNetwork
 * @security BearerAuth
 * @summary Update SocialNetwork (updateSocialNetwork)
 * @param {SocialNetworkRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/social-network/{id}
 * @tags SocialNetwork
 * @security BearerAuth
 * @summary List SocialNetwork (getSocialNetwork)
 
 * @param {string} id.path.required
 * @return {SocialNetworkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/social-network
 * @tags SocialNetwork
 * @security BearerAuth
 * @summary Create SocialNetwork (addSocialNetwork)
 * @param {SocialNetworkRequestDTO} request.body
 * @return {SocialNetworkResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=SocialNetwork.js.map