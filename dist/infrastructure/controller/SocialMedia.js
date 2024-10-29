"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialmediaController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const SocialMedia_1 = require("../../service/applicatif/SocialMedia");
class SocialMediaController extends generic_controller_1.GenericController {
}
exports.socialmediaController = new SocialMediaController(SocialMedia_1.socialmediaSA);
//# sourceMappingURL=SocialMedia.js.map