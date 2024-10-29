"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictionController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Restriction_1 = require("../../service/applicatif/Restriction");
class RestrictionController extends generic_controller_1.GenericController {
}
exports.restrictionController = new RestrictionController(Restriction_1.restrictionSA);
//# sourceMappingURL=Restriction.js.map