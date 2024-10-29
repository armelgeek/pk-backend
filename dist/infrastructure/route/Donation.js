"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Donation_1 = require("../controller/Donation");
const donationRoutes = () => (0, generic_route_1.genericRoute)({ controller: Donation_1.donationController, schema: joi_1.default.Donation, name: 'Donation' });
exports.donationRouter = donationRoutes();
/**
 * GET /api/donation
 * @tags Donation
 * @security BearerAuth
 * @summary List Donation (getAllDonation)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,donorsCount,profileId
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<DonationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/donation/{id}
 * @tags Donation
 * @security BearerAuth
 * @summary Remove Donation (deleteDonation)
 
 * @param {string} id.path.required
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * PUT /api/donation/partialUpdate/{id}
 * @tags Donation
 * @security BearerAuth
 * @summary Update Donation (updateDonation)
 * @param {DonationRequestDTO} request.body
 * @param {string} id.path.required
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/donation/{id}
 * @tags Donation
 * @security BearerAuth
 * @summary List Donation (getDonation)
 
 * @param {string} id.path.required
 * @return {DonationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * POST /api/donation
 * @tags Donation
 * @security BearerAuth
 * @summary Create Donation (addDonation)
 * @param {DonationRequestDTO} request.body
 * @return {DonationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/donation/count/elements
 * @tags Donation
 * @security BearerAuth
 * @summary List Donation (getDonation)
  
 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/donation/sum/{field}
 * @tags Donation
 * @security BearerAuth
 * @summary List Donation (getSumDonation)
 
 * @param {string} field.path.required
 * @return {DonationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Donation.js.map