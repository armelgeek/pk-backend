"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Report_1 = require("../controller/Report");
const reportRoutes = () => (0, generic_route_1.genericRoute)({ controller: Report_1.reportController, schema: joi_1.default.Report, name: 'Report' });
exports.reportRouter = reportRoutes();
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
//# sourceMappingURL=Report.js.map