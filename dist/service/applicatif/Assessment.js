"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentSA = exports.AssessmentSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Assessment_1 = require("../../constraint/factory/Assessment");
const Assessment_2 = require("../metier/Assessment");
class AssessmentSA extends generic_sa_1.GenericSA {
}
exports.AssessmentSA = AssessmentSA;
exports.assessmentSA = new AssessmentSA(Assessment_2.assessmentSM, Assessment_1.assessmentFactory, 'Assessment');
//# sourceMappingURL=Assessment.js.map