"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSM = exports.CommentSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Comment_1 = require("../../repository/Comment");
class CommentSM extends generic_sm_1.GenericSM {
}
exports.CommentSM = CommentSM;
exports.commentSM = new CommentSM((0, typeorm_1.getCustomRepository)(Comment_1.CommentRepository));
//# sourceMappingURL=Comment.js.map