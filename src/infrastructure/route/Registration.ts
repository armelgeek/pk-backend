import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { registrationController } from '../controller/Registration';

const registrationRoutes = () => genericRoute({ controller: registrationController, schema: Joi.Registration, name: 'Registration' });

export const registrationRouter = registrationRoutes();

/**
 * GET /api/registration
 * @tags Registration
 * @security BearerAuth
 * @summary List Registration (getAllRegistration)

 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {RegistrationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/registration/{id}
 * @tags Registration
 * @security BearerAuth
 * @summary Remove Registration (deleteRegistration)

 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/registration/partialUpdate/{id}
 * @tags Registration
 * @security BearerAuth
 * @summary Update Registration (updateRegistration)
 * @param {RegistrationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/registration/{id}
 * @tags Registration
 * @security BearerAuth
 * @summary List Registration (getRegistration)

 * @param {string} id.path.required
 * @return {RegistrationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/registration
 * @tags Registration
 * @security BearerAuth
 * @summary Create Registration (addRegistration)
 * @param {RegistrationRequestDTO} request.body
 * @return {RegistrationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/registration/count/elements
 * @tags Registration
 * @security BearerAuth
 * @summary List Registration (getRegistration)

 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */


/**
 * GET /api/find/registration
 * @tags Registration
 * @security BearerAuth
 * @summary find Registration (findRegistration)
 * @param {string} profileId.path.required
 * @param {string} publicationId.path
 * @return {RegistrationResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */


