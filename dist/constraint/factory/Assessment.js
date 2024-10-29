"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentFactory = exports.AssessmentFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Assessment.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class AssessmentFactory extends generic_factory_1.GenericFactory {
}
exports.AssessmentFactory = AssessmentFactory;
exports.assessmentFactory = new AssessmentFactory(schema, schema, responseSchema);
//# sourceMappingURL=Assessment.js.map