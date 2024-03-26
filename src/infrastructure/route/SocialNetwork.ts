import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { socialnetworkController } from '../controller/SocialNetwork';

const socialnetworkRoutes = () => genericRoute({ controller: socialnetworkController, schema: Joi.SocialNetwork, name: 'SocialNetwork' });

export const socialnetworkRouter = socialnetworkRoutes();

/**
 * GET /api/social-network
 * @tags SocialNetwork
 * @security BearerAuth
 * @summary List SocialNetwork (getAllSocialNetwork)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {SocialNetworkResponseDTO} 201
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

