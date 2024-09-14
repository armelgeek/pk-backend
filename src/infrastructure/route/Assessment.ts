import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { assessmentController } from '../controller/Assessment';

const assessmentRoutes = () => genericRoute({ controller: assessmentController, schema: Joi.Assessment, name: 'Assessment' });

export const assessmentRouter = assessmentRoutes();

/**
 * GET /api/assessment
 * @tags Assessment
 * @security BearerAuth
 * @summary List Assessment (getAllAssessment)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {AssessmentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/assessment/{id}
 * @tags Assessment
 * @security BearerAuth
 * @summary Remove Assessment (deleteAssessment)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/assessment/partialUpdate/{id}
 * @tags Assessment
 * @security BearerAuth
 * @summary Update Assessment (updateAssessment)
 * @param {AssessmentRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/assessment/{id}
 * @tags Assessment
 * @security BearerAuth
 * @summary List Assessment (getAssessment)
 
 * @param {string} id.path.required 
 * @return {AssessmentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/assessment
 * @tags Assessment
 * @security BearerAuth
 * @summary Create Assessment (addAssessment)
 * @param {AssessmentRequestDTO} request.body 
 * @return {AssessmentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

