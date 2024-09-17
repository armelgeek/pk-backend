import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { publicationController } from '../controller/Publication';

const publicationRoutes = () => genericRoute({ controller: publicationController, schema: Joi.Publication, name: 'Publication' });

export const publicationRouter = publicationRoutes();

/**
 * POST /api/publication
 * @tags Publication
 * @security BearerAuth
 * @summary Create Publication (addPublication)
 * @param {PublicationRequestDTO} request.body 
 * @return {PublicationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/publication
 * @tags Publication
 * @security BearerAuth
 * @summary List Publication (getAllPublication)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:content,imageUrls,videoUrls,like,share,originalId,activityDate,audience
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<PublicationResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/publication/{id}
 * @tags Publication
 * @security BearerAuth
 * @summary Remove Publication (deletePublication)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/publication/partialUpdate/{id}
 * @tags Publication
 * @security BearerAuth
 * @summary Update Publication (updatePublication)
 * @param {PublicationRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/publication/{id}
 * @tags Publication
 * @security BearerAuth
 * @summary List Publication (getPublication)
 
 * @param {string} id.path.required 
 * @return {PublicationResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

