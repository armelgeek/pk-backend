import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { partenariatController } from '../controller/Partenariat';

const partenariatRoutes = () => genericRoute({ controller: partenariatController, schema: Joi.Partenariat, name: 'Partenariat' });

export const partenariatRouter = partenariatRoutes();

/**
 * GET /api/partenariat
 * @tags Partenariat
 * @security BearerAuth
 * @summary List Partenariat (getAllPartenariat)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:photo,name,title,hendonmob,rangAllTimeMoney,bracelet,job,description,message,type
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<PartenariatResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/partenariat/{id}
 * @tags Partenariat
 * @security BearerAuth
 * @summary Remove Partenariat (deletePartenariat)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/partenariat/partialUpdate/{id}
 * @tags Partenariat
 * @security BearerAuth
 * @summary Update Partenariat (updatePartenariat)
 * @param {PartenariatRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/partenariat/{id}
 * @tags Partenariat
 * @security BearerAuth
 * @summary List Partenariat (getPartenariat)
 
 * @param {string} id.path.required 
 * @return {PartenariatResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/partenariat
 * @tags Partenariat
 * @security BearerAuth
 * @summary Create Partenariat (addPartenariat)
 * @param {PartenariatRequestDTO} request.body 
 * @return {PartenariatResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

