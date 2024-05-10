import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { donationController } from '../controller/Donation';

const donationRoutes = () => genericRoute({ controller: donationController, schema: Joi.Donation, name: 'Donation' });

export const donationRouter = donationRoutes();

/**
 * GET /api/donation
 * @tags Donation
 * @security BearerAuth
 * @summary List Donation (getAllDonation)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query 
 * @return {DonationResponseDTO} 201
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

