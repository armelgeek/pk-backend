"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsSA = exports.FriendsSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Friends_1 = require("../../constraint/factory/Friends");
const Friends_2 = require("../metier/Friends");
class FriendsSA extends generic_sa_1.GenericSA {
}
exports.FriendsSA = FriendsSA;
exports.friendsSA = new FriendsSA(Friends_2.friendsSM, Friends_1.friendsFactory, 'Friends');
//# sourceMappingURL=Friends.js.map