"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followersSA = exports.FollowersSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Followers_1 = require("../../constraint/factory/Followers");
const Followers_2 = require("../metier/Followers");
class FollowersSA extends generic_sa_1.GenericSA {
}
exports.FollowersSA = FollowersSA;
exports.followersSA = new FollowersSA(Followers_2.followersSM, Followers_1.followersFactory, 'Followers');
//# sourceMappingURL=Followers.js.map