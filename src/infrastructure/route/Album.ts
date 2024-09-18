import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { albumController } from '../controller/Album';

const albumRoutes = () => genericRoute({ controller: albumController, schema: Joi.Album, name: 'Album' });

export const albumRouter = albumRoutes();

/**
 * GET /api/album
 * @tags Album
 * @security BearerAuth
 * @summary List Album (getAllAlbum)
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,type,title,media,like,share,description,cover,views
 * @param {string} order.query - enum:ASC,DESC 
 * @return {array<AlbumResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/album/{id}
 * @tags Album
 * @security BearerAuth
 * @summary Remove Album (deleteAlbum)
 
 * @param {string} id.path.required 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/album/partialUpdate/{id}
 * @tags Album
 * @security BearerAuth
 * @summary Update Album (updateAlbum)
 * @param {AlbumRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/album/{id}
 * @tags Album
 * @security BearerAuth
 * @summary List Album (getAlbum)
 
 * @param {string} id.path.required 
 * @return {AlbumResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * POST /api/album
 * @tags Album
 * @security BearerAuth
 * @summary Create Album (addAlbum)
 * @param {AlbumRequestDTO} request.body 
 * @return {AlbumResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

