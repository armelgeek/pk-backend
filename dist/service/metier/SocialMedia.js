"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialmediaSM = exports.SocialMediaSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const SocialMedia_1 = require("../../repository/SocialMedia");
class SocialMediaSM extends generic_sm_1.GenericSM {
}
exports.SocialMediaSM = SocialMediaSM;
exports.socialmediaSM = new SocialMediaSM((0, typeorm_1.getCustomRepository)(SocialMedia_1.SocialMediaRepository));
//# sourceMappingURL=SocialMedia.js.map