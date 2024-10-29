"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementaryinformationRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const ComplementaryInformation_1 = require("../controller/ComplementaryInformation");
const complementaryinformationRoutes = () => (0, generic_route_1.genericRoute)({ controller: ComplementaryInformation_1.complementaryinformationController, schema: joi_1.default.ComplementaryInformation, name: 'ComplementaryInformation' });
exports.complementaryinformationRouter = complementaryinformationRoutes();
/**
 * GET /api/complementary-information/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary List ComplementaryInformation (getComplementaryInformation)
 
 * @param {string} id.path.required
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/complementary-information
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Create ComplementaryInformation (addComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body
 * @return {ComplementaryInformationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/complementary-information/partialUpdate/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Update ComplementaryInformation (updateComplementaryInformation)
 * @param {ComplementaryInformationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/complementary-information
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary List ComplementaryInformation (getAllComplementaryInformation)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,nationality,langue,email,job,headonmob,nbTitle,rangTimeMoney,nbBracelet
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<ComplementaryInformationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/complementary-information/{id}
 * @tags ComplementaryInformation
 * @security BearerAuth
 * @summary Remove ComplementaryInformation (deleteComplementaryInformation)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=ComplementaryInformation.js.map