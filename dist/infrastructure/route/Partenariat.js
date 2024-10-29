"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenariatRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Partenariat_1 = require("../controller/Partenariat");
const partenariatRoutes = () => (0, generic_route_1.genericRoute)({ controller: Partenariat_1.partenariatController, schema: joi_1.default.Partenariat, name: 'Partenariat' });
exports.partenariatRouter = partenariatRoutes();
/**
 * GET /api/partenariat
 * @tags Partenariat
 * @security BearerAuth
 * @summary List Partenariat (getAllPartenariat)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,photo,name,title,hendonmob,rangAllTimeMoney,bracelet,job,description,message,type
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
//# sourceMappingURL=Partenariat.js.map