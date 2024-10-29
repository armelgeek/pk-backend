"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorsSM = exports.VisitorsSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Visitors_1 = require("../../repository/Visitors");
class VisitorsSM extends generic_sm_1.GenericSM {
}
exports.VisitorsSM = VisitorsSM;
exports.visitorsSM = new VisitorsSM((0, typeorm_1.getCustomRepository)(Visitors_1.VisitorsRepository));
//# sourceMappingURL=Visitors.js.map