"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictionSM = exports.RestrictionSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Restriction_1 = require("../../repository/Restriction");
class RestrictionSM extends generic_sm_1.GenericSM {
}
exports.RestrictionSM = RestrictionSM;
exports.restrictionSM = new RestrictionSM((0, typeorm_1.getCustomRepository)(Restriction_1.RestrictionRepository));
//# sourceMappingURL=Restriction.js.map