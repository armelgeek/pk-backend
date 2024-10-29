"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Sponsor_1 = require("../../service/applicatif/Sponsor");
class SponsorController extends generic_controller_1.GenericController {
}
exports.sponsorController = new SponsorController(Sponsor_1.sponsorSA);
//# sourceMappingURL=Sponsor.js.map