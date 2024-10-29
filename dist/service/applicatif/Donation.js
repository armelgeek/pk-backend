"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationSA = exports.DonationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Donation_1 = require("../../constraint/factory/Donation");
const Donation_2 = require("../metier/Donation");
class DonationSA extends generic_sa_1.GenericSA {
}
exports.DonationSA = DonationSA;
exports.donationSA = new DonationSA(Donation_2.donationSM, Donation_1.donationFactory, 'Donation');
//# sourceMappingURL=Donation.js.map