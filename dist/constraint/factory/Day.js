"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayFactory = exports.DayFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Day.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class DayFactory extends generic_factory_1.GenericFactory {
}
exports.DayFactory = DayFactory;
exports.dayFactory = new DayFactory(schema, schema, responseSchema);
//# sourceMappingURL=Day.js.map