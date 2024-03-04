import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { complementaryinformationController } from '../controller/ComplementaryInformation';

const complementaryinformationRoutes = () => genericRoute({ controller: complementaryinformationController, schema: Joi.ComplementaryInformation, name: 'ComplementaryInformation' });

export const complementaryinformationRouter = complementaryinformationRoutes();

/**
 * GET /api/complementary-information/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary List ComplementaryInformation (getComplementaryInformation)
 
 * @param {string} id.path.required 
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/complementary-information
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Create ComplementaryInformation (addComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body 
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/complementary-information/partialUpdate/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Update ComplementaryInformation (updateComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/complementary-information
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary List ComplementaryInformation (getAllComplementaryInformation)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/complementary-information/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Remove ComplementaryInformation (deleteComplementaryInformation)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

