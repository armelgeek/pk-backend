import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { confindialityController } from '../controller/Confindiality';

const confindialityRoutes = () => genericRoute({ controller: confindialityController, schema: Joi.Confindiality, name: 'Confindiality' });

export const confindialityRouter = confindialityRoutes();

/**
 * POST /api/confindiality
 * @tags Confindiality
 * @security BearerAuth
 * @summary Create Confindiality (addConfindiality)
 * @param {ConfindialityRequestDTO} request.body 
 * @return {ConfindialityResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/confindiality/{profileId}
 * @tags Confindiality
 * @security BearerAuth
 * @summary List Confindiality (getConfindiality)
 
 * @param {string} profileId.path.required 
 * @return {ConfindialityResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/user-credential/{id}
 * @tags Confindiality
 * @security BearerAuth
 * @summary Remove Confindiality (deleteConfindiality)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/confindiality/partialUpdate/{id}
 * @tags Confindiality
 * @security BearerAuth
 * @summary Update Confindiality (updateConfindiality)
 * @param {ConfindialityRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

