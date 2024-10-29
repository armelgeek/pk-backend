"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Friends_1 = require("../../service/applicatif/Friends");
class FriendsController extends generic_controller_1.GenericController {
}
exports.friendsController = new FriendsController(Friends_1.friendsSA);
//# sourceMappingURL=Friends.js.map