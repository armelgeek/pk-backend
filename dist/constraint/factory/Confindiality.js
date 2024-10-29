"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confindialityFactory = exports.ConfindialityFactory = void 0;
const generic_factory_1 = require("../../common/constraint/factory/generic.factory");
const data_1 = require("../../data");
const commonSchema = {
    ...data_1.dataTDO.Confindiality.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = { ...commonSchema };
const responseSchema = {
    ...commonSchema,
    id: '_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
};
class ConfindialityFactory extends generic_factory_1.GenericFactory {
}
exports.ConfindialityFactory = ConfindialityFactory;
exports.confindialityFactory = new ConfindialityFactory(schema, schema, responseSchema);
//# sourceMappingURL=Confindiality.js.map