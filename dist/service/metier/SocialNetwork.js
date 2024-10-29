"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialnetworkSM = exports.SocialNetworkSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const SocialNetwork_1 = require("../../repository/SocialNetwork");
class SocialNetworkSM extends generic_sm_1.GenericSM {
}
exports.SocialNetworkSM = SocialNetworkSM;
exports.socialnetworkSM = new SocialNetworkSM((0, typeorm_1.getCustomRepository)(SocialNetwork_1.SocialNetworkRepository));
//# sourceMappingURL=SocialNetwork.js.map