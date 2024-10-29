"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportSA = exports.ReportSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Report_1 = require("../../constraint/factory/Report");
const Report_2 = require("../metier/Report");
class ReportSA extends generic_sa_1.GenericSA {
}
exports.ReportSA = ReportSA;
exports.reportSA = new ReportSA(Report_2.reportSM, Report_1.reportFactory, 'Report');
//# sourceMappingURL=Report.js.map