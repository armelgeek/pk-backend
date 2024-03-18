import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { avisController } from '../controller/Avis';

const avisRoutes = () => genericRoute({ controller: avisController, schema: Joi.Avis, name: 'Avis' });

export const avisRouter = avisRoutes();

/**
 * GET /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary List Avis (getAllAvis)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/avis/{id}
 * @tags Avis
 * @security BearerAuth
 * @summary Remove Avis (deleteAvis)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/avis/partialUpdate/{id}
 * @tags Avis
 * @security BearerAuth
 * @summary Update Avis (updateAvis)
 * @param {AvisRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/avis/{id}
 * @tags Avis
 * @security BearerAuth
 * @summary List Avis (getAvis)
 
 * @param {string} id.path.required 
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/avis
 * @tags Avis
 * @security BearerAuth
 * @summary Create Avis (addAvis)
 * @param {AvisRequestDTO} request.body 
 * @return {AvisResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

