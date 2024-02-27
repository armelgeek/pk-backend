import { genericRoute } from '../../common/infrastructure/generic.route';
import Joi from '../../constraint/validator/joi';
import { commentController } from '../controller/Comment';

const commentRoutes = () => genericRoute({ controller: commentController, schema: Joi.Comment, name: 'Comment' });

export const commentRouter = commentRoutes();

/**
 * POST /api/comment
 * @tags Comment
 * @security BearerAuth
 * @summary Create Comment (addComment)
 * @param {CommentRequestDTO} request.body 
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/comment
 * @tags Comment
 * @security BearerAuth
 * @summary List Comment (getAllComment) 
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * DELETE /api/comment/{id}
 * @tags Comment
 * @security BearerAuth
 * @summary Remove Comment (deleteComment) 
 * @return {DeleteResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * PUT /api/comment/partialUpdate/{id}
 * @tags Comment
 * @security BearerAuth
 * @summary Update Comment (updateComment)
 * @param {CommentRequestDTO} request.body
 * @param {string} id.path.required 
 * @return {UpdateResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

/**
 * GET /api/comment/{id}
 * @tags Comment
 * @security BearerAuth
 * @summary List Comment (getComment) 
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */

