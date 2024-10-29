"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseinformationRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const BaseInformation_1 = require("../controller/BaseInformation");
const baseinformationRoutes = () => (0, generic_route_1.genericRoute)({ controller: BaseInformation_1.baseinformationController, schema: joi_1.default.BaseInformation, name: 'BaseInformation' });
exports.baseinformationRouter = baseinformationRoutes();
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
//# sourceMappingURL=BaseInformation.js.map