import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { baseinformationController } from '../controller/BaseInformation';

const baseinformationRoutes = () => genericRoute({ controller: baseinformationController, schema: Joi.BaseInformation, name: 'BaseInformation' });

export const baseinformationRouter = baseinformationRoutes();

/**
 * GET /api/base-informations
 * @tags BaseInformation
 * @security BearerAuth
 * @summary List BaseInformation (getAllBaseInformation)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,pays,email,date_of_birth,gender,nom,prenom,country,city,situation,children,description
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<BaseInformationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/base-information/{id}
 * @tags BaseInformation
 * @security BearerAuth
 * @summary List BaseInformation (getBaseInformation)
 
 * @param {string} id.path.required 
 * @return {BaseInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/base-information
 * @tags BaseInformation
 * @security BearerAuth
 * @summary Create BaseInformation (addBaseInformation)
 * @param {BaseInformationRequestDTO} request.body 
 * @return {BaseInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/base-information/partialUpdate/{id}
 * @tags BaseInformation
 * @security BearerAuth
 * @summary Update BaseInformation (updateBaseInformation)
 * @param {BaseInformationRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

