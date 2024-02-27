import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { sponsorController } from '../controller/Sponsor';

const sponsorRoutes = () => genericRoute({ controller: sponsorController, schema: Joi.Sponsor, name: 'Sponsor' });

export const sponsorRouter = sponsorRoutes();

/**
 * GET /api/sponsor
 * @tags Sponsor
 * @security BearerAuth
 * @summary Créer un Sponsor (getAllSponsor)
 * @param {SponsorRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {SponsorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/sponsor
 * @tags Sponsor
 * @security BearerAuth
 * @summary Créer un Sponsor (addSponsor)
 * @param {SponsorRequestDTO} request.body
 * @return {SponsorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/sponsor/{id}
 * @tags Sponsor
 * @security BearerAuth
 * @summary Créer un Sponsor (updateSponsor)
 * @param {SponsorRequestDTO} request.body
 * @param {string} id.path.required
 * @return {SponsorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/sponsor/{id}
 * @tags Sponsor
 * @security BearerAuth
 * @summary Créer un Sponsor (getSponsor)
 * @param {SponsorRequestDTO} request.body
 * @param {string} id.path.required
 * @return {SponsorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/sponsor/{id}
 * @tags Sponsor
 * @security BearerAuth
 * @summary Créer un Sponsor (deleteSponsor)
 * @param {SponsorRequestDTO} request.body
 * @param {string} id.path.required
 * @return {SponsorResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

