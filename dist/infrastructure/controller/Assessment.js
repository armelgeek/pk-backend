"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Assessment_1 = require("../../service/applicatif/Assessment");
class AssessmentController extends generic_controller_1.GenericController {
}
exports.assessmentController = new AssessmentController(Assessment_1.assessmentSA);
//# sourceMappingURL=Assessment.js.map