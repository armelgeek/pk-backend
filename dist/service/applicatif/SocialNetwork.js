"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialnetworkSA = exports.SocialNetworkSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const SocialNetwork_1 = require("../../constraint/factory/SocialNetwork");
const SocialNetwork_2 = require("../metier/SocialNetwork");
class SocialNetworkSA extends generic_sa_1.GenericSA {
}
exports.SocialNetworkSA = SocialNetworkSA;
exports.socialnetworkSA = new SocialNetworkSA(SocialNetwork_2.socialnetworkSM, SocialNetwork_1.socialnetworkFactory, 'SocialNetwork');
//# sourceMappingURL=SocialNetwork.js.map