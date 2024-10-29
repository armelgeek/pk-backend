"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Comment_1 = require("../../service/applicatif/Comment");
class CommentController extends generic_controller_1.GenericController {
}
exports.commentController = new CommentController(Comment_1.commentSA, "Comment");
//# sourceMappingURL=Comment.js.map