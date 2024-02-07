import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { complementaryinformationController } from '../controller/ComplementaryInformation';

const complementaryinformationRoutes = () => genericRoute({ controller: complementaryinformationController, schema: Joi.ComplementaryInformation, name: 'ComplementaryInformation' });

export const complementaryinformationRouter = complementaryinformationRoutes();

/**
 * GET /api/complementary-informations
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Créer un ComplementaryInformation (getAllComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/complementary-information/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Créer un ComplementaryInformation (getComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/complementary-information
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Créer un ComplementaryInformation (addComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/complementary-information/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Créer un ComplementaryInformation (updateComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

