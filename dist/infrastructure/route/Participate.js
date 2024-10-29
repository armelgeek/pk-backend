"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participateRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Participate_1 = require("../controller/Participate");
const participateRoutes = () => (0, generic_route_1.genericRoute)({ controller: Participate_1.participateController, schema: joi_1.default.Participate, name: 'Participate' });
exports.participateRouter = participateRoutes();
/**
 * GET /api/participate
 * @tags Participate
 * @security BearerAuth
 * @summary List Participate (getAllParticipate)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,numberTable,numberPlace,numberBuyIn,numberRebuy,payout,nombreBounty,chip,gain,flag,message,pseudo,note,photo,country
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<ParticipateResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/participate/{id}
 * @tags Participate
 * @security BearerAuth
 * @summary Remove Participate (deleteParticipate)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/participate/partialUpdate/{id}
 * @tags Participate
 * @security BearerAuth
 * @summary Update Participate (updateParticipate)
 * @param {ParticipateRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/participate/{id}
 * @tags Participate
 * @security BearerAuth
 * @summary List Participate (getParticipate)
 
 * @param {string} id.path.required
 * @return {ParticipateResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/participate
 * @tags Participate
 * @security BearerAuth
 * @summary Create Participate (addParticipate)
 * @param {ParticipateRequestDTO} request.body
 * @return {ParticipateResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Participate.js.map