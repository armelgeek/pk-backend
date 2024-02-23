import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { publicationController } from '../controller/Publication';

const publicationRoutes = () => genericRoute({ controller: publicationController, schema: Joi.Publication, name: 'Publication' });

export const publicationRouter = publicationRoutes();

/**
 * POST /api/publication
 * @tags Publication
 * @security BearerAuth
 * @summary Créer un Publication (addPublication)
 * @param {PublicationRequestDTO} request.body
 * @return {PublicationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/publication
 * @tags Publication
 * @security BearerAuth
 * @summary Créer un Publication (getAllPublication)
 * @param {PublicationRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {PublicationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

