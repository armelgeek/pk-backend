"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorSA = exports.SponsorSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Sponsor_1 = require("../../constraint/factory/Sponsor");
const Sponsor_2 = require("../metier/Sponsor");
class SponsorSA extends generic_sa_1.GenericSA {
}
exports.SponsorSA = SponsorSA;
exports.sponsorSA = new SponsorSA(Sponsor_2.sponsorSM, Sponsor_1.sponsorFactory, 'Sponsor');
//# sourceMappingURL=Sponsor.js.map