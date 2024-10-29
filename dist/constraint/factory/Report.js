"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportFactory = exports.ReportFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Report.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class ReportFactory extends generic_factory_1.GenericFactory {
}
exports.ReportFactory = ReportFactory;
exports.reportFactory = new ReportFactory(schema, schema, responseSchema);
//# sourceMappingURL=Report.js.map