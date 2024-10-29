"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentSM = exports.AssessmentSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Assessment_1 = require("../../repository/Assessment");
class AssessmentSM extends generic_sm_1.GenericSM {
}
exports.AssessmentSM = AssessmentSM;
exports.assessmentSM = new AssessmentSM((0, typeorm_1.getCustomRepository)(Assessment_1.AssessmentRepository));
//# sourceMappingURL=Assessment.js.map