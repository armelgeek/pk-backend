"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeparrainFactory = exports.CodeParrainFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.CodeParrain.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class CodeParrainFactory extends generic_factory_1.GenericFactory {
}
exports.CodeParrainFactory = CodeParrainFactory;
exports.codeparrainFactory = new CodeParrainFactory(schema, schema, responseSchema);
//# sourceMappingURL=CodeParrain.js.map