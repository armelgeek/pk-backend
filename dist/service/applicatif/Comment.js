"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSA = exports.CommentSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Comment_1 = require("../../constraint/factory/Comment");
const Comment_2 = require("../metier/Comment");
class CommentSA extends generic_sa_1.GenericSA {
}
exports.CommentSA = CommentSA;
exports.commentSA = new CommentSA(Comment_2.commentSM, Comment_1.commentFactory, 'Comment');
//# sourceMappingURL=Comment.js.map