import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { identityverificationController } from '../controller/IdentityVerification';

const identityverificationRoutes = () => genericRoute({ controller: identityverificationController, schema: Joi.IdentityVerification, name: 'IdentityVerification' });

export const identityverificationRouter = identityverificationRoutes();

/**
 * GET /api/identity-verification
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary List IdentityVerification (getAllIdentityVerification)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {IdentityVerificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/identity-verification/{id}
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary Remove IdentityVerification (deleteIdentityVerification)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/identity-verification/partialUpdate/{id}
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary Update IdentityVerification (updateIdentityVerification)
 * @param {IdentityVerificationRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/identity-verification/{id}
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary List IdentityVerification (getIdentityVerification)
 
 * @param {string} id.path.required 
 * @return {IdentityVerificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/identity-verification
 * @tags IdentityVerification
 * @security BearerAuth
 * @summary Create IdentityVerification (addIdentityVerification)
 * @param {IdentityVerificationRequestDTO} request.body 
 * @return {IdentityVerificationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

