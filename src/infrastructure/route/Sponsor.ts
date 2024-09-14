import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { sponsorController } from '../controller/Sponsor';

const sponsorRoutes = () => genericRoute({ controller: sponsorController, schema: Joi.Sponsor, name: 'Sponsor' });

export const sponsorRouter = sponsorRoutes();

/**
 * GET /api/sponsor
 * @tags Sponsor
 * @security BearerAuth
 * @summary List Sponsor (getAllSponsor)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:name,description
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

