"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const generic_route_1 = require("../../common/infrastructure/generic.route");
const joi_1 = require("../../constraint/validator/joi");
const Comment_1 = require("../controller/Comment");
const commentRoutes = () => (0, generic_route_1.genericRoute)({ controller: Comment_1.commentController, schema: joi_1.default.Comment, name: 'Comment' });
exports.commentRouter = commentRoutes();
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
 
 * @param {number} page.query
 * @param {number} rowPerPage.query
 * @param {string} sortField.query - enum:lastActivityAt,content,target,type,collectionName
 * @param {string} order.query - enum:ASC,DESC
 * @return {array<CommentResponseDTO>} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * DELETE /api/comment/{id}
 * @tags Comment
 * @security BearerAuth
 * @summary Remove Comment (deleteComment)
 
 * @param {string} id.path.required
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
 
 * @param {string} id.path.required
 * @return {CommentResponseDTO} 201
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
/**
 * GET /api/comment/count/elements
 * @tags Comment
 * @security BearerAuth
 * @summary List Comment (countComment)
 
 * @param {string} target.query
 * @return {CountResponseDTO} 200
 * @return {object} 400 - Données non conformes
 * @return {object} 500 - Erreur interne du serveur
 */
//# sourceMappingURL=Comment.js.map