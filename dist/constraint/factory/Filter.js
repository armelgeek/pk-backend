"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterFactory = exports.FilterFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Filter.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class FilterFactory extends generic_factory_1.GenericFactory {
}
exports.FilterFactory = FilterFactory;
exports.filterFactory = new FilterFactory(schema, schema, responseSchema);
//# sourceMappingURL=Filter.js.map