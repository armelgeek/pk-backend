"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Club_1 = require("../../service/applicatif/Club");
class ClubController extends generic_controller_1.GenericController {
}
exports.clubController = new ClubController(Club_1.clubSA);
//# sourceMappingURL=Club.js.map