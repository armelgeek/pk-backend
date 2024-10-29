"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialnetworkController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const SocialNetwork_1 = require("../../service/applicatif/SocialNetwork");
class SocialNetworkController extends generic_controller_1.GenericController {
}
exports.socialnetworkController = new SocialNetworkController(SocialNetwork_1.socialnetworkSA);
//# sourceMappingURL=SocialNetwork.js.map