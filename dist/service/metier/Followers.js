"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followersSM = exports.FollowersSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Followers_1 = require("../../repository/Followers");
class FollowersSM extends generic_sm_1.GenericSM {
}
exports.FollowersSM = FollowersSM;
exports.followersSM = new FollowersSM((0, typeorm_1.getCustomRepository)(Followers_1.FollowersRepository));
//# sourceMappingURL=Followers.js.map