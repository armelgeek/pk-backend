"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationSM = exports.DonationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Donation_1 = require("../../repository/Donation");
class DonationSM extends generic_sm_1.GenericSM {
}
exports.DonationSM = DonationSM;
exports.donationSM = new DonationSM((0, typeorm_1.getCustomRepository)(Donation_1.DonationRepository));
//# sourceMappingURL=Donation.js.map