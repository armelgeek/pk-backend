"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialmediaSA = exports.SocialMediaSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const SocialMedia_1 = require("../../constraint/factory/SocialMedia");
const SocialMedia_2 = require("../metier/SocialMedia");
class SocialMediaSA extends generic_sa_1.GenericSA {
}
exports.SocialMediaSA = SocialMediaSA;
exports.socialmediaSA = new SocialMediaSA(SocialMedia_2.socialmediaSM, SocialMedia_1.socialmediaFactory, 'SocialMedia');
//# sourceMappingURL=SocialMedia.js.map