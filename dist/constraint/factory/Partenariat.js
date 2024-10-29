"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenariatFactory = exports.PartenariatFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Partenariat.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class PartenariatFactory extends generic_factory_1.GenericFactory {
}
exports.PartenariatFactory = PartenariatFactory;
exports.partenariatFactory = new PartenariatFactory(schema, schema, responseSchema);
//# sourceMappingURL=Partenariat.js.map