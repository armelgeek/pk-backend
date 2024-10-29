"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictionSA = exports.RestrictionSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Restriction_1 = require("../../constraint/factory/Restriction");
const Restriction_2 = require("../metier/Restriction");
class RestrictionSA extends generic_sa_1.GenericSA {
}
exports.RestrictionSA = RestrictionSA;
exports.restrictionSA = new RestrictionSA(Restriction_2.restrictionSM, Restriction_1.restrictionFactory, 'Restriction');
//# sourceMappingURL=Restriction.js.map