"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudoFactory = exports.PseudoFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Pseudo.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PseudoFactory extends generic_factory_1.GenericFactory {
}
exports.PseudoFactory = PseudoFactory;
exports.pseudoFactory = new PseudoFactory(schema, schema, responseSchema);
//# sourceMappingURL=Pseudo.js.map