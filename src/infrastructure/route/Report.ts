import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { reportController } from '../controller/Report';

const reportRoutes = () => genericRoute({ controller: reportController, schema: Joi.Report, name: 'Report' });

export const reportRouter = reportRoutes();

/**
 * GET /api/report
 * @tags Report
 * @security BearerAuth
 * @summary List Report (getAllReport)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,type,etat,situation,message
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<ReportResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/report/{id}
 * @tags Report
 * @security BearerAuth
 * @summary Remove Report (deleteReport)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/report/partialUpdate/{id}
 * @tags Report
 * @security BearerAuth
 * @summary Update Report (updateReport)
 * @param {ReportRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/report/{id}
 * @tags Report
 * @security BearerAuth
 * @summary List Report (getReport)
 
 * @param {string} id.path.required 
 * @return {ReportResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/report
 * @tags Report
 * @security BearerAuth
 * @summary Create Report (addReport)
 * @param {ReportRequestDTO} request.body 
 * @return {ReportResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/report/count/elements
 * @tags Report
 * @security BearerAuth
 * @summary List Report (getReport)
  
 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

