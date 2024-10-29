"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsSM = exports.FriendsSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Friends_1 = require("../../repository/Friends");
class FriendsSM extends generic_sm_1.GenericSM {
}
exports.FriendsSM = FriendsSM;
exports.friendsSM = new FriendsSM((0, typeorm_1.getCustomRepository)(Friends_1.FriendsRepository));
//# sourceMappingURL=Friends.js.map