import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { commentController } from '../controller/Comment';

const commentRoutes = () => genericRoute({ controller: commentController, schema: Joi.Comment, name: 'Comment' });

export const commentRouter = commentRoutes();

/**
 * POST /api/comment
 * @tags Comment
 * @security BearerAuth
 * @summary Créer un Comment (addComment)
 * @param {CommentRequestDTO} request.body
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/comments
 * @tags Comment
 * @security BearerAuth
 * @summary Créer un Comment (getAllComment)
 * @param {CommentRequestDTO} request.body
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/comment/{id}
 * @tags Comment
 * @security BearerAuth
 * @summary Créer un Comment (deleteComment)
 * @param {CommentRequestDTO} request.body
 * @param {string} id.path.required
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/comment/{id}
 * @tags Comment
 * @security BearerAuth
 * @summary Créer un Comment (updateComment)
 * @param {CommentRequestDTO} request.body
 * @param {string} id.path.required
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/comment/{id}
 * @tags Comment
 * @security BearerAuth
 * @summary Créer un Comment (getComment)
 * @param {CommentRequestDTO} request.body
 * @param {string} id.path.required
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

