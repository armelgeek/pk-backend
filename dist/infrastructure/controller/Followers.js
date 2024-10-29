"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followersController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Followers_1 = require("../../service/applicatif/Followers");
class FollowersController extends generic_controller_1.GenericController {
}
exports.followersController = new FollowersController(Followers_1.followersSA);
//# sourceMappingURL=Followers.js.map