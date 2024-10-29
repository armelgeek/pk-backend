"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Report_1 = require("../../service/applicatif/Report");
class ReportController extends generic_controller_1.GenericController {
}
exports.reportController = new ReportController(Report_1.reportSA);
//# sourceMappingURL=Report.js.map