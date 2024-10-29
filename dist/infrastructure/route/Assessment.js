"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Assessment_1 = require("../controller/Assessment");
const assessmentRoutes = () => (0, generic_route_1.genericRoute)({ controller: Assessment_1.assessmentController, schema: joi_1.default.Assessment, name: 'Assessment' });
exports.assessmentRouter = assessmentRoutes();
/**
 * GET /api/assessment
 * @tags Assessment
 * @security BearerAuth
 * @summary List Assessment (getAllAssessment)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,note,etat,link
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<AssessmentResponseDTO>} 201
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
//# sourceMappingURL=Assessment.js.map