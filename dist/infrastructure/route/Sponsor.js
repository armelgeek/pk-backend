"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Sponsor_1 = require("../controller/Sponsor");
const sponsorRoutes = () => (0, generic_route_1.genericRoute)({ controller: Sponsor_1.sponsorController, schema: joi_1.default.Sponsor, name: 'Sponsor' });
exports.sponsorRouter = sponsorRoutes();
/**
 * GET /api/sponsor
 * @tags Sponsor
 * @security BearerAuth
 * @summary List Sponsor (getAllSponsor)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,name,description
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<SponsorResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/sponsor
 * @tags Sponsor
 * @security BearerAuth
 * @summary Create Sponsor (addSponsor)
 * @param {SponsorRequestDTO} request.body
 * @return {SponsorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/sponsor/partialUpdate/{id}
 * @tags Sponsor
 * @security BearerAuth
 * @summary Update Sponsor (updateSponsor)
 * @param {SponsorRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/sponsor/{id}
 * @tags Sponsor
 * @security BearerAuth
 * @summary List Sponsor (getSponsor)
 
 * @param {string} id.path.required
 * @return {SponsorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/sponsor/{id}
 * @tags Sponsor
 * @security BearerAuth
 * @summary Remove Sponsor (deleteSponsor)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Sponsor.js.map