import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { baseinformationController } from '../controller/BaseInformation';

const baseinformationRoutes = () => genericRoute({ controller: baseinformationController, schema: Joi.BaseInformation, name: 'BaseInformation' });

export const baseinformationRouter = baseinformationRoutes();

/**
 * GET /api/base-informations
 * @tags BaseInformation
 * @security BearerAuth
 * @summary Créer un BaseInformation (getAllBaseInformation)
 * @param {BaseInformationRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {BaseInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/base-information/{id}
 * @tags BaseInformation
 * @security BearerAuth
 * @summary Créer un BaseInformation (getBaseInformation)
 * @param {BaseInformationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {BaseInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/base-information
 * @tags BaseInformation
 * @security BearerAuth
 * @summary Créer un BaseInformation (addBaseInformation)
 * @param {BaseInformationRequestDTO} request.body
 * @return {BaseInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/base-information/{id}
 * @tags BaseInformation
 * @security BearerAuth
 * @summary Créer un BaseInformation (updateBaseInformation)
 * @param {BaseInformationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {BaseInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

