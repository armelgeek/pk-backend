"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorSM = exports.SponsorSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Sponsor_1 = require("../../repository/Sponsor");
class SponsorSM extends generic_sm_1.GenericSM {
}
exports.SponsorSM = SponsorSM;
exports.sponsorSM = new SponsorSM((0, typeorm_1.getCustomRepository)(Sponsor_1.SponsorRepository));
//# sourceMappingURL=Sponsor.js.map