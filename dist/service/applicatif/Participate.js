"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participateSA = exports.ParticipateSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Participate_1 = require("../../constraint/factory/Participate");
const Participate_2 = require("../metier/Participate");
class ParticipateSA extends generic_sa_1.GenericSA {
}
exports.ParticipateSA = ParticipateSA;
exports.participateSA = new ParticipateSA(Participate_2.participateSM, Participate_1.participateFactory, 'Participate');
//# sourceMappingURL=Participate.js.map