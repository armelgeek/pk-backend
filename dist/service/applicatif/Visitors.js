"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorsSA = exports.VisitorsSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Visitors_1 = require("../../constraint/factory/Visitors");
const Visitors_2 = require("../metier/Visitors");
class VisitorsSA extends generic_sa_1.GenericSA {
}
exports.VisitorsSA = VisitorsSA;
exports.visitorsSA = new VisitorsSA(Visitors_2.visitorsSM, Visitors_1.visitorsFactory, 'Visitors');
//# sourceMappingURL=Visitors.js.map