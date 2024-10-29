"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenerFactory = exports.PartenerFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Partener.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PartenerFactory extends generic_factory_1.GenericFactory {
}
exports.PartenerFactory = PartenerFactory;
exports.partenerFactory = new PartenerFactory(schema, schema, responseSchema);
//# sourceMappingURL=Partener.js.map