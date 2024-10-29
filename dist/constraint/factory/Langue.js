"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langueFactory = exports.LangueFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Langue.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class LangueFactory extends generic_factory_1.GenericFactory {
}
exports.LangueFactory = LangueFactory;
exports.langueFactory = new LangueFactory(schema, schema, responseSchema);
//# sourceMappingURL=Langue.js.map