"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportSM = exports.ReportSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Report_1 = require("../../repository/Report");
class ReportSM extends generic_sm_1.GenericSM {
}
exports.ReportSM = ReportSM;
exports.reportSM = new ReportSM((0, typeorm_1.getCustomRepository)(Report_1.ReportRepository));
//# sourceMappingURL=Report.js.map