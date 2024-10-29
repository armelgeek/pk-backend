"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Donation_1 = require("../../service/applicatif/Donation");
class DonationController extends generic_controller_1.GenericController {
}
exports.donationController = new DonationController(Donation_1.donationSA);
//# sourceMappingURL=Donation.js.map