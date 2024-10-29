"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confindialityRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Confindiality_1 = require("../controller/Confindiality");
const confindialityRoutes = () => (0, generic_route_1.genericRoute)({ controller: Confindiality_1.confindialityController, schema: joi_1.default.Confindiality, name: 'Confindiality' });
exports.confindialityRouter = confindialityRoutes();
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
//# sourceMappingURL=Confindiality.js.map